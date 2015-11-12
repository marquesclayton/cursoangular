/**
 * Created by Clayton on 04/11/2015.
 */

angular.module('app')
    .controller('IndexController2', IndexController2);

IndexController2.$inject = ['$scope','AlertService'];

function IndexController2($scope,AlertService){

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
    $scope.clear = clear;
    $scope.getRowStyle = getRowStyle;

/*******  Montagem do grid   *******/

$scope.gridOptions = {
    data:'list',
    columnDefs: [
        {name: 'Nome', field: 'nome', width:150}, //, cellTemplate: 'app/templates/cell-template.html'},
        {name: 'E-mail', field: 'email', width:250, cellTemplate: 'app/pages/templates/cell-template.html'},
        {name: 'Cor', field: 'cor', width:50, cellTemplate: 'app/pages/templates/cell-template.html'},
        {name: '', field: 'optAlterar', cellTemplate: 'app/pages/templates/cell-template-button.html'},
    ],
    enableRowSelection: true,
    rowTemplate: 'app/pages/templates/row-template.html'
};

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

    function getRowStyle(entidade){
        var resultStyle = {};
        if(entidade.cor){
            resultStyle.backgroundColor = entidade.cor;
        }
        return resultStyle;
    }
/*******   Métodos de persistência   *******/
    function save(){

        var item = angular.copy($scope.viewModel);

        if (selectedIndex === undefined) {
            $scope.list.push(item);

            AlertService.showAlertRecordInsertedSucess();
        } else {
            $scope.list.splice(selectedIndex, 1, item);
            AlertService.showAlertRecordUpdatedSucess();
        }
        clear();
    }

    function clear() {
        $scope.viewModel = {};
        selectedIndex = undefined;
    }

    function remove(index){
        selectedIndex = index;

        $scope.list.splice(selectedIndex,1);

        clear();
    }

    function update(item, index){
        selectedIndex = index;

        $scope.viewModel = angular.copy(item);
    }


}