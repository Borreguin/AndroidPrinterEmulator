import {styles} from './IconNav.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {TouchableOpacity} from 'react-native';


export const IconNav = ({iconName, onPress, selected}) => {

    const buttonStyle = selected ? styles.buttonActivated : styles.button;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Icon name={iconName} size={64} style={styles.iconNav}  color={'#ffffff'}/>
        </TouchableOpacity>
    );
};
