var app = angular.module('starter').config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('listaPokemons');

  $stateProvider.state('listaPokemons',{
    url:'/listaPokemons',
    templateUrl: 'templates/listaPokemons.html',
    controller: 'ListaPokemonsController'
  });
});
