'use-strict'
angular.module('banjoman')
.directive('chordTest',function () {
  return{
    templateUrl: '/components/chords/chords.html',
    // scope:{},
    controller: function ($scope,$log,$timeout,$document,$window) {


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
    if($scope.chord == 'G') $scope.test = ['G','B','D']
    // if($scope.chord == 'A') $scope.test = ['A','C#','E']

    // $scope.watch($scope.chord,function(){


    //})

    var result2 =[]
    var fret = document.getElementsByClassName("fretboard");
    console.log('fret',fret)
    var rows = fret[0].rows
    $log.info('rows:',rows)

    $scope.chordChange = function(newChord){
      if(newChord == 'G') $scope.test = ['G','B','D'];
      if(newChord == 'A') $scope.test = ['A','C#','E']


$scope.resets = document.getElementsByClassName('high')
let resets = angular.element($scope.resets)

$log.info('resets',$scope.resets)
angular.forEach(resets,function(reset){
  $log.info('tooobeeereseet:',reset)
  let ellie = angular.element(reset)
  ellie.removeClass('high');



})


// for (var i = 0; i < $scope.resets.length; i++) {
//   $log.info(' to be reset:',$scope.resets[i]);





// $log.info('RCL:',resets.classList)
// let index = resets.classList.indexOf('high')
// resets.classList.splice(index,1)
// for (let i = 0; i < resets.length; i++) {
//   $log.info('to be reset:',resets[i])
//   // let cL = resets[i].classList
//   // let index = cL.indexOf('high')
//   // cL.splice(index,1)
// }
      for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].cells
        $log.info('cells:',cells)
        $log.info('CL:',cells.classList)
        for (let j = 0; j < cells.length; j++) {
          $scope.test.forEach(function(note){
            if (cells[j].innerText == note) {
              $log.info('found one!',cells[j].innerText);
              cells[j].className +='high'
            }
          })
        }
      }

    }
    // var fretObj = fret[0];
    // console.log('fretObj:',fretObj);
    // var rows = fret.rows

    //var cells = $rows.cells[0].innerText
    // console.log('rows:',rows)
    // console.log('cells:',$scope.cells)

    // for(var j = 0; j < rows.length; j++){
    //   // console.log(rows[j].cells)
    //   var cells = rows[j].cells
    //   console.log('cells',cells)
    //
    //   for (var k= 0; k < cells.length; k++) {
    //     var cell = cells[k]
    //     // cell.className += " high"
    //     // console.log('cellText:',cell.innerText)
    //   }
    // }




  }
}
})
