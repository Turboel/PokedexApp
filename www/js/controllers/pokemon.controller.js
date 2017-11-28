angular.module('starter')
.controller("PokemonController", ["PokedexService", "$stateParams", "$scope", function(PokedexService, $stateParams, $scope){
    var numPokemon = $stateParams.num;
    var self = this;
}]);