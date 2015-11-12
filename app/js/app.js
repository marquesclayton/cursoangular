/**
 * Created by Clayton on 03/11/2015.
 */

angular.module('app', ['ngMessages','ui.growl']);

angular.module('app').config(function($scope,$growl){

    $scope.msg = msg;

    function msg(title, mensage, type){
        $growl.box(title, mensage, {class:type, timeout: 3000}).open();
    }
});