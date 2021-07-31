import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import {navigate} from '../../Routes/RootNavigation'

export default function Header({backButton, RightComponent, title}) {
    return (
        <View style={styles.container}>
            {backButton && 
            <TouchableOpacity style={[styles.sideComponent, styles.leftComponent]} onPress={() => navigate('AllContact')}>
            <Image source={require('../../Asset/left-arrow.png')} style={styles.arrowLeft} />
            </TouchableOpacity>}
            <Text style={styles.title}>{title}</Text>
            {RightComponent && <View style={[styles.sideComponent, styles.rightComponent]}>
                <RightComponent />
            </View>}
        </View>
    )
}
