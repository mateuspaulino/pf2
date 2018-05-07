// Criação do módulo principal da aplicação
var app = angular.module("app",[]);

app.controller("indexController", function($scope){

    $scope.nome = "Mateus";


    $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/'
      }).then(function successCallback(response) {
          console.log(response.data);
        console.log(response.status);
        }, function errorCallback(response) {
            console.log(response.data);
            console.log(response.status);
        });

})