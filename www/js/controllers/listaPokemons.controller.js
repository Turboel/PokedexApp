angular.module('starter').controller('Lista PokemonsController', function($scope, PokedexService){
  PokedexService.obterPokemons().then(function(dados){
    $scope.listaPokemons = dados.pokemon;
  })
});
