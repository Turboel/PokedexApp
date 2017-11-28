angular.module('starter').controller('ListaPokemonsController', function($scope, PokedexService){
  PokedexService.obterPokemons().then(function(dados){
    $scope.listaPokemons = dados.pokemon;
    $scope.listaPokemons.forEach(function(element){
      element.id = parseInt(element.resource_uri.split('/')[3]);
    })
    $scope.sort(function (a, b){
      if (a.num > b.num) return 1;
      else if (a.num < b.num) return -1;
      else return 0;
    });
  })
});
