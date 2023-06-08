const config = {
    headers: {
        'Content-Type': 'application/json',
    },
    baseProductUrl: 'https://api.react-learning.ru/products',
    baseUserUrl: 'https://api.react-learning.ru/users',
    baseUrl: 'https://api.react-learning.ru',
};

const refreshToken = () => {
    return localStorage.getItem('token');
};

const onResponce = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err.message));
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
            headers: { ...this.headers, authorization: refreshToken() },
        }).then(onResponce);
    }
    getProductsByID(id) {
        return fetch(`${this.baseProductUrl}/${id}`, {
            headers: { ...this.headers, authorization: refreshToken() },
        }).then(onResponce);
    }
    searchProducts(search) {
        return fetch(`${this.baseProductUrl}/search?query=${search}`, {
            headers: { ...this.headers, authorization: refreshToken() },
        }).then(onResponce);
    }
    getUserInfo() {
        return fetch(`${this.baseUserUrl}/me`, {
            headers: { ...this.headers, authorization: refreshToken() },
        }).then(onResponce);
    }
    editUserInfo(data) {
        return fetch(`${this.baseUserUrl}/me`, {
            method: 'PATCH',
            headers: { ...this.headers, authorization: refreshToken() },
            body: JSON.stringify(data),
        }).then(onResponce);
    }
    editUserAvatar(data) {
        return fetch(`${this.baseUserUrl}/me/avatar`, {
            method: 'PATCH',
            headers: { ...this.headers, authorization: refreshToken() },
            body: JSON.stringify(data),
        }).then(onResponce);
    }
    swithLike(productID, wasLiked) {
        return fetch(`${this.baseProductUrl}/likes/${productID}`, {
            method: wasLiked ? 'DELETE' : 'PUT',
            headers: { ...this.headers, authorization: refreshToken() },
        }).then(onResponce);
    }
    getReviewsByID(id) {
        return fetch(`${this.baseProductUrl}/review/${id}`, {
            headers: { ...this.headers, authorization: refreshToken() },
        }).then(onResponce);
    }
    addProductReviewByID(id, data) {
        return fetch(`${this.baseProductUrl}/revdsdsiew/${id}`, {
            method: 'POST',
            headers: { ...this.headers, authorization: refreshToken() },
            body: JSON.stringify(data),
        }).then(onResponce);
    }
    deleteProductReviewByID(productId, reviewId) {
        return fetch(`${this.baseProductUrl}/review/${productId}/${reviewId}`, {
            method: 'DELETE',
            headers: { ...this.headers, authorization: refreshToken() },
        }).then(onResponce);
    }
    signUp(data) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, group: 'group-12' }),
        }).then(onResponce);
    }
    signIn(data) {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(onResponce);
    }
    getTokenByEmail(data) {
        return fetch(`${this.baseUrl}/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(onResponce);
    }
    setNewPassword(data) {
        return fetch(`${this.baseUrl}/password-reset/${data.token}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: data.password }),
        }).then(onResponce);
    }
}

export const api = new Api(config);
