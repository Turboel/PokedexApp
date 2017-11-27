angular.module("starter")
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("listagem", {
        url: "/listagem",
        templateUrl: "templates/listagem.html",
        controller: "ListagemController"
    })
    .state("tabela", {
        url: "/tabela/:num",
        templateUrl: "templates/tabela.html",
        controller: "TabelaController"
    });
    $urlRouterProvider.otherwise("/listagem");//Estado default
});