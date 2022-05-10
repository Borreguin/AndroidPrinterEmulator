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
    console.log(asciiStrWSpace, hexData);
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
        console.log('invalid text input: ' + str);
    }
    return hex;
}


export const createTCPSocketServer = (setBuffer) =>{

    const server = TcpSocket.createServer(function (socket) {
        socket.on('data', data => {
            socket.write('Echo server ' + data);
        });

        socket.on('error', error => {
            console.log('An error ocurred with client socket ', error);
        });

        socket.on('close', error => {
            console.log('Closed connection with ', socket.address());
        });
    }).listen({port: 9100, host: '0.0.0.0'});

    let buffer_data = '';
    server.on('connection', socket => {
        console.log(
            'Client connected to server on ' + JSON.stringify(socket.address()),
        );
        buffer_data = '';
        socket.on('data', data => {
            // console.log('Server client received: ' + (data.length < 2500 ? data : data.length + ' bytes'));
            buffer_data += data;
            console.log('data size:', data.length);
            console.log('data buffer', buffer_data.length);
        });

        socket.on('error', error => {
            console.log('Server client error on error' + error);
        });

        socket.on('close', error => {
            console.log('Server client closed: ' + (error ? error : ''));

            setBuffer(buffer_data);
        });
    });

    server.on('error', error => {
        console.log('An error occurred with the server', error);
    });

    server.on('close', () => {
        console.log('Server closed connection, finally');

    });
    return server;
}
