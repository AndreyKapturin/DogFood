class Api {
    constructor(config) {
        this.baseUrl = config.baseUrl;
        this.headers = config.headers;
        this.baseUserUrl = config.baseUserUrl;
    }
    getProducts() {
        return fetch(`${this.baseUrl}`, {
            headers: this.headers,
        }).then(res => res.json());
    }
    getProductsByID(id) {
        return fetch(`${this.baseUrl}/${id}`, {
            headers: this.headers,
        }).then(res => res.json());
    }
    searchProducts(search) {
        return fetch(`${this.baseUrl}/search?query=${search}`, {
            headers: this.headers,
        }).then(res => res.json());
    }
    getUserInfo() {
        return fetch(`${this.baseUserUrl}/me`, {
            headers: this.headers,
        }).then(res => res.json());
    }
    swithLike(productID, wasLiked) {
        return fetch(`${this.baseUrl}/likes/${productID}`, {
            method: wasLiked ? "DELETE" : "PUT",
            headers: this.headers,
        }).then(res => res.json());
    }
}

const config = {
    headers: {
        "Content-Type": "application/json",
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwZTg1NTMyOTFkNzkwYjNmODI4ZGUiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgxOTc1NjI2LCJleHAiOjE3MTM1MTE2MjZ9.n_CZCLGyh3e2vhIi6Mx2dZh7Z7dtgF_p0NrP-AXsnBM"
    },
    baseUrl: "https://api.react-learning.ru/products",
    baseUserUrl: "https://api.react-learning.ru/users"
}

export const api = new Api(config);