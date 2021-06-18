export default function ({ store, $gtm }) {
  if (store.getters['cookies/analyticsEnabled']) {
    $gtm.init('GTM-TDWP3X');
  }
}
