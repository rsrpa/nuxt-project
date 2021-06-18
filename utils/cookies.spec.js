import { makeCookiePolicy } from './cookies.js';
import { cookies, cookiePolicyVersion } from '~/data';

describe('makeCookiePolicy', () => {
  it('should generate a cookie policy', () => {
    const cookiePolicy = makeCookiePolicy(cookies, cookiePolicyVersion);

    expect(cookiePolicy).toMatchObject({
      version: '1',
      consented: false,
      necessary: false,
    });
  });
});
