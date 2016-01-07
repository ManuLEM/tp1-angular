angular.module('app', [])
.controller('controller', function($scope){
  $scope.films = []
  $scope.filmGenres = ['Action','Horreur','Biopic','Comédie','Drame','Trailer'];
  $scope.submitFilm = function($event) {
    $event.preventDefault();
    if ($scope.film) {
      for (var i = 0; i < $scope.films.length; i++) {
        if ($scope.films[i].title.toLowerCase() == $scope.film.title.toLowerCase()) {
          return false;
        }
      }
      $scope.film.actors = $scope.film.actors.split(', ');
      $scope.films.push($scope.film);

      $scope.film = null
    }
  }

  $scope.delete = function(index) {
    $scope.films.splice(index,1);
  }
});