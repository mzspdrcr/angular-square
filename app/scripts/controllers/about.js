'use strict';

/**
 * @ngdoc function
 * @name owlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the owlApp
 */
angular.module('owlApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
