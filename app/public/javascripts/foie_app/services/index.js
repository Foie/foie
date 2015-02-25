(function () {
  'use strict';
  console.log(this)
  this.services = angular.module('foieApp.services', []);
  module.exports = this.services;
}).call(require('../app.js'));