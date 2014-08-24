var notjs = require('not.js');

module.exports = function(scope) {

  var context = notjs.create();
  
  with (context(scope)) {
    (function() {
      h1; $($scope.title); $h1
      ul({class: 'un-list'})
      for (var scratch in $scope.items) {
        if ($scope.items.hasOwnProperty(scratch)) {
        
          li.item
            $('Item: '+$scope.items[scratch])
          $li
          
        }
      }
      $ul
    })();
  }
  
  return context.collect();
};