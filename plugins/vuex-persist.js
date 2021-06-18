import VuexPersistence from 'vuex-persist';
export default function ({ store }) {
  new VuexPersistence({
    storage: window.sessionStorage,
  }).plugin(store);
}
