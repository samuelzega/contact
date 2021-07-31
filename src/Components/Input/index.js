import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './style'

export default function Input({value, setValue, placeholder, borderColor}) {
    return (
        <TextInput style={[styles.textinput, {borderBottomColor: borderColor? borderColor : '#f2f2f2'}]} value={value} onChangeText={setValue} placeholder={placeholder}/>
    )
}
