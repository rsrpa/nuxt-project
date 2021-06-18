export const makeCookiePolicy = function (cookies = [], policyVersion = '1') {
  return cookies.reduce(
    (cookiePolicy, cookie) => {
      cookiePolicy[cookie.type] = false;
      return cookiePolicy;
    },
    {
      version: policyVersion,
      consented: false,
    }
  );
};
