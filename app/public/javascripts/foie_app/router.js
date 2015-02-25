(function () {
  'use strict';
  this.main.config(["$routeProvider", function ($routeProvider) {
    var views = "app/public/views";
    $routeProvider.
      when('/', {
        templateUrl: views + "/main/index.html"
      })
  }]);
}).call(require('./app.js'));