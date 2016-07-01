angular.module('banjoman')
.directive('audioTest',function () {
  return{
    templateUrl: '/components/home/home.html',
    controller: function ($scope,$log,$timeout,ngAudio,stringService) {

      var synth = new Tone.FMSynth().toMaster();
      let s = stringService
      $scope.playSynth1 = function(){
        return  ngAudio.play(s.D4)

      }
      $scope.playSynth2 = function(){
        // return  synth.triggerAttackRelease("B3", "4n");
        return  ngAudio.play(s.B3)

      }
      $scope.playSynth3 = function(){
        // return  synth.triggerAttackRelease("G3", "4n");
        return  ngAudio.play(s.G3)

      }
      $scope.playSynth4 = function(){
        // return  synth.triggerAttackRelease("D3", "4n");
        return  ngAudio.play(s.D3)

      }
      $scope.playSynth5 = function(){
        // return  synth.triggerAttackRelease("G4", "4n");
        return  ngAudio.play(s.G4)

      }






    }
  }
})
