import gtm from '~/plugins/gtm';
const mockCtx = {
  store: {
    getters: {
      'cookies/analyticsEnabled': false,
    },
  },
  $gtm: {
    init: jest.fn(),
  },
};

describe('gtm plugin', () => {
  it(
    'should initialise GTM when the user has granted consent and allowed' +
      'for analytics category cookies to be written',
    () => {
      mockCtx.store.getters['cookies/analyticsEnabled'] = true;
      gtm(mockCtx);
      expect(mockCtx.$gtm.init).toHaveBeenCalledWith('GTM-TDWP3X');
    }
  );
});
