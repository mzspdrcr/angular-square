'use strict';

/**
 * @ngdoc function
 * @name owlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the owlApp
 */
angular.module('owlApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
