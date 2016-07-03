'use-strict'
angular.module('banjoman')
.directive('chordTest',function () {
  return{
    templateUrl: '/components/chords/chords.html',
    controller: function ($scope,$log,$timeout) {

      $scope.open = [['D','G','B','D'],['D#','G#','C','D#'],['E','A','C#','E'],['F','A#','D','F'],
      ['F#','B','D#','F#'],['G','C','E','G']]
      let result = []
      $log.info(open)
      $scope.open.forEach(function(fret) {
        fret.forEach(function(note) {
          let test = ['D','F#','A']
          for (let i = 0 ; i<test.length; i++)
          if (note == test[i]){
            result.push(note)
          }
        })
      })
      //determining test..ie if($scope.chord == 'A', test = [A,C#,E])
      $log.info('result:',result)
      let fret1 = ['D#','G#','C','D#']
      let fret2 = ['E','A','C#','E']
      let fret3 = ['F','A#','D','F']
      let fret4 = ['F#','B','D#','F#']
      let fret5 = ['G','C','E','G']
      $scope.tuning="Gmajor";
      $scope.chord="G";

      let result2 =[]
      $scope.fret = angular.element(element.getElementsByClassName("fretboard"));
      $log.info('fret',$scope.fret)
      let rows = $scope.fret[0].rows
      // $scope.cells = $scope.rows.cells[0].innerText
      $log.info('rows:',rows)
      // $log.info('cells:',$scope.cells)

      for(let i = 0; i < rows.length; i++){
        // $log.info(rows[i].cells)
        let cells = rows[i].cells
        $log.info('cells',cells)

        for (let j= 0; j < cells.length; i++) {
          let cell = cells[i]
          // cell.className += " high"
          // $log.info('cellText:',cell.innerText)
        }
      }



    }
  }
})
