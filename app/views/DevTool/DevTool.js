import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
    Button, TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HexStr2Buffer, onlyAsciiCharacters, toHex, toShowInScreen} from '../../shared/esc-pos-parser/util';
import {createTCPSocketServer} from '../../shared/TCPSocketServer/TCPSocketServer';
import {Section} from '../../components/Section/Section';
import {styles} from './DevTool.style';
import {registerDocumentEvent} from '../../shared/services/register-document.service';
import {createDocumentTable} from '../../modules/CRUD-api/repository/DocumentRepository';
import {esc_pos_parser} from '../../shared/esc-pos-parser/esc-pos-parser';


export const DevTool = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [buffer, setBuffer] = useState('');
    const [hexData, setHexData] = useState('');
    const [textHexData, setTextHexData] = useState('');
    const [showBufferData, setShowBufferData] = useState(false);
    const [showParseData, setShowParseData] = useState(false);
    const [showHexData, setShowHexData] = useState(false);
    const [message, setMessage] = useState('');

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    useEffect(() => {
        const TcpSocketServer = createTCPSocketServer(setBuffer);
        return () => {
            // Anything in here is fired on component unmount.
            TcpSocketServer.close();
        }
    }, []);

    useEffect(() => {
        const hex = toHex(buffer);
        setTextHexData(hex);
        setHexData(hex);
    }, [buffer]);

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
            <Button title="create table" onPress={() => {
                createDocumentTable().then((resp) => setMessage(resp.message));
            }}/>
            <Button title="insert" onPress={() => {
                registerDocumentEvent('Check me now').then((resp) => setMessage(resp.message));
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
                                <Button title="Set Buffer" onPress={() => setBuffer(HexStr2Buffer(textHexData))}/>
                            </View>
                        </> : <View/>
                    }
                    <Text style={[styles.customText]}>{message}</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};



