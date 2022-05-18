import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './NavBar.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IconNav} from '../IconNav/IconNav';
import {DevTool} from '../../views/DevTool/DevTool';
import {routes} from '../../shared/constants/NavBar.constants';


export const NavBar = ({onClickRenderThis}) => {

    const [selected, setSelected] = useState('');

    const onPressRenderThis = (componentName) =>{
        if(onClickRenderThis !== undefined){
            onClickRenderThis(componentName);
        }
        setSelected(componentName);
    }

    return (
        <View style={styles.navContainer}>
            <IconNav iconName="print"  onPress={() => onPressRenderThis(routes.printer.name)} selected={selected===routes.printer.name}/>
            <IconNav iconName="bars"  onPress={() => onPressRenderThis(routes.registers.name)} selected={selected===routes.registers.name}/>
            <IconNav iconName="cogs"  onPress={() => onPressRenderThis(routes.devtool.name)} selected={selected===routes.devtool.name}/>
        </View>
    )
}
