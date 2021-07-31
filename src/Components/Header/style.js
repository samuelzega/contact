import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 10
    },
    sideComponent: {
        position: 'absolute'
    },
    leftComponent: {
        left: 15,
    },
    rightComponent: {
        right: 15,
    },
    title: {
        alignSelf: 'center',
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    arrowLeft: {
        width: 20, 
        height: 20
    },
})