
export const Hex2Str = (symbolHex) => {
    const convertToString = JSON.stringify(String.fromCharCode(symbolHex));
    return convertToString.substring(1, convertToString.length-1);
}

export const getTypeOf = obj => {
    let type = ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1]
    if (type === 'Object') {
        const results = (/^(function|class)\s+(\w+)/).exec(obj.constructor.toString())
        type = (results && results.length > 2) ? results[2] : ''
    }
    return type.toLowerCase();
}
