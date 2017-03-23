angular.module('cardapioADSapp',['ngRoute'])

.config(function($routeProvider){

	$routeProvider.when('/', {
		templateUrl: 'view/login.html',
		controller: 'loginCtrl'
	}).when('/home', {
		templateUrl: 'view/Home.html',
		controller: 'HomeCtrl'
	}).when('/pedido', {
		templateUrl: 'view/pedido.html',
		controller: 'PedidoCtrl'
	}).when('/produto', {
		templateUrl: 'view/produto.html',
		controller: 'ProdutoCtrl'
	}).when('/cliente', {
		templateUrl: 'view/cliente.html',
		controller: 'ClienteCtrl'
	}).when('/usuario', {
		templateUrl: 'view/usuario.html',
		controller: 'UsuarioCtrl'
	});

	$routeProvider.otherwise({redirectTo: '/'});

});