angular.module('starter').controller('ListaPokemonsController', function($scope, PokedexService){
  
  PokedexService.obterPokemons().then(function(dados){
    $scope.listaPokemons = dados.pokemon;
    $scope.listaPokemons.forEach(function(element){
      element.id = parseInt(element.resource_uri.split('/')[3]);
    });

    $scope.listaPokemons.sort(function (a, b){
      if (a.id > b.id) return 1;
      else if (a.id < b.id) return -1;
      else return 0;
    });
    var sortedList = [
                      {
                        prim: "Kanto",
                        subs: [],
                      },
                      {
                        prim: "Johto",
                        subs: [],
                      },
                      {
                        prim: "Hoenn",
                        subs: [],
                      },
                      {
                        prim: "Sinnoh",
                        subs: [],
                      },
                      {
                        prim: "Unova",
                        subs: [],
                      },
                      {
                        prim: "Kalos",
                        subs: [],
                      },
                      {
                        prim: "Special",
                        subs: [],
                      },
                    ];
    $scope.listaPokemons.forEach(function(element){
      if      (element.id < 152)  sortedList[0].subs.push(element);
      else if (element.id < 252)  sortedList[1].subs.push(element);
      else if (element.id < 387)  sortedList[2].subs.push(element);
      else if (element.id < 494)  sortedList[3].subs.push(element);
      else if (element.id < 650)  sortedList[4].subs.push(element);
      else if (element.id < 10000)sortedList[5].subs.push(element);
      else                        sortedList[6].subs.push(element);
    });
    $scope.listaPokemons = sortedList;
  })
  
  $scope.toggleGroup = function(grupo){
    if ($scope.isGroupShown(grupo))
        $scope.shownGroup = null;
    else
        $scope.shownGroup = grupo
};

$scope.isGroupShown = function(grupo){
    return $scope.shownGroup === grupo;
}

$scope.searchInput = "";

});

  // Capitalize...
  app.filter('capitalizeFirstLetter', function(){
    return function(pokemonName){
      return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    }
  });