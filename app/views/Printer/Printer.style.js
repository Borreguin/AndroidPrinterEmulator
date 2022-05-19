import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    TextSection: {
        backgroundColor: '#e6e5e5',
        minHeight: 70,
    },
    customText: {
        fontVariant: ['tabular-nums'],
        fontFamily: 'monospace'
    },
    hideButtons:{
        height:30,
        alignItems: 'center',
        backgroundColor: 'rgba(124,125,124,0.77)'
    },
    hide:{
        display: 'none'
    }
});
