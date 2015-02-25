(function () {
  'use strict';

  var app = angular.module('foieApp', [
   'foieApp.services',
   'foieApp.controllers',
   'foieApp.directives',
   'ngRoute'
  ]);

  module.exports = {
    main: app
  };
  window.app = module.exports;
})();