import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
    Button, TextInput, TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
    Hex2Str,
    HexStr2Buffer,
    notPrintableAsciiCharacters,
    onlyAsciiCharacters,
    toHex,
    toShowInScreen,
} from '../../shared/esc-pos-parser/util';
import {createTCPSocketServer} from '../../shared/TCPSocketServer/TCPSocketServer';
import {Section} from '../../components/Section/Section';
import {styles} from './Printer.style';
import {registerDocumentEvent} from '../../shared/services/register-document.service';
import {createDocumentTable} from '../../modules/CRUD-api/repository/DocumentRepository';
import {esc_pos_parser} from '../../shared/esc-pos-parser/esc-pos-parser';


export const Printer = ({buffer, setBuffer}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [showBufferData, setShowBufferData] = useState(true);
    const [showParseData, setShowParseData] = useState(true);
    const [message, setMessage] = useState('');
    const [rawData, setRawData] = useState('');
    const [cleanData, setCleanData] = useState('');
    const [hideButtons, setHideButtons] = useState(false);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: '80%'
    };

    useEffect(() => {
        setRawData(buffer.toString().replace(notPrintableAsciiCharacters, Hex2Str(0xA4)));
        setCleanData(esc_pos_parser(buffer));
    }, [buffer]);

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <View style={hideButtons? styles.hide : ''}>
                <Button title={showBufferData ? 'Hide Printed Data' : 'Show Printed Data'}
                        onPress={() => {
                            setShowBufferData(!showBufferData);
                        }}/>
                <Button title={showParseData ? 'Hide Cleaned Data' : 'Show Cleaned Data'}
                        onPress={() => {
                            setShowParseData(!showParseData);
                        }}/>
                <Button title="Save Data" onPress={() => {
                    registerDocumentEvent(buffer.toString()).then((resp) => setMessage(resp.message));
                }}/>
                <Button title="Clean Data" onPress={() => {
                    setBuffer('');
                }}/>
            </View>
            <TouchableOpacity style={[styles.hideButtons]} onPress={() => setHideButtons(!hideButtons)}>
                <Text>...</Text>
            </TouchableOpacity>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>

                    {showBufferData ?
                        <>
                            <Section title={'Raw data. Size: ' + rawData.length}/>
                            <View style={[styles.TextSection]}>
                                <Text
                                    style={[styles.customText]}
                                    selectable={true}>{rawData}</Text>
                            </View>
                        </> : <View/>
                    }

                    {showParseData ?
                        <>
                            <Section title={'Clean data. Size: ' + cleanData.length}/>
                            <View style={[styles.TextSection]}>
                                <Text
                                    style={[styles.customText]}
                                    selectable={true}>{cleanData}</Text>
                            </View>
                        </> : <View/>
                    }

                    <Text style={[styles.customText]}>{message}</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};



