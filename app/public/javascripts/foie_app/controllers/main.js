(function () {
  'use strict';
  function Main ($scope) {
    this.$scope = $scope;
    this.pageTitle = 'Foie Docs';
  }
  Main.prototype.shared = function (name) {
    return 'app/public/views/shared/' + name + '.html';
  }
  Main.$inject = [
                    '$scope'
                  ];
  this.controller('main', Main)
}).call(require('./index.js'));