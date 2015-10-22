'use strict';

angular.module('po.controllers', [])

.controller('AppCtrl', function($scope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.author = 'Josh Diaz';

})

.controller('AllOrdinancesCtrl', function($scope) {
  $scope.ordinances = [
    { title: 'Administering to the Sick', uri: 'administering-sick' },
    { title: 'Baptism and Confirmation', uri: 'baptism-confirmation' },
    { title: 'Conferring the Priesthood and Ordaining to an Office', uri: 'conferring-priesthood-ordaining-office' },
    { title: 'Consecrating Oil', uri: 'consecrating-oil' },
    { title: 'Dedicating Graves', uri: 'dedicating-graves' },
    { title: 'Dedicating Homes', uri: 'dedicating-homes' },
    { title: 'Father\'s Blessings and Other Blessings of Comfort and Counsel', uri: 'father-other-blessings' },
    { title: 'Naming and Blessing Children', uri: 'naming-blessing-children' },
    { title: 'Patriarchal Blessings', uri: 'patriarchal-blessings' },
    { title: 'Sacrament', uri: 'sacrament' },
    { title: 'Setting Apart Officers and Teachers', uri: 'setting-apart-officers-teachers' }
  ];
});



// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });
