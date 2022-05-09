
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

export const getAsciiDecHex = (value) => {
    switch (getTypeOf(value)){
        case "string":
            const ascii_printable =  /[\x00-\x08\x0E-\x1F]/.test(value) ? 'np' : value;
            const decimal = value.charCodeAt(0);
            return `(${ascii_printable}|${decimal}|0x${decimal.toString(16).padStart(2, '0')})`
        case "number":
            const ascii = String.fromCharCode(value);
            const to_print =  /[\x00-\x08\x0E-\x1F]/.test(ascii) ? 'np' : ascii;
            return `(${to_print}|${value}|0x${value.toString(16).padStart(2, '0')})`
    }
}

export const decode = data => {
    // this functions transforms from decimal to ASCII code
    // using fromCharCode
    let resp = '';
    for (const d of data) {
        // const letter = String.fromCharCode(d);
        // resp += letter;
        // if (!EscCharacters.includes(letter)) {
        //     resp += letter;
        // }
        // const aux = getTypeOf(d);
        // console.log('type', aux, d);
        resp += getAsciiDecHex(d);
    }
    return resp;
};
