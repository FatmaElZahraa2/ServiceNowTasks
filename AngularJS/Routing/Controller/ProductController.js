app.controller('ProductController',function($scope , ProductService){
    $scope.ProductsList=[]
    ProductService.getProducts().then(function(response){
        $scope.ProductsList=response.data
        console.log(response)
    })
    .catch(function(err){
        console.log(err)
    })
})