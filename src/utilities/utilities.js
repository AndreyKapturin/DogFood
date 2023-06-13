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

export const getProductPrice = (product) => {
    if (product.discount) {
        let priceWithDiscount = product.price - (product.price * product.discount) / 100;
        return Math.floor(priceWithDiscount);
    } else {
        return product.price;
    }
};

export const getProductDiscount = (product) => {
    if (product.discount) {
        let discount = product.price * (product.discount / 100);
        return Math.floor(discount);
    } else {
        return 0;
    }
};
