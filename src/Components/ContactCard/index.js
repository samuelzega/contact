import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

export default function ContactCard({title, action}) {
    return (
        <TouchableOpacity onPress={action} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
