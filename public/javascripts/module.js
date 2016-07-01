(function() {
  'use strict';

  angular.module('banjoman',['ngAnimate','ui.router','ngAudio'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      template:"<audio-test><audio-test/>"
    })
    .state('projects', {
      url: '/projects',
      templateUrl:"../components/home/projects.html",
      controller: function($scope){
      }
    })
    .state('resume', {
      url: '/resume',
      templateUrl:"./components/home/resume.html",
      controller: function($scope){
      }
    })
    // $stateProvider.html5Mode(true)
  })
}());
