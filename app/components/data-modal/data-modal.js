import React,  { useEffect, useState, useRef } from 'react';
import {Alert, Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './data-modal.styles';
import {notPrintableAsciiCharacters} from '../../shared/esc-pos-parser/util';

export const DataModal = ({modalVisible, setModalVisible, data}) => {
    const removeNonPrintable = (value:string) => {
        return value.replace(notPrintableAsciiCharacters, "np");
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalText} selectable={true}>{removeNonPrintable(data)}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

DataModal.options = (props) => {
    return {
        overlay: {
            interceptTouchOutside: true,
        },
    };
};

