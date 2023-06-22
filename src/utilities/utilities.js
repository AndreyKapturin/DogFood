export const getEnding = (num) => {
    const str = String(num);
    if (str.length > 1) {
        const lastSymbols = str[str.length - 2] + str[str.length - 1];
        if (![11, 12, 13, 14].includes(Number(lastSymbols))) {
            const lastSymbol = str[str.length - 1];
            if (Number(lastSymbol) === 1) {
                return '';
            } else if ([2, 3, 4].includes(Number(lastSymbol))) {
                return 'а';
            } else {
                return 'ов';
            }
        } else {
            return 'ов';
        }
    } else {
        const lastSymbol = str[str.length - 1];
        if (Number(lastSymbol) === 1) {
            return '';
        } else if ([2, 3, 4].includes(Number(lastSymbol))) {
            return 'а';
        } else {
            return 'ов';
        }
    }
};

export const getRating = (reviews) => {
    if (reviews) {
        const rate = reviews.reduce((avg, review, i, arr) => {
            if (i !== arr.length - 1) {
                return (avg += review.rating);
            } else {
                return (avg += review.rating) / arr.length;
            }
        }, 0);
        return Math.floor(rate);
    }
};

export const filterMyFavProduct = (products, userID) => {
    const fav = products.filter((product) => product.likes.includes(userID));
    return fav;
};

export const mapProducts = (products, newProduct) => {
    return products.map((product) => (product._id === newProduct._id ? newProduct : product));
};

export const isLoading = ({ type }, sliceName) => {
    return type.startsWith(sliceName) && type.endsWith('pending') && !type.includes('changeLike');
};

export const isError = ({ type }) => {
    return type.endsWith('rejected');
};

export const getPriceWithDiscount = (product, count = 1) => {
    if (product.discount) {
        let priceWithDiscount = product.price - (product.price * product.discount) / 100;
        return Math.floor(priceWithDiscount) * count;
    } else {
        return product.price * count;
    }
};

export const getTotalPrice = (productsInCart) => {
    if (productsInCart.length) {
        return productsInCart.reduce((sum, item) => {
            return sum + item.product.price * item.count;
        }, 0);
    }
    return 0;
};

export const getTotalPriceWithDiscount = (productsInCart) => {
    if (productsInCart.length) {
        return productsInCart.reduce((sum, item) => {
            return sum + getPriceWithDiscount(item.product) * item.count;
        }, 0);
    }
    return 0;
};

export const getMatches = (inspectedArr, requestedArr) => {
    return requestedArr.map((cartItem) => {
        const requestedProduct = inspectedArr.find((product) => {
            return product._id === cartItem.product._id;
        });
        if (requestedProduct.stock >= cartItem.count) {
            return { ...cartItem, product: requestedProduct };
        } else if (requestedProduct.stock < cartItem.count) {
            return { ...cartItem, product: requestedProduct, count: requestedProduct.stock };
        } else if (requestedProduct.stock === 0) {
            return false;
        }
        return cartItem;
    });
};

export const allowedPaths = ['/registration', '/login', '/forgot-password', '/password-reset'];
