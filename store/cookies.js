import cookies from 'js-cookie';
import { COOKIE_TYPES, initialCookiePolicy } from '~/data/cookies';

const COOKIE_POLICY_NAME = 'cookie_policy';
const COOKIE_POLICY_DURATION = 90;

export const state = () => {
  const existingPolicy = cookies.get(COOKIE_POLICY_NAME);
  return {
    cookiePolicy: existingPolicy
      ? JSON.parse(existingPolicy)
      : initialCookiePolicy,
  };
};

export const mutations = {
  setCookiePolicy(state, cookiePolicy) {
    state.cookiePolicy = { ...state.cookiePolicy, ...cookiePolicy };

    cookies.set(COOKIE_POLICY_NAME, JSON.stringify(state.cookiePolicy), {
      expires: COOKIE_POLICY_DURATION,
    });
  },
  setConsent(state) {
    state.cookiePolicy.consented = true;
  },
};

export const actions = {
  acceptAllCookies({ commit, state }) {
    const { consented, version, ...allCookies } = state.cookiePolicy;

    Object.keys(allCookies).forEach((type) => {
      allCookies[type] = true;
    });

    commit('setConsent');
    commit('setCookiePolicy', allCookies);
  },
};

export const getters = {
  hasConsented: (state) =>
    state.cookiePolicy?.consented &&
    state.cookiePolicy?.version === initialCookiePolicy.version,
  analyticsEnabled: (state, getters) =>
    getters.hasConsented && state.cookiePolicy[COOKIE_TYPES.ANALYTICS],
};
