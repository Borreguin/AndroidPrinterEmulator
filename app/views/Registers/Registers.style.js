import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    registerContainer: {
       height: 70,
       backgroundColor: '#e5d6a5',
        padding: 5,
        margin: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    rawText:{
        marginLeft: 5,
        backgroundColor: '#a7c5f1',
        width: '25%',
        overflow: 'hidden'
    },
    parsedText:{
        marginLeft: 5,
        backgroundColor: '#c1e59e',
        width: '25%',
        overflow: 'hidden'
    },
    headerContainer: {
        height: 30,
        backgroundColor: 'rgba(176,176,176,0.82)',
        padding: 5,
        margin: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    timestampTitle:{
        width: 172,
    }
});
