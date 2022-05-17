import React from 'react';
import {DevTool} from './app/views/DevTool/DevTool';
import {View} from 'react-native';
import {NavBar} from './app/components/NavBar/NavBar';


const App: () => Node = () => {
    return (
        <View>
            <NavBar></NavBar>
            <DevTool />
        </View>
    );
};




export default App;
