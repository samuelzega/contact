import {StyleSheet} from 'react-native'
import {ScreenSize} from '../../Style'
const {width, height} = ScreenSize

export default StyleSheet.create({
    container:{
        flex: 1
    },
    rightComponent: {
        color: 'blue',
        fontSize: 15,
    },
    leftComponent: {
        width: 20, 
        height: 20
    },
    name: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 12,
    },
    deleteButton: {
        alignSelf: 'center',
        backgroundColor: '#ff483f',
        marginTop: 25,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    deleteText: {
        color: '#f2f2f2',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 15
    },
    activityIndicator: {
        paddingHorizontal: 17
    }
})