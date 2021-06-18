export const state = () => ({
  drawerOpen: false,
});

export const mutations = {
  toggleDrawer(state) {
    state.drawerOpen = !state.drawerOpen;
  },
};
