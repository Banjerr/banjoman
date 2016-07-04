'use-strict'
angular.module('banjoman')
.directive('audioTest',function () {
  return{
    templateUrl: '/components/home/home.html',
    controller: function ($scope,$log,$timeout,ngAudio,stringService,$document,$window) {
      $scope.play = function(tuning,chord,string){
        $log.info('pressed!!!!!!!!!!')
        return ngAudio.play(obj[tuning][chord][string])
      }
      $scope.fingerChange = function(chord) {
        $scope.chord = chord;
        $log.info('pressed!')
      }


      $scope.tuning="Gmajor";
      $scope.chord="A";

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
          Gm:
          {
            one:s.D4,
            two:s.Bb3,
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
          },
          Am:
          {
            one: s.E4,
            two: s.C4,
            three:s.A3,
            four:s.E3,
            five:s.A4
          },
          B:
          {
            one: s.Eb4,
            two: s.B3,
            three:s.B3,
            four:s.Gb3,
            five:s.B4
          },
          Bm:
          {
            one: s.D4,
            two: s.D4,
            three:s.B3,
            four:s.Gb3,
            five:s.B4
          },
          Bm7:
          {
            one: s.Gb4,
            two: s.B3,
            three:s.A3,
            four:s.D4,
            five:s.A4
          },
        }
      }




    }
  }
})
