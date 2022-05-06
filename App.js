/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import TcpSocket from 'react-native-tcp-socket';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {EscCharacters} from './modules/esc-pos-parser/symbols';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const server = TcpSocket.createServer(function (socket) {
    socket.on('data', data => {
      socket.write('Echo server ' + data);
    });

    socket.on('error', error => {
      console.log('An error ocurred with client socket ', error);
    });

    socket.on('close', error => {
      console.log('Closed connection with ', socket.address());
    });
  }).listen({port: 9100, host: '0.0.0.0'});

  const decode = data => {
    let resp = '';
    for (var d of data) {
      const letter = String.fromCharCode(d);
      if (!EscCharacters.includes(letter)) {
        resp += letter;
      }
    }

    return resp;
  };

  function toHex(str, hex) {
    try {
      hex = unescape(encodeURIComponent(str))
        .split('')
        .map(function (v) {
          return v.charCodeAt(0).toString(16);
        })
        .join('');
    } catch (e) {
      hex = str;
      console.log('invalid text input: ' + str);
    }
    return hex;
  }

  server.on('connection', socket => {
    console.log(
      'Client connected to server on ' + JSON.stringify(socket.address()),
    );

    socket.on('data', data => {
      // console.log('Server client received: ' + (data.length < 2500 ? data : data.length + ' bytes'));
      console.log(
        'Server client received: ' +
          (data.length < 25000 ? decode(data) : data.length + ' bytes'),
      );
    });

    socket.on('error', error => {
      console.log('Server client error ' + error);
    });

    socket.on('close', error => {
      console.log('Server client closed ' + (error ? error : ''));
    });
  });

  server.on('error', error => {
    console.log('An error ocurred with the server', error);
  });

  server.on('close', () => {
    console.log('Server closed connection');
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          {/* <Button title="Press me" onPress={newFunction} >*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
