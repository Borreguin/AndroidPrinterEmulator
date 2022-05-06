import React from 'react';
import {
    Button,
  } from 'react-native';
import { ESC_EXCLAMATION_MARK_N } from '../modules/esc-pos-parser/commandsAndres';

const TextRegexButton = () => {

    return (
        <Button title='Press me' onPress={() => {
            const text = '!214464565';
            const a = ESC_EXCLAMATION_MARK_N.command.test(text)
            console.log(a, text)
        }} />
    )
}

export default TextRegexButton;