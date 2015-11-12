/**
 * Created by Clayton on 03/11/2015.
 */
angular.module('app')
    .controller('IndexController', IndexController);

function IndexController($scope){

    $scope.viewModel = {};

    $scope.list = [];

    $scope.save = function(){
        $scope.list.push(angular.copy($scope.viewModel));
    };
}
