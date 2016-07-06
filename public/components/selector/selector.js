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
      $scope.tuning ='C';
      $scope.chordChange = function(newChord){
        $scope.chord = newChord;
        if(newChord == 'G') $scope.test = ['G','B','D'];
        if(newChord == 'Gm') $scope.test = ['G','Bb','D'];
        if(newChord == 'Gm7') $scope.test = ['G','Bb','D','F'];
        if(newChord == 'GM7') $scope.test = ['G','B','D','F'];
        if(newChord == 'A') $scope.test = ['A','C#','E']
        if(newChord == 'Am') $scope.test = ['A','C','E']
        if(newChord == 'Am7') $scope.test = ['A','C','E','G']
        if(newChord == 'AM7') $scope.test = ['A','C#','E','G']
        if(newChord == 'B') $scope.test = ['B','Eb','F#']
        if(newChord == 'Bm') $scope.test = ['B','D','F#']
        if(newChord == 'Bm7') $scope.test = ['B','D','F#','A']
        if(newChord == 'BM7') $scope.test = ['B','Eb','F','A']
        if(newChord == 'C') $scope.test = ['C','E','G']
        if(newChord == 'Cm7') $scope.test = ['C','Eb','G','Bb']
        if(newChord == 'CM7') $scope.test = ['C','E','G','Bb']
        if(newChord == 'Cm') $scope.test = ['C','Eb','G']
        if(newChord == 'D') $scope.test = ['D','F#','A']
        if(newChord == 'Dm') $scope.test = ['D','F','A']
        if(newChord == 'Dm7') $scope.test = ['D','F','A','C']
        if(newChord == 'DM7') $scope.test = ['D','F#','A','CC']
        if(newChord == 'E') $scope.test = ['E','Ab','B']
        if(newChord == 'Em') $scope.test = ['E','G','B']
        if(newChord == 'Em7') $scope.test = ['E','G','B','D']
        if(newChord == 'EM7') $scope.test = ['E','G','B','D']
        if(newChord == 'F') $scope.test = ['F','A','C']
        if(newChord == 'Fm') $scope.test = ['F','Ab','C']
        if(newChord == 'Fm7') $scope.test = ['F','Ab','C','E']
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
