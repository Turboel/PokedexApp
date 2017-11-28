angular.module('starter')
.controller("PokemonController", ["PokemonService", "$stateParams", "$scope", function(PokedexService, $stateParams, $scope){
    var numPokemon = $stateParams.num;
    var self = this;
    self.tabela = null;
    $scope.tituloTabela = titulos[CodTabela-1];
    $scope.tabela = service.getTabela(function(answer){
        if (answer !== null) {
            console.log(answer);
            self.tabela = answer;
        }
    }, CodTabela);
    $scope.tabela = self.tabela;
}]);