app.service('ProductService', function ($http) {
    const ApiLink = "https://zhaasxbdspzhvvrixvvn.supabase.co/rest/v1/Product"
    const ApiKey = "sb_publishable_hRIUIu5TOyasOIz8N4lcTg_hDYpyM3Y"
    const headers = {
        "apikey": ApiKey,
        "Authorization": "Bearer " + ApiKey,
        "Content-Type": "application/json"
    }
    this.getProducts = function () {
        return $http.get(ApiLink, { headers: headers })
    }
     this.getProductsById = function (id) {
        return $http.get(ApiLink + "?id=eq." + id, { headers: headers })
    }
    this.AddProduct = function (Product) {
        return $http.post(ApiLink, Product, { headers: headers })
    }
    this.EditProduct = function (Product) {
        return $http.patch(ApiLink + "?id=eq." + Product.id, Product, { headers: headers })
    }
    this.deleteProduct = function (id) {
        return $http.delete(ApiLink + "?id=eq." + id, { headers: headers })
    }

})
