angular.module('starter')
.controller("PokemonController", ["PokemonService", "$stateParams", "$scope", function(PokedexService, $stateParams, $scope){
    var numPokemon = $stateParams.num;
    var self = this;
}]);