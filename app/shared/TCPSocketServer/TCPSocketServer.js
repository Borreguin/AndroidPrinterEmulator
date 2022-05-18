import TcpSocket from 'react-native-tcp-socket';
import {TCP_SOCKET} from '../constants/tcp-socket-server.constants';

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
    }).listen({port: TCP_SOCKET.PORT, host: TCP_SOCKET.HOST});

    let buffer_data = '';
    server.on('connection', socket => {
        console.log(
            'Client connected to server on ' + JSON.stringify(socket.address()),
        );
        buffer_data = '';
        socket.on('data', data => {
            // console.log('Server client received: ' + (data.length < 2500 ? data : data.length + ' bytes'));
            buffer_data += data;
            // console.log('data size:', data.length);
            // console.log('data buffer', buffer_data.length);
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
