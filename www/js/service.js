angular.module('starter').service('PokedexService', function($http){
  var url="https://pokeapi.co/api/v1/";

  return{
    obterPokemons: function(){
      return $http.get(url + "pokedex/1").then(function(response){
        return response.data;
      });
    },
    obterUmPokemon: function(num){
      return $http.get("https://pokeapi.co/api/v2/pokemon/"+ num).then(function(response){
        return response.data;
      });
    }
  }
});
