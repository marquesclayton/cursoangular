/**
 * Created by Clayton on 12/11/2015.
 */

angular.module('app').service('AlertService', AlertService);

AlertService.$inject = ['$growl'];

function AlertService($growl){

    this.showAlert = showAlert;
    this.showAlertRecordInsertedSucess = showAlertRecordInsertedSucess;
    this.showAlertRecordUpdatedSucess = showAlertRecordUpdatedSucess;

    function showAlert(titulo, mensagem){
        $growl.box(titulo, mensagem,{
            class: 'warning',
            timeout: 3000
        }).open();
    }

    function showAlertRecordInsertedSucess(){
        showAlert('Ok', "Registro inserido com sucesso.", 'success');
    }

    function showAlertRecordUpdatedSucess(){
        showAlert('Ok', "Registro alterado com sucesso.", 'success');
    }
}