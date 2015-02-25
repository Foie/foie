(function () {
  'use strict';

  var app = angular.module('foieApp', [
   'foieApp.services',
   'foieApp.controllers',
   'foieApp.directives'
  ]);

  module.exports = {
    main: app
  };
  window.app = module.exports;
})();