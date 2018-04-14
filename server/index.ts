import * as angularUniversal from 'angular-universal-express-firebase';

export let ssrapp = angularUniversal.trigger({
  index: __dirname + '/dist-server/index.html',
  main: __dirname + '/dist-server/main.bundle.js',
  enableProdMode: true,
  cdnCacheExpiry: 1200,
  browserCacheExpiry: 600,
  staleWhileRevalidate: 120
});
