angular.module('starter').controller('ListaPokemonsController', function($scope, PokedexService){
  PokedexService.obterPokemons().then(function(dados){
    $scope.listaPokemons = dados.pokemon;
  })
});
