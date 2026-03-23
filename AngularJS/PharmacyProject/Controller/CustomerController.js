app.controller('CustomerController', function ($scope, CustomerService) {

    $scope.CustomersList = []
    $scope.ChosenCustomer = {}


    $scope.RenderTable = function () {
        CustomerService.getCustomers()
            .then(function (response) {
                $scope.CustomersList = response.data
            })
            .catch(function (error) {
                console.log("Error Loading Customers", error)
            })
    }
    $scope.RenderTable()

    $scope.RemoveCustomer = function (id) {

        if (!confirm("Are you Sure you want to Delete this customer ?")) return;

        CustomerService.DeleteCustomer(id)
            .then(function () {

                $scope.RenderTable()

            })
            .catch(function (err) {
                console.log("Error deleting customer", err);
            })
    }
    $scope.EditCustomer = function (Customer) {
        $scope.ChosenCustomer = angular.copy(Customer)

    }
    $scope.SaveEditCustomer = function(){
        CustomerService.EditCustomer($scope.ChosenCustomer)
        .then(function(){
            $scope.RenderTable()
            $scope.ChosenCustomer={}

        })
        .catch(function(err){

        })
    }


});