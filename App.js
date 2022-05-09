/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import TcpSocket from 'react-native-tcp-socket';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button, TextInput,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {decode, getAsciiDecHex, getTypeOf} from './modules/esc-pos-parser/util';
import {esc_pos_parser} from './modules/esc-pos-parser/esc-pos-parser';


const Section = ({children, title}): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [buffer, setBuffer] = useState('');
    const [showData, setShowData] = useState(false);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    useEffect(() => {
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


        function toHex(str, hex) {
            try {
                hex = unescape(encodeURIComponent(str))
                    .split('')
                    .map(function (v) {
                        return v.charCodeAt(0).toString(16);
                    })
                    .join('');
            } catch (e) {
                hex = str;
                console.log('invalid text input: ' + str);
            }
            return hex;
        }

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
                console.log('Server client closed ' + (error ? error : ''));
                setBuffer(buffer_data);
            });
        });

        server.on('error', error => {
            console.log('An error occurred with the server', error);
        });

        server.on('close', () => {
            console.log('Server closed connection, finally');

        });
    }, []);


    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <Button title="Show Data" onPress={() => {
                setShowData(!showData);
                console.log('collected data:\n', buffer);
            }}/>
            <Button title="Clean Data"
                    onPress={() => {
                        setBuffer('');
                    }}/>
            <Button title="Parse Data"
                    onPress={() => {
                        esc_pos_parser(buffer);
                    }}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header/>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>

                    {showData ?
                        <>
                            <Section title={'Buffer data. Size: ' + buffer.length}/>
                            <View style={[styles.decodedTextContainer]}>
                                <Text selectable={true}>{decode(buffer)}</Text>
                            </View>
                        </> : <View/>
                    }


                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    decodedTextContainer: {
        backgroundColor: '#e6e5e5',
        minHeight: 70,
    },
    decodedText: {},
});


export default App;
