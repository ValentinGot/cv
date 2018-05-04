// Load zone.js for the server.
require('zone.js/dist/zone-node');
const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const provideModuleMap = require('@nguniversal/module-map-ngfactory-loader').provideModuleMap;
const ngExpressEngine = require('@nguniversal/express-engine').ngExpressEngine;

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'dist-server'));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

exports.ssr = functions.https.onRequest(app);
