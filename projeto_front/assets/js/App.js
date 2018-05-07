// Criação do módulo principal da aplicação
var app = angular.module("app",[]);

app.controller("indexController", function($scope, $http){

    $scope.nome = "Mateus";

    $scope.posts = [];

    $scope.carregarPosts = function(){
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/'
        }).then(function successCallback(response) {
            console.log(response.data);
            console.log(response.status);
            $scope.posts = response.data;
        }, function errorCallback(response) {
            console.log(response.data);
            console.log(response.status);
        });
    }

    $scope.carregarPosts();

   

})