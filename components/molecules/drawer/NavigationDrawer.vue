<template>
  <div :class="['drawer-container', { 'drawer-container--open': open }]">
    <Container v-if="open" class="item-container">
      <ul class="item-list">
        <li
          v-for="(item, index) in $props.items"
          :key="index"
          class="drawer__item"
        >
          <NavigationItem v-bind="item" @click.native="(e) => close(e, true)" />
        </li>
      </ul>
    </Container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Container from '~/components/atoms/container/Container';

export default {
  name: 'Drawer',
  components: {
    Container,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState({
      open: (state) => state.navigation.drawerOpen,
    }),
  },
  watch: {
    async open(newVal) {
      const handler = this.close;
      if (newVal) {
        this.$el.focus();
        await this.$nextTick();
        window.addEventListener('click', handler, true);
      } else {
        window.removeEventListener('click', handler, true);
      }
    },
  },
  methods: {
    close(event, override = false) {
      if (!this.$el.contains(event.target) || override) {
        event.handledByTheDrawer = true;
        this.$store.commit('navigation/toggleDrawer');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$drawer-width: 100vw;

.drawer-container {
  transition: all ease-out 0.2s;
  position: absolute;
  height: 100vh;
  width: $drawer-width;
  background-color: $core-black;
  right: -$drawer-width;
  color: $core-white;
  z-index: $z-index-max;
  padding-top: ($spacing-default * 8);
  margin-top: -1px;

  @include breakpoint-min(sm) {
    width: map-get($grid-breakpoints, xs);
    right: -(map-get($grid-breakpoints, xs));
  }

  @include breakpoint-min(lg) {
    right: -$drawer-width;
  }

  &--open {
    right: 0;
  }

  .drawer__item {
    list-style: none;
  }

  .item-list {
    padding: 0;
  }

  .item-container {
    padding-bottom: 0;
    padding-top: 0;
    background-color: $core-black;
  }
}
</style>
