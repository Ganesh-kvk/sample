app.controller("FormController",["$scope", function($scope){
       $scope.master={};
       $scope.update = function(user) {
//           alert(user.name);
        $scope.master = angular.copy(user);
      };

}]);