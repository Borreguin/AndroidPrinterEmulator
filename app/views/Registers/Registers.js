import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {styles} from './Registers.style';
import {getAllDocumentService} from '../../modules/CRUD-api/services/DocumentService';
import {DataModal} from '../../components/data-modal/data-modal';
import {deleteDocumentEvent} from '../../shared/services/register-document.service';
import {Hex2Str, notPrintableAsciiCharacters} from '../../shared/esc-pos-parser/util';

const Register = (ix: number, document: Document, showThisInModal, onDelete) => {
    const onlyPrintedCharacters = (data) => {
        return data.toString().replace(notPrintableAsciiCharacters, Hex2Str(0xA4));
    };
    const handleRawData = () => {
        showThisInModal(onlyPrintedCharacters(document.rawDocument));
    };
    const handleParsedData = () => {
        showThisInModal(document.parsedDocument);
    };
    const handleOnDelete = () => {
        deleteDocumentEvent(document).then(() => onDelete());
    };

    return (
        <View key={ix} style={styles.registerContainer}>
            <Text>{document.printedDate.substr(0, 25)}</Text>
            <Text
                style={styles.rawText}>{onlyPrintedCharacters(document.rawDocument)}</Text>
            <Text style={styles.parsedText}>{document.parsedDocument}</Text>
            <Button title={'Show complete \n raw Data'} color={'#599af8'} onPress={() => handleRawData()}/>
            <Button title={'Show complete \n cleaned Data'} color={'#56832b'} onPress={() => handleParsedData()}/>
            <Button title={'Delete \n record'} color={'#bb3636'} onPress={() => handleOnDelete()}/>
        </View>);
};

const Header = () => (
    <View style={styles.headerContainer}>
        <Text style={styles.timestampTitle}>Timestamp</Text>
        <Text style={styles.rawText}>Small view of Raw Data</Text>
        <Text style={styles.parsedText}>Small view of Cleaned Data</Text>
    </View>);

export const Registers = () => {
    const [message, setMessage] = useState('');
    const [registers, setRegisters] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState('');
    const showThisInModal = (dataFromChild) => {
        setShowModal(true);
        setData(dataFromChild);
    };

    const updateList = () => {
        getAllDocumentService().then((resp) => {
            setMessage(resp.message);
            setRegisters(resp.result);
        });
    };

    useEffect(() => {
        updateList();
    }, []);

    return (<ScrollView>
        <Text>{message}</Text>
        <Header/>
        {registers.map((doc, ix) => Register(ix, doc, showThisInModal, updateList))}
        {showModal ? <DataModal modalVisible={showModal} setModalVisible={setShowModal} data={data}/> : <View/>}
    </ScrollView>);
};
