'use-strict'
angular.module('banjoman')
.directive('audioTest',function () {
  return{
    templateUrl: '/components/home/home.html',
    controller: function ($scope,$log,$timeout,ngAudio,stringService) {

      var synth = new Tone.FMSynth().toMaster();
      let s = stringService;
      let play = ngAudio.play;
      $scope.tunings = {
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
            three:s.A4,
            four:s.E3,
            five:s.A4
          }
        }
      }

      class Player {
        constructor(tuning) {
          this.one = tuning.one;
          this.two = tuning.two;
          this.three = tuning.three;
          this.four = tuning.four;
          this.five = tuning.five;
        }
        play1(){
          $log.info('triggered');
          return ngAudio.play(this.one)
        }
        play2(){
          $log.info('triggered');
          return ngAudio.play(this.two)
        }
        play3(){
          $log.info('triggered');
          return ngAudio.play(this.three)
        }
        play4(){
          $log.info('triggered');
          return ngAudio.play(this.four)
        }
        play5(){
          $log.info('triggered');
          return ngAudio.play(this.five)
        }
      }
      $scope.A = new Player($scope.tunings.Gmajor.G)
      $log.info('scopeA:',$scope.A)
      // class Tuning extends Object {
      //     constructor(){

    }
    // setStrings(tuning){
    //   return
    //   this.one = tuning.one;
    //   this.two = tuning.two;
    //   this.three = tuning.three;
    //   this.four = tuning.four;
    //   this.five = tuning.five;
    // }
    //   playSound1(tuning){
    //     return
    //     ngAudio.play(tuning.one);
    //   }
    //   playSound2(tuning){
    //     return
    //     ngAudio.play(tuning.two);
    //   }
    //   playSound3(tuning){
    //     return
    //     ngAudio.play(tuning.three);
    //   }
    //   playSound4(tuning){
    //     return
    //     ngAudio.play(tuning.four);
    //   }
    //   playSound5(tuning){
    //     return
    //     ngAudio.play(tuning.five);
    //   }
    // }
    // this.Tuning.set(Strings)
    // $scope.Tuning.setStrings($scope.tunings.Gmajor.A)

    // $log.info('tuning:',tuning)
    // $log.info("Gmaj:",$scope.tunings.Gmajor.A.one)
    // $scope.setStrings = function(tuning){
    //   return
    //   $scope.playSynth1(tuning.one);
    //   $scope.playSynth2(tuning.two);
    //   $scope.playSynth3(tuning.three);
    //   $scope.playSynth4(tuning.four);
    //   $scope.playSynth5(tuning.five);
  }
  // $log.info('PS1',$scope.playSynth1)
  // $scope.playSynth1 = function(note){
  //   return  ngAudio.play(note)
  // }
  // $scope.playSynth2 = function(note){
  //   return  ngAudio.play(note)
  // }
  // $scope.playSynth3 = function(note){
  //   return  ngAudio.play(note)
  // }
  // $scope.playSynth4 = function(note){
  //   return  ngAudio.play(note)
  // }
  // $scope.playSynth5 = function(note){
  //   return  ngAudio.play(note)
  // }




  //         "A":
  //         {
  //           "one": s.E4,
  //           "two": s.Db4,
  //           "three":s.A4,
  //           "four":s.E3,
  //           "five":s.A4
  //         }
  //       }
  //     ]
  //   }
  // ]
  // $log.info('?????:',$scope.tunings.Gmajor.A.three)







})
