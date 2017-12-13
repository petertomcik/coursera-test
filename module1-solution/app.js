(function () {
  'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.messageError = "";
  $scope.dishes = "";
  $scope.color = "";
  
  $scope.checkDishes = function () {
    
    var stringsCount = splitString($scope.dishes, ",");
    if (stringsCount == 0) {
      $scope.color = "red";
      $scope.messageError = "Please enter data first";
    } else {
      $scope.color = "green";
      if ( stringsCount > 3){
        $scope.messageError = "Too much!" // + " " + stringsCount + " dishes";
      } else {
        $scope.messageError = "Enjoy!" // + " " + stringsCount + " dishes";
      };
    }
  };
  
  function splitString(stringToSplit, separator) {
  
    var arrayOfStrings = stringToSplit.split(separator);
    var stringsCount = arrayOfStrings.length;
    for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].trim() == "") {
        stringsCount = stringsCount - 1;      }
    };
    return stringsCount;

  };
  
};

})();