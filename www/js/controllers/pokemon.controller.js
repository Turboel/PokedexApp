angular.module('starter')
.controller("PokemonController", ["PokedexService", "$stateParams", "$scope", function(PokedexService, $stateParams, $scope){
    $scope.numPokemon = $stateParams.num;
    var self = this;
    PokedexService.obterUmPokemon($scope.numPokemons).then(function(dados){
        $scope.poke = dados;
    })
}]);