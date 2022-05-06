
export const Hex2Str = (symbolHex) => {
    const convertToString = JSON.stringify(String.fromCharCode(symbolHex));
    return convertToString.substring(1, convertToString.length-1);
}

