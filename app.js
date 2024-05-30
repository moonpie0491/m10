angular.module('groceryApp', [])
.controller('GroceryController', ['$scope', function($scope) {
    $scope.groceryList = [];

    $scope.addGroceryItem = function() {
        if ($scope.groceryForm.$valid) {
            $scope.groceryList.push({
                name: $scope.newItem.name,
                quantity: $scope.newItem.quantity
            });
            $scope.newItem = {};
            $scope.groceryForm.$setPristine();
            $scope.groceryForm.$setUntouched();
        }
    };
/*
    $scope.deleteGroceryItem = function(item) {
        const index = $scope.groceryList.indexOf(item);
        if (index !== -1) {
            $scope.groceryList.splice(index, 1);
        }
    };
   */  
}]);
