'use-strict'
angular.module('banjoman')
.directive('audioTest',function () {
  return{
    templateUrl: '/components/home/home.html',
    controller: function ($scope,$log,$timeout,ngAudio,stringService) {

      $scope.chord = "G";
      $scope.tester = 'jhi'


      let s = stringService;
      let play = ngAudio.play;
      let obj = {
        Gmajor:
        {
          G:
          {
            one:s.D4,
            two:s.B3,
            three:s.G3,
            four:s.D3,
            five:s.G4
          },
          A:
          {
            one: s.E4,
            two: s.Db4,
            three:s.A3,
            four:s.E3,
            five:s.A4
          }
        }
      }

      // class Player {
      //   constructor(tuning) {
      //     this.one = tuning.one;
      //     this.two = tuning.two;
      //     this.three = tuning.three;
      //     this.four = tuning.four;
      //     this.five = tuning.five;
      //   }
       $scope.tuning="Gmajor";
       $scope.chord="G";
        $scope.play = function(tuning,chord,string){
          return ngAudio.play(obj[tuning][chord][string])
        }
      
    }
  }
})
