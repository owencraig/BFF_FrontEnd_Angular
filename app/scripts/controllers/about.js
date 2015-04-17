'use strict';

/**
 * @ngdoc function
 * @name bffFrontEndApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bffFrontEndApp
 */
angular.module('bffFrontEndApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
