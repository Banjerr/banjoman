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
      $scope.strum= function(tuning,chord,string1,string2,string3,string4){
        // return
        ngAudio.play(obj[tuning][chord][string1]);
        ngAudio.play(obj[tuning][chord][string2]);
        ngAudio.play(obj[tuning][chord][string3]);
        ngAudio.play(obj[tuning][chord][string4]);
      }
      // $scope.tuningChange = function(tuning){
      //   $scope.tuning = tuning;
      // }


      // $scope.tuning="Gmajor";
      $scope.chord="A";

      let s = stringService;
      let play = ngAudio.play;
      let obj = {
        GMajor:
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
          Gm7:
          {
            one:s.F4,
            two:s.D4,
            three:s.Bb3,
            four:s.F3,
            five:s.G4
          },
          A:
          {
            one: s.E4,
            two: s.D4,
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
          Am7:
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
          C:
          {
            one: s.E4,
            two: s.C4,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          Cm:
          {
            one: s.Eb4,
            two: s.C4,
            three:s.G3,
            four:s.Eb3,
            five:s.G4
          },
          Cm7:
          {
            one: s.Eb4,
            two: s.C4,
            three:s.Bb3,
            four:s.Eb3,
            five:s.G4
          },
          D:
          {
            one: s.Gb4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          Dm:
          {
            one: s.F4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          Dm7:
          {
            one: s.F4,
            two: s.C4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          E:
          {
            one: s.E4,
            two: s.B3,
            three:s.Ab3,
            four:s.E3,
            five:s.G4
          },
          Em:
          {
            one: s.E4,
            two: s.B3,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          Em7:
          {
            one: s.D4,
            two: s.B3,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          F:
          {
            one: s.F4,
            two: s.C4,
            three:s.A3,
            four:s.F3,
            five:s.G4
          },
          Fm:
          {
            one: s.F4,
            two: s.C4,
            three:s.Ab3,
            four:s.F3,
            five:s.G4
          },
          Fm7:
          {
            one: s.F4,
            two: s.C4,
            three:s.Ab3,
            four:s.Eb3,
            five:s.G4
          },
        },
        Gm:{
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
          Gm7:
          {
            one:s.F4,
            two:s.D4,
            three:s.Bb3,
            four:s.F3,
            five:s.G4
          },
          A:
          {
            one: s.E4,
            two: s.D4,
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
          Am7:
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
          C:
          {
            one: s.E4,
            two: s.C4,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          Cm:
          {
            one: s.Eb4,
            two: s.C4,
            three:s.G3,
            four:s.Eb3,
            five:s.G4
          },
          Cm7:
          {
            one: s.Eb4,
            two: s.C4,
            three:s.Bb3,
            four:s.Eb3,
            five:s.G4
          },
          D:
          {
            one: s.Gb4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          Dm:
          {
            one: s.F4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          Dm7:
          {
            one: s.F4,
            two: s.C4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          E:
          {
            one: s.E4,
            two: s.B3,
            three:s.Ab3,
            four:s.E3,
            five:s.G4
          },
          Em:
          {
            one: s.E4,
            two: s.B3,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          Em7:
          {
            one: s.D4,
            two: s.B3,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          F:
          {
            one: s.F4,
            two: s.C4,
            three:s.A3,
            four:s.F3,
            five:s.G4
          },
          Fm:
          {
            one: s.F4,
            two: s.C4,
            three:s.Ab3,
            four:s.F3,
            five:s.G4
          },
          Fm7:
          {
            one: s.F4,
            two: s.C4,
            three:s.Ab3,
            four:s.Eb3,
            five:s.G4
          }

        },
        Gmodal:{
          G:
          {
            one:s.D4,
            two:s.D4,
            three:s.G3,
            four:s.D3,
            five:s.G4
          },
          Gm:
          {
            one:s.D4,
            two:s.D4,
            three:s.Bb3,
            four:s.D3,
            five:s.G4
          },
          Gm7:
          {
            one:s.F4,
            two:s.D4,
            three:s.Bb3,
            four:s.F3,
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
          Am7:
          {
            one: s.E4,
            two: s.C4,
            three:s.A3,
            four:s.E3,
            five:s.G4
          },
          B:
          {
            one: s.Gb4,
            two: s.Eb4,
            three:s.B3,
            four:s.Gb3,
            five:s.B4
          },
          Bm:
          {
            one: s.Gb4,
            two: s.D4,
            three:s.B3,
            four:s.Gb3,
            five:s.B4
          },
          Bm7:
          {
            one: s.Gb4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.A4
          },
          C:
          {
            one: s.G4,
            two: s.E4,
            three:s.C4,
            four:s.G3,
            five:s.G4
          },
          Cm:
          {
            one: s.G4,
            two: s.Eb4,
            three:s.C4,
            four:s.G3,
            five:s.G4
          },
          Cm7:
          {
            one: s.Eb4,
            two: s.Eb4,
            three:s.B3,
            four:s.G3,
            five:s.G4
          },
          D:
          {
            one: s.Gb4,
            two: s.D4,
            three:s.A3,
            four:s.Gb3,
            five:s.A4
          },
          Dm:
          {
            one: s.F4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.A4
          },
          Dm7:
          {
            one: s.F4,
            two: s.C4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          E:
          {
            one: s.E4,
            two: s.E4,
            three:s.B3,
            four:s.G3,
            five:s.G4
          },
          Em:
          {
            one: s.Gb4,
            two: s.E4,
            three:s.B3,
            four:s.Gb3,
            five:s.Gb4
          },
          Em7:
          {
            one: s.D4,
            two: s.D4,
            three:s.B3,
            four:s.Gb3,
            five:s.Gb4
          },
          F:
          {
            one: s.F4,
            two: s.C4,
            three:s.Ab3,
            four:s.F3,
            five:s.G4
          },
          Fm:
          {
            one: s.F4,
            two: s.C4,
            three:s.Ab3,
            four:s.F3,
            five:s.G4
          },
          Fm7:
          {
            one: s.E4,
            two: s.C4,
            three:s.Ab3,
            four:s.Eb3,
            five:s.G4
          }

        },
        C:{
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
          Gm7:
          {
            one:s.F4,
            two:s.D4,
            three:s.Bb3,
            four:s.F3,
            five:s.G4
          },
          A:
          {
            one: s.E4,
            two: s.D4,
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
          Am7:
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
          C:
          {
            one: s.E4,
            two: s.C4,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          Cm:
          {
            one: s.Eb4,
            two: s.C4,
            three:s.G3,
            four:s.Eb3,
            five:s.G4
          },
          Cm7:
          {
            one: s.Eb4,
            two: s.C4,
            three:s.Bb3,
            four:s.Eb3,
            five:s.G4
          },
          D:
          {
            one: s.Gb4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          Dm:
          {
            one: s.F4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          Dm7:
          {
            one: s.F4,
            two: s.C4,
            three:s.A3,
            four:s.D3,
            five:s.G4
          },
          E:
          {
            one: s.E4,
            two: s.B3,
            three:s.Ab3,
            four:s.E3,
            five:s.G4
          },
          Em:
          {
            one: s.E4,
            two: s.B3,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          Em7:
          {
            one: s.D4,
            two: s.B3,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          F:
          {
            one: s.F4,
            two: s.C4,
            three:s.A3,
            four:s.F3,
            five:s.G4
          },
          Fm:
          {
            one: s.F4,
            two: s.C4,
            three:s.Ab3,
            four:s.F3,
            five:s.G4
          },
          Fm7:
          {
            one: s.F4,
            two: s.C4,
            three:s.Ab3,
            four:s.Eb3,
            five:s.G4
          }

        },
        DblC:{
          G:
          {
            one:s.D4,
            two:s.D4,
            three:s.B3,
            four:s.D3,
            five:s.G4
          },
          Gm:
          {
            one:s.D4,
            two:s.D4,
            three:s.Bb3,
            four:s.D3,
            five:s.G4
          },
          Gm7:
          {
            one:s.F4,
            two:s.D4,
            three:s.Bb3,
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
          Am7:
          {
            one: s.E4,
            two: s.C4,
            three:s.A3,
            four:s.C3,
            five:s.A4
          },
          B:
          {
            one: s.Gb4,
            two: s.Eb4,
            three:s.B3,
            four:s.Eb3,
            five:s.B4
          },
          Bm:
          {
            one: s.Gb4,
            two: s.D4,
            three:s.B3,
            four:s.D3,
            five:s.B4
          },
          Bm7:
          {
            one: s.Gb4,
            two: s.D4,
            three:s.B3,
            four:s.D3,
            five:s.A4
          },
          C:
          {
            one: s.E4,
            two: s.C4,
            three:s.G3,
            four:s.E3,
            five:s.G4
          },
          Cm:
          {
            one: s.Eb4,
            two: s.C4,
            three:s.G3,
            four:s.Eb3,
            five:s.G4
          },
          Cm7:
          {
            one: s.Eb4,
            two: s.C4,
            three:s.Bb3,
            four:s.Eb3,
            five:s.G4
          },
          D:
          {
            one: s.Gb4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.A4
          },
          Dm:
          {
            one: s.F4,
            two: s.D4,
            three:s.A3,
            four:s.D3,
            five:s.A4
          },
          Dm7:
          {
            one: s.F4,
            two: s.C4,
            three:s.A3,
            four:s.D3,
            five:s.A4
          },
          E:
          {
            one: s.E4,
            two: s.E4,
            three:s.Ab3,
            four:s.E3,
            five:s.B4
          },
          Em:
          {
            one: s.E4,
            two: s.E4,
            three:s.B3,
            four:s.E3,
            five:s.G4
          },
          Em7:
          {
            one: s.E4,
            two: s.D4,
            three:s.G3,
            four:s.E3,
            five:s.B4
          },
          F:
          {
            one: s.F4,
            two: s.C4,
            three:s.A3,
            four:s.F3,
            five:s.A4
          },
          Fm:
          {
            one: s.F4,
            two: s.C4,
            three:s.Ab3,
            four:s.C3,
            five:s.Ab4
          },
          Fm7:
          {
            one: s.F4,
            two: s.Eb4,
            three:s.Ab3,
            four:s.C3,
            five:s.Ab4
          }

        }
      }




    }
  }
})
