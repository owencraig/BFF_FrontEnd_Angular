'use strict';

/**
 * @ngdoc function
 * @name bffFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bffFrontEndApp
 */
angular.module('bffFrontEndApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
