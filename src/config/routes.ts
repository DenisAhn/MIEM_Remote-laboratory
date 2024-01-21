export const ROUTES = {
  root: '/',
  main: {
    mask: '/main/*',
    createRoute: () => '/main',
    async: {
      createRoute: () => '/main/async',
      mask: 'async',
    },
    about: {
      createRoute: () => '/main/about',
      mask: 'about',
    },
    compiles: {
      createRoute: () => '/main/compiles',
      mask: 'compiles',
    },
    demo: {
      createRoute: () => '/main/demo',
      mask: 'demo',
    },
    video: {
      createRoute: () => '/main/video',
      mask: 'video',
    },
  },
}
