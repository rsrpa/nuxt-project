const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/favicons/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/images/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/favicons/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/images/favicons/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/images/favicons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/hby3bsy.css',
      },
    ],
  },
  // Customize the progress-bar color
  loading: { color: '#00E200' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    // '~/assets/css/main.css',
    // SCSS file in the project
    // '~/assets/css/main.scss',
  ],

  // Storybook: https://storybook.nuxtjs.org/setup
  storybook: {
    // Add Storybook options
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Order is important!
  plugins: [
    { src: '~/plugins/vuex-persist', mode: 'client' },
    { src: '~/plugins/gtm', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    ['@nuxtjs/moment', { timezone: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    [
      '@nuxtjs/gtm',
      {
        debug: isDev,
        pageTracking: true,
      },
    ],
  ],
  styleResources: {
    scss: ['assets/scss/globals.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    debug: true,
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://strapi.web.dev.mindgym.io/graphql',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: { sourceMap: !isDev },
    },
  },
};
