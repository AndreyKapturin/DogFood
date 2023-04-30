export const getEnding = (num) => {
    const str = String(num)
    if (str.length > 1) {
        const lastSymbols = str[str.length - 2] + str[str.length - 1]
        if (![11, 12, 13, 14].includes(Number(lastSymbols))) {
            const lastSymbol = str[str.length - 1]
            if (Number(lastSymbol) === 1) {
                return ""
            } else if ([2, 3, 4].includes(Number(lastSymbol))) {
                return "а"
            } else {
                return "ов"
            }
        } else {
            return "ов"
        }
    } else {
        const lastSymbol = str[str.length - 1]
        if (Number(lastSymbol) === 1) {
            return ""
        } else if ([2, 3, 4].includes(Number(lastSymbol))) {
            return "а"
        } else {
            return "ов"
        }
    }
}