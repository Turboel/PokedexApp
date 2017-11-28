angular.module("starter")
.service("PokedexService", function($http){
    var pokedexService = {};

    pokedexService.getPokemonNames = function(callback) {
        var answer = [];
        for (i=0; i<)
    };
    return pokedexService;
})

.controller("ListagemController", ["PokemonService", "$scope", function($scope){

    $scope.listaPokemons =

    $scope.toggleGroup = function(grupo){
        if ($scope.isGroupShown(grupo))
            $scope.shownGroup = null;
        else
            $scope.shownGroup = grupo
    };

    $scope.isGroupShown = function(grupo){
        return $scope.shownGroup === grupo;
    }
}])
