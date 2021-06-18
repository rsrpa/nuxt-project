import { makeCookiePolicy } from '@/utils/cookies.js';

// cookie policy version
export const policyVersion = '1';

export const COOKIE_TYPES = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
};

// all the cookies types
export const cookies = [
  {
    name: 'cookie_policy',
    purpose: 'Remembers your cookies settings on our website',
    expires: '90 days',
    type: COOKIE_TYPES.NECESSARY,
  },
  {
    name: '_ga',
    purpose:
      'This cookie enables us to: estimate our audience size and usage pattern.',
    expires: '90 days',
    type: COOKIE_TYPES.ANALYTICS,
  },
  {
    name: '_hjIncludedInPageviewSample',
    purpose:
      'This cookie enables us to: estimate our audience size and usage pattern.',
    expires: '90 days',
    type: COOKIE_TYPES.ANALYTICS,
  },
  {
    name: '_hjid',
    purpose:
      'This cookie enables us to: estimate our audience size and usage pattern.',
    expires: '90 days',
    type: COOKIE_TYPES.ANALYTICS,
  },
  {
    name: '_gid',
    purpose:
      'This cookie enables us to: estimate our audience size and usage pattern.',
    expires: '90 days',
    type: COOKIE_TYPES.ANALYTICS,
  },
  {
    name: '_ga',
    purpose:
      'This cookie enables us to: estimate our audience size and usage pattern.',
    expires: '90 days',
    type: COOKIE_TYPES.ANALYTICS,
  },
  {
    name: '_hjAbsoluteSessionInProgress',
    purpose:
      'This cookie enables us to: estimate our audience size and usage pattern.',
    expires: '90 days',
    type: COOKIE_TYPES.ANALYTICS,
  },
  {
    name: '_hjFirstSeen',
    purpose:
      'This cookie enables us to: estimate our audience size and usage pattern.',
    expires: '90 days',
    type: COOKIE_TYPES.ANALYTICS,
  },
];

// initial cookie policy
export const initialCookiePolicy = makeCookiePolicy(cookies, policyVersion);
