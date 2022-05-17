/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {DevTool} from './app/views/DevTool/DevTool';
import {View} from 'react-native';





const App: () => Node = () => {
    return (
        <View>
            <DevTool />
        </View>
    );
};




export default App;
