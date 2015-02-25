var fs = require('fs');
var _ = require('underscore');
var async = require('async');

//NEED BETTER WAY TO REQUIRE MODELS
var models = [require('../test/examples/models/userModel.js'),
  require('../test/examples/models/nameModel.js'),
  require('../test/examples/models/lameModel.js')
];


//FOIE Land
function foie(_class) {
  var _classProto = _class.prototype;
  var context = new _class();
  var types = _.filter(models, function (model) {
    return _.reduce(model, function(memo, value, index) {
      var objectHasProperty = (index === "class" ? true : context.hasOwnProperty(index));
      return memo && objectHasProperty;
    }, true);
  });
  _class.types = _.map(types, function(type) { return type.class; });
  _classProto.getName = function() { console.log(this.name) };
  return _class;
};

module.exports = foie;
