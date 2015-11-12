/**
 * Created by Clayton on 04/11/2015.
 */

angular.module('app')
    .controller('IndexController2', IndexController2);

IndexController2.$inject = ['$scope'];

function IndexController2($scope){

/*******   Declarações   *******/

/*******   Atributos locais   *******/
    var selectedIndex = undefined;


/*******   Atributos de escopo   *******/
    $scope.viewModel = {};
    $scope.list = [];
    $scope.styleInput = {};

/*******   Atributos métodos de escopo   *******/
    $scope.remove = remove;
    $scope.update = update;
    $scope.save = save;

/*******   Final da declarações   *******/

/*******   Métodos de execução instântanea   *******/
    init();
/*******   Final dos métodos de execução instântanea   *******/

/*******   Implementação dos métodos   *******/
    function init() {

        $scope.styleInput.borderColor= 'black';
        $scope.styleInput.borderStyle= 'solid';
        $scope.styleInput.borderWidth= 'thick';
    }
/*******   Métodos de persistência   *******/
    function save(){

        if($scope.formInit.$invalid === false) {
            var item = angular.copy($scope.viewModel);

            if (selectedIndex === undefined) {
                $scope.list.push(item);

                $scope.msg('Ok', "Registro inserido com sucesso.", 'success');
            } else {
                $scope.list.splice(selectedIndex, 1, item);
                $scope.msg('Ok', "Registro alterado com sucesso.", 'success');
            }
            $scope.viewModel = {};
            selectedIndex = undefined;
            $scope.formInit.$setPristine();
        } else {
            $scope.msg('Error', "Problema com os dados.", 'danger');
        }
    }

    function remove(item){
        selectedIndex = $scope.list.indexOf(item);

        $scope.list.splice(selectedIndex,1);

        selectedIndex = undefined;
    }

    function update(item){
        selectedIndex = $scope.list.indexOf(item);

        $scope.viewModel = angular.copy(item);
    }


}