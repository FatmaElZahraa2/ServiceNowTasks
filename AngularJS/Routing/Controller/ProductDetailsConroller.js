app.controller('ProductDetailsConroller',function($scope , ProductService , $routeParams){
    $scope.productId = $routeParams.id;
    $scope.product=""
    ProductService.getProductsById($scope.productId).then(function(response){
        $scope.product=response.data[0]
        console.log(response)
    })
    .catch(function(err){
        console.log(err)
    })
})