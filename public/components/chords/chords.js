'use-strict'
angular.module('banjoman')
.directive('chordTest',function () {
  return{
    templateUrl: '/components/chords/chords.html',
    // scope:{},
    controller: function ($scope,$log,$timeout,$document,$window) {
      $scope.tuning = 'Gmajor'

      var open = [['D','G','B','D'],['D#','G#','C','D#'],['E','A','C#','E'],['F','A#','D','F'],
      ['F#','B','D#','F#'],['G','C','E','G']]
      var result = []
      // console.log(open)
      open.forEach(function(fret) {
        fret.forEach(function(note) {
          var test = ['D','F#','A']
          for (var i = 0 ; i<test.length; i++)
          if (note == test[i]){
            result.push(note)
          }
        })
      })
      //determining test..ie if($scope.chord == 'A', test = [A,C#,E])
      console.log('result:',result)
      var fret1 = ['D#','G#','C','D#']
      var fret2 = ['E','A','C#','E']
      var fret3 = ['F','A#','D','F']
      var fret4 = ['F#','B','D#','F#']
      var fret5 = ['G','C','E','G']

      $scope.test = []
      $scope.$watch(function(scope) { return scope.chord },
      function(newVal,oldVal) {
        $scope.chord = newVal
      }
    );
    // if($scope.chord == 'G') $scope.test = ['G','B','D']
    // if($scope.chord == 'A') $scope.test = ['A','C#','E']

    // $scope.watch($scope.chord,function(){


    //})

    // var result2 =[]
    //
    // $log.info('rows:',rows)
    // $scope.tuningChange = function(){
    //
    // }

    $scope.chordChange = function(newChord){
      $scope.chord = newChord;
      if(newChord == 'G') $scope.test = ['G','B','D'];
      if(newChord == 'Gm') $scope.test = ['G','Bb','D'];
      if(newChord == 'Gm7') $scope.test = ['G','Bb','D','F'];
      if(newChord == 'GM7') $scope.test = ['G','B','D','F#'];
      if(newChord == 'A') $scope.test = ['A','C#','E']
      if(newChord == 'Am') $scope.test = ['A','C','E']
      if(newChord == 'Am7') $scope.test = ['A','C','E','G']
      if(newChord == 'AM7') $scope.test = ['A','C#','E','Ab']
      if(newChord == 'B') $scope.test = ['B','Eb','F#']
      if(newChord == 'Bm') $scope.test = ['B','D','F']
      if(newChord == 'Bm7') $scope.test = ['B','D','F','G']
      if(newChord == 'BM7') $scope.test = ['B','Eb','F','G']
      if(newChord == 'C') $scope.test = ['C','E','G']
      if(newChord == 'Cm7') $scope.test = ['C','Eb','G','B']
      if(newChord == 'CM7') $scope.test = ['C','E','G','B']
      if(newChord == 'Cm') $scope.test = ['C','Eb','G']
      if(newChord == 'D') $scope.test = ['D','F#','A']
      if(newChord == 'Dm') $scope.test = ['D','F','A']
      if(newChord == 'Dm7') $scope.test = ['D','F','A','C']
      if(newChord == 'DM7') $scope.test = ['D','F#','A','C#']
      if(newChord == 'E') $scope.test = ['E','Ab','B']
      if(newChord == 'Em') $scope.test = ['E','G','B']
      if(newChord == 'Em7') $scope.test = ['E','G','B','D']
      if(newChord == 'EM7') $scope.test = ['E','Ab','B','Eb']
      if(newChord == 'F') $scope.test = ['F','A','C']
      if(newChord == 'Fm') $scope.test = ['F','Ab','C']
      if(newChord == 'Fm7') $scope.test = ['F','Ab','C','Eb']
      if(newChord == 'FM7') $scope.test = ['F','A','C','E']
      let fret = document.getElementsByClassName("fretboard");
      let rows = fret[0].rows

      $scope.resets = document.getElementsByClassName('high')

      let resets = angular.element($scope.resets)
      angular.forEach(resets,function(reset){
        let ellie = angular.element(reset)
        ellie.removeClass('high');
      })





      for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].cells
        $log.info('cells:',cells)
        $log.info('CL:',cells.classList)
        for (let j = 0; j < cells.length; j++) {
          $scope.test.forEach(function(note){
            if (cells[j].innerText == note) {
              $log.info('found one!',cells[j].innerText);
              let cellie = angular.element(cells[j]);
              cellie.addClass('high');
              // cells[j].className +='high'
            }
          })
        }
      }



    }




  }
}
})
