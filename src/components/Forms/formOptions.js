export const nameOptions = {
    required: {
        value: true,
        message: 'Введите имя',
    },
    maxLength: {
        value: 20,
        message: 'Имя слишком длинное',
    },
};

export const aboutOptions = {
    required: {
        value: true,
        message: 'Расскажите о себе в двух словах',
    },
    maxLength: {
        value: 30,
        message: 'В ДВУХ СЛОВАХ!!!',
    },
};

export const emailOptions = {
    required: {
        value: true,
        message: 'Введите email',
    },
    pattern: {
        value: /^([A-Za-z0-9_.])+(@)([A-Za-z0-9_\-.])+([.])([A-Za-z]{2,4})$/,
        message: 'Некорректный  email',
    },
};

export const passwordOptions = {
    required: {
        value: true,
        message: 'Введите пароль!',
    },
    pattern: {
        value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
        message:
            'Пароль должен быть длиной от 6 символов и включать в себя цифры, спецсимволовы и буквы латинского алфавита в нижнем и верхнем регистре.',
    },
};

export const tokenOptions = {
    required: {
        value: true,
        message: 'Введите токен из письма',
    },
    minLength: {
        value: 197,
        message: 'Неккоректный токен. Проверьте ещё раз',
    },
};

export const ratingOptions = {
    required: {
        value: true,
        message: 'Оцените товар',
    },
};

export const textOption = {
    required: {
        value: true,
        message: 'Поле не может быть пустым',
    },
};
