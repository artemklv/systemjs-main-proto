const bs = require('browser-sync').create();

bs.init({
  watchOptions: {
    ignoreInitial: true,
    ignored: '*.txt'
  },
  files: ['./src/app'],
  server: {
    index: 'index.dev.html',
    baseDir: 'src',
    routes: {
      "/node_modules": "node_modules",
      "/app": "src/app"
    }
  }
});
bs.watch();