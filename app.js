const path = require('path');

var pjson = require('./package.json');

var AbbottCoreApp = require('abbott-app');

global.abbottCoreApp = new AbbottCoreApp();

global.abbottCoreApp.start();

console.log('App started!');