/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
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

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HexStr2Buffer, onlyAsciiCharacters, toHex, toShowInScreen } from './app/shared/esc-pos-parser/util';
import {esc_pos_parser} from './app/shared/esc-pos-parser/esc-pos-parser';
import {createTCPSocketServer} from './app/shared/TCPSocketServer/TCPSocketServer';


const Section = ({title}): Node => {
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
        </View>
    );
};

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [buffer, setBuffer] = useState('');
    const [hexData, setHexData] = useState('');
    const [textHexData, setTextHexData] = useState('');
    const [showBufferData, setShowBufferData] = useState(false);
    const [showParseData, setShowParseData] = useState(false);
    const [showHexData, setShowHexData] = useState(false);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    useEffect(() => {
        const TcpSocketServer = createTCPSocketServer(setBuffer);
    }, []);

    useEffect( ()=>{
        const hex = toHex(buffer);
        setTextHexData(hex);
        setHexData(hex);
    }, [buffer])

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <Button title="Show Buffer Data" onPress={() => {
                setShowBufferData(!showBufferData);
            }}/>
            <Button title="Show Hex Data" onPress={() => {
                setShowHexData(!showHexData);
            }}/>
            <Button title="Parse Data" onPress={() => {
                setShowParseData(!showParseData);
            }}/>
            <Button title="Clean Data" onPress={() => {
                setBuffer('');
            }}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>

                    {showBufferData ?
                        <>
                            <Section title={'Buffer data. Size: ' + buffer.length}/>
                            <View style={[styles.TextSection]}>
                                <Text
                                    style={[styles.customText]}
                                    selectable={true}>{toShowInScreen(buffer, 100)}</Text>
                            </View>
                        </> : <View/>
                    }

                    {showParseData ?
                        <>
                            <Section title={'Parse data. Size: ' + buffer.length}/>
                            <View style={[styles.TextSection]}>
                                <Text
                                    style={[styles.customText]}
                                    selectable={true}>{onlyAsciiCharacters(esc_pos_parser(buffer))}</Text>
                            </View>
                        </> : <View/>
                    }

                    {showHexData ?
                        <>
                            <Section title={'Hex Data. Size: ' + buffer.length}/>
                            <View style={[styles.TextSection]}>
                                <TextInput
                                    style={[styles.customText]}
                                    multiline={true}
                                    numberOfLines={7}
                                    value={textHexData}
                                    onChangeText={setTextHexData}
                                />
                                <Button title="Set Buffer"  onPress={() => setBuffer(HexStr2Buffer(textHexData))}/>
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
    TextSection: {
        backgroundColor: '#e6e5e5',
        minHeight: 70,
    },
    customText: {
        fontVariant: ['tabular-nums'],
        fontFamily: 'monospace'
    },

});


export default App;
