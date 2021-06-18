import * as navigationModule from '~/store/navigation';

describe('store/navigation', () => {
  let navigationModuleClone;
  beforeEach(() => {
    jest.resetAllMocks();
    navigationModuleClone = Object.assign({}, navigationModule);
  });

  describe('state', () => {
    it('should have property drawerOpen and initial value of false', () => {
      expect(navigationModuleClone.state().drawerOpen).toBe(false);
    });
  });
});
