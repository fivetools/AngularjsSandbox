var _ = require('underscore');

module.exports = ['$scope', '$location', function ($scope, $location) {
    var vm = this;
    vm.title = 'AngularJS SPA';
    vm.location = $location;
}];
