import cookies from 'js-cookie';
import * as cookieModule from '~/store/cookies';
import { initialCookiePolicy } from '~/data/cookies';

const makeAcceptedCookies = () => {
  const cookiePolicy = { ...initialCookiePolicy };
  const { version, ...allCookies } = cookiePolicy;

  Object.keys(allCookies).forEach((type) => {
    allCookies[type] = true;
  });

  return {
    version,
    ...allCookies,
  };
};
let cookieModuleClone = {};
const acceptAllCookies = makeAcceptedCookies();

cookies.get = jest
  .fn()
  .mockImplementation(() => JSON.stringify(initialCookiePolicy));
cookies.set = jest.fn().mockImplementation(() => true);

describe('store/cookie', () => {
  beforeEach(() => {
    cookieModuleClone = Object.assign({}, cookieModule);
    cookieModuleClone.state.cookiePolicy = { ...initialCookiePolicy };
  });
  describe('state', () => {
    it('the property cookiePolicy should map the browser cookie object if the cookie is set', () => {
      expect(cookieModuleClone.state.cookiePolicy).toMatchObject(
        initialCookiePolicy
      );
    });
  });

  describe('getters', () => {
    describe('hasConsented', () => {
      it("should return false if cookies haven't been accepted", () => {
        const consent = cookieModuleClone.getters.hasConsented(
          cookieModuleClone.state
        );

        expect(consent).toBe(false);
      });

      it('should return true if cookies have been accepted', () => {
        cookieModuleClone.state.cookiePolicy = { ...acceptAllCookies };
        const consent = cookieModuleClone.getters.hasConsented(
          cookieModuleClone.state
        );

        expect(consent).toBe(true);

        cookieModuleClone.state.cookiePolicy = { ...initialCookiePolicy };
      });
    });
  });

  describe('mutations', () => {
    describe('setCookiePolicy', () => {
      it('should update the property cookiePolicy from the state', () => {
        cookieModuleClone.mutations.setCookiePolicy(
          cookieModuleClone.state,
          acceptAllCookies
        );

        expect(cookieModuleClone.state.cookiePolicy).toMatchObject(
          acceptAllCookies
        );
      });

      it('should set the cookie browser', () => {
        cookieModuleClone.mutations.setCookiePolicy(
          cookieModuleClone.state,
          acceptAllCookies
        );

        expect(cookies.set).toHaveBeenCalledWith(
          'cookie_policy',
          JSON.stringify(acceptAllCookies),
          { expires: 90 }
        );
      });
    });

    describe('setConsent', () => {
      it('should update set consented in cookiePolicy to true', () => {
        cookieModuleClone.mutations.setConsent(cookieModuleClone.state);

        expect(cookieModuleClone.state.cookiePolicy.consented).toBe(true);
      });
    });
  });

  describe('actions', () => {
    const mockContext = {
      commit: jest.fn(),
      dispatch: jest.fn(),
      state: {
        cookiePolicy: initialCookiePolicy,
      },
    };

    describe('acceptAllCookies', () => {
      beforeEach(() => {
        jest.clearAllMocks();
      });

      it('should trigger the setCookiePolicy mutation', () => {
        cookieModuleClone.actions.acceptAllCookies(mockContext);

        expect(mockContext.commit.mock.calls[0]).toEqual(['setConsent']);
        expect(mockContext.commit.mock.calls[1]).toEqual([
          'setCookiePolicy',
          { necessary: true, analytics: true },
        ]);
      });
    });
  });
});
