import React from 'react'
import { Image } from 'react-native'
import styles from './style'

export default function ProfileImage({source}) {
    return <Image style={styles.image} source={source} />
}