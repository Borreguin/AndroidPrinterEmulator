import TcpSocket from 'react-native-tcp-socket';

export const Hex2Str = (symbolHex) => {
    const convertToString = JSON.stringify(String.fromCharCode(symbolHex));
    return convertToString.substring(1, convertToString.length-1);
}

export const HexStr2Buffer = (hexStr) => {
    let str = '';
    for (let i = 0; i < hexStr.length; i += 2)
        str += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
    return str;
}


export const getTypeOf = obj => {
    let type = ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1]
    if (type === 'Object') {
        const results = (/^(function|class)\s+(\w+)/).exec(obj.constructor.toString())
        type = (results && results.length > 2) ? results[2] : ''
    }
    return type.toLowerCase();
}

export const notPrintableAsciiCharacters = new RegExp(/[\x00-\x08\x0E-\x1F]/, 'g');
export const carriageReturn = new RegExp(/\x0A/, 'g');

export const getAsciiDecHex = (value) => {
    switch (getTypeOf(value)){
        case "string":
            const ascii_printable =  notPrintableAsciiCharacters.test(value) ? 'np' : value;
            const decimal = value.charCodeAt(0);
            return `(${ascii_printable}|${decimal}|0x${decimal.toString(16).padStart(2, '0')})`
        case "number":
            const ascii = String.fromCharCode(value);
            const to_print =  notPrintableAsciiCharacters.test(ascii) ? 'np' : ascii;
            return `(${to_print}|${value}|0x${value.toString(16).padStart(2, '0')})`
    }
}

export const onlyAsciiCharacters = (strToClean) => {
    return strToClean.replace(notPrintableAsciiCharacters, ' ');
}

export const replaceCRWith = (strToClean, characterToReplace) => {
    return strToClean.replace(carriageReturn, characterToReplace);
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

export const getAsciiWithSpace = (value) => {
    switch (getTypeOf(value)){
        case "string":
            const ascii_printable =  notPrintableAsciiCharacters.test(value) ? 'np' : value;
            return `${ascii_printable}`.padStart(2, ' ')
        case "number":
            const ascii = String.fromCharCode(value);
            const to_print =  notPrintableAsciiCharacters.test(ascii) ? 'np' : ascii;
            return `${to_print}`.padStart(2, ' ')
    }
}

export const toShowInScreen = (bufferData: string, nPerLine: number) => {
    let newBufferData = replaceCRWith(bufferData, "  ");
    let asciiStrWSpace = '';
    for(let dt of newBufferData){
        asciiStrWSpace += getAsciiWithSpace(dt);
    }
    const hexData = toHex(bufferData);
    const remainder = hexData.length % nPerLine;
    const nRows = remainder > 0 ? Math.floor(hexData.length/nPerLine) + 1 : Math.floor(hexData.length/nPerLine);
    let resp = "";
    // console.log(asciiStrWSpace, hexData);
    for(let row = 0; row < nRows; row++){
        let ini = row * nPerLine;
        let end = Math.min( (row + 1) * nPerLine - 2, hexData.length);
        resp += hexData.substr(ini, end) + "\n" + asciiStrWSpace.substr(ini, end);
    }
    return resp;
}


export function toHex(str, hex) {
    try {
        hex = unescape(encodeURIComponent(str))
            .split('')
            .map(function (v) {
                return v.charCodeAt(0).toString(16).padStart(2, '0');
            })
            .join('');
    } catch (e) {
        hex = str;
        // console.log('invalid text input: ' + str);
    }
    return hex;
}

