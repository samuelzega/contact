import React, {useState, useContext} from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import styles from './styles'
import {Header, ProfileImage, Input} from '../../Components'
import {addContact, getAllContact} from '../../Api'
import {ContactContext} from '../../Context/contact'

export default function AddContact({navigation}) {
    const [state, dispatch] = useContext(ContactContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [loading, setLoading] = useState(false)

    const save = async () => {
        setLoading(true)
        const response = await addContact({
            age,
            firstName,
            lastName,
            photo: 'https://image.flaticon.com/icons/png/512/74/74472.png'
        })

        const newContacts = await getAllContact()
        // setContacts(response)
        dispatch({
            type: 'FETCH_CONTACTS',
            payload: newContacts
        })
        setLoading(false)
        navigation.navigate('AllContact')
    }

    return (
        <View>
            <Header 
                title="Add New Contact" 
                RightComponent={() => 
                loading ? <ActivityIndicator size="small" color="grey" /> :    
                <TouchableOpacity onPress={save}>
                        <Text style={styles.rightComponent}>Add</Text>
                </TouchableOpacity>
            } 
                backButton
            />
            <ProfileImage source={require('../../Asset/user.png')} />
            <View style={styles.textInputBox}>
                <Input value={firstName} setValue={setFirstName} placeholder="First Name" />
                <Input value={lastName} setValue={setLastName} placeholder="Last Name" />
                <Input value={age} setValue={setAge} placeholder="Age" />
            </View>
        </View>
    )
}
