import {StyleSheet} from 'react-native'
import {ScreenSize} from '../../Style'
const {width, height} = ScreenSize

export default StyleSheet.create({
    image: {
        alignSelf: 'center',
        marginTop: 20,
        width: width* 0.3,
        height: width* 0.3,
        borderRadius: width* 0.3,
        backgroundColor: '#d6ecf3'
    }
})