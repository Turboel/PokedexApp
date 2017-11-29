angular.module('starter')
.controller("PokemonController", ["PokedexService", "$stateParams", "$scope", function(PokedexService, $stateParams, $scope){
    $scope.numPokemon = $stateParams.num;
    var self = this;
    PokedexService.obterUmPokemon($scope.numPokemon).then(function(dados){
        $scope.poke = dados;
    })
}]);

// n, n-1, ..., 1, 0
app.filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
});

 // Capitalize...
 app.filter('spaces', function(){
    return function(pokemonName){
      var newName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
      for(i = 1; i < newName.length; i++){
          if(newName[i] == '-'){
              //newName.charAt(i+1).toUpperCase();
              newName = newName.split('-').join(' ');
          }
      }
      return newName;
    }
  });