import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

export default function DetailCard({title, desc}) {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
    )
}
