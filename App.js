import React, {useEffect, useState} from 'react';
import {DevTool} from './app/views/DevTool/DevTool';
import {Text, View} from 'react-native';
import {NavBar} from './app/components/NavBar/NavBar';
import {routes} from './app/shared/constants/NavBar.constants';
import {createTCPSocketServer} from './app/shared/TCPSocketServer/TCPSocketServer';
import {Registers} from './app/views/Registers/Registers';
import {Printer} from './app/views/Printer/Printer';


const App: () => Node = () => {
    const [componentName, setComponentName] = useState(<View/>);
    const [buffer, setBuffer] = useState('');

    useEffect(() => {
        // console.log("start tcp socket...")
        const TcpSocketServer = createTCPSocketServer(setBuffer);
        return () => {
            // Anything in here is fired on component unmount.
            TcpSocketServer.close();
        }
    }, []);

    const renderThisComponent = (componentName) => {
        switch (componentName) {
            case routes.devtool.name:
                return <DevTool buffer={buffer} setBuffer={setBuffer}/>;
            case routes.registers.name:
                return <Registers/>
            case routes.printer.name:
                return <Printer buffer={buffer} setBuffer={setBuffer}/>
            default:
                return <Text>Without selection</Text>;
        }
    };


    return (
        <View>
            <NavBar onClickRenderThis={setComponentName}/>
            <Text>{componentName}</Text>
            {renderThisComponent(componentName)}
        </View>
    );
};


export default App;
