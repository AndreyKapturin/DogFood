class Api {
    constructor(config) {
        this.baseUrl = config.baseUrl;
        this.headers = config.headers;
    }
    getProducts() {
        return fetch(`${this.baseUrl}`, {
            headers: this.headers,
        }).then(res => res.json());
    }
    searchProducts(search) {
        return fetch(`${this.baseUrl}/search?query=${search}`, {
            headers: this.headers,
        }).then(res => res.json());
    }
}

const config = {
    headers: {
        "Content-Type": "application/json",
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwZTg1NTMyOTFkNzkwYjNmODI4ZGUiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgxOTc1NjI2LCJleHAiOjE3MTM1MTE2MjZ9.n_CZCLGyh3e2vhIi6Mx2dZh7Z7dtgF_p0NrP-AXsnBM"
    },
    baseUrl: "https://api.react-learning.ru/products"
}

export const api = new Api(config);