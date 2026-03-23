var app = angular.module('PharmacyApp',["ngRoute"])
app.config(function($routeProvider){
    $routeProvider
    .when("/CustomersView",{
        templateUrl:"View/CustomersView.html",
        controller:"CustomerController"
    })
     .when("/AddCustomerView",{
        templateUrl:"View/AddCustomerView.html",
        controller:"AddCustomerController"
    })
    .otherwise({
        redirectTo:"/CsustomersView"
    })
})