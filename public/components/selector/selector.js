'use-strict'
angular.module('banjoman')
.directive('selector',function () {
  return{
    templateUrl: '/components/selector/selector.html',
    scope:{
      tuning: '=',
      chord: '=',
      obj: '='
    },
    controller: function ($scope,$log) {
      $scope.tuning = 'GMajor'
    
    }
  }
})
