var app = angular.module('ProductApp',["ngRoute"])

app.config(function($routeProvider){
    $routeProvider
    .when("/products",{
        templateUrl:"View/products.html",
        controller:"ProductController"
    })
    .when("/prdouctdetails/:id",{
        templateUrl:"View/prdouctdetails.html",
        controller:"ProductDetailsConroller"
    })
    .when("/invoice",{
        templateUrl:"View/invoice.html",
        controller:"InvoiceController"
    })
    .when("/about",{
        templateUrl:"View/about.html"
    })
    .otherwise({
        redirectTo:"View/products"
    })

})