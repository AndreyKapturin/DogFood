const config = {
    headers: {
        'Content-Type': 'application/json',
        authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwZTg1NTMyOTFkNzkwYjNmODI4ZGUiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgxOTc1NjI2LCJleHAiOjE3MTM1MTE2MjZ9.n_CZCLGyh3e2vhIi6Mx2dZh7Z7dtgF_p0NrP-AXsnBM',
    },
    baseProductUrl: 'https://api.react-learning.ru/products',
    baseUserUrl: 'https://api.react-learning.ru/users',
    baseUrl: 'https://api.react-learning.ru',
};

class Api {
    constructor(config) {
        this.baseProductUrl = config.baseProductUrl;
        this.baseUserUrl = config.baseUserUrl;
        this.baseUrl = config.baseUrl;
        this.headers = config.headers;
    }
    getProducts() {
        return fetch(`${this.baseProductUrl}`, {
            headers: this.headers,
        }).then((res) => res.json());
    }
    getProductsByID(id) {
        return fetch(`${this.baseProductUrl}/${id}`, {
            headers: this.headers,
        }).then((res) => res.json());
    }
    searchProducts(search) {
        return fetch(`${this.baseProductUrl}/search?query=${search}`, {
            headers: this.headers,
        }).then((res) => res.json());
    }
    getUserInfo() {
        return fetch(`${this.baseUserUrl}/me`, {
            headers: this.headers,
        }).then((res) => res.json());
    }
    editUserInfo(data) {
        return fetch(`${this.baseUserUrl}/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(data),
        }).then((res) => res.json());
    }
    editUserAvatar(data) {
        return fetch(`${this.baseUserUrl}/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(data),
        }).then((res) => res.json());
    }
    swithLike(productID, wasLiked) {
        return fetch(`${this.baseProductUrl}/likes/${productID}`, {
            method: wasLiked ? 'DELETE' : 'PUT',
            headers: this.headers,
        }).then((res) => res.json());
    }
    getReviewsByID(id) {
        return fetch(`${this.baseProductUrl}/review/${id}`, {
            headers: this.headers,
        }).then((res) => res.json());
    }
    addProductReviewByID(id, data) {
        return fetch(`${this.baseProductUrl}/review/${id}`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data),
        }).then((res) => res.json());
    }
    deleteProductReviewByID(productId, reviewId) {
        return fetch(`${this.baseProductUrl}/review/${productId}/${reviewId}`, {
            method: 'DELETE',
            headers: this.headers,
        }).then((res) => res.json());
    }
    signUp(data) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, group: 'group-12' }),
        }).then((res) => res.json());
    }
    signIn(data) {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => res.json());
    }
    getTokenByEmail(data) {
        return fetch(`${this.baseUrl}/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => res.json());
    }
    setNewPassword(data) {
        return fetch(`${this.baseUrl}/password-reset/${data.token}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({password: data.password}),
        }).then((res) => res.json());
    }
}

export const api = new Api(config);
