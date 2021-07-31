import React, {useState, useContext} from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import styles from './styles'
import {Header, ProfileImage, Input} from '../../Components'
import {editContact, getAllContact} from '../../Api'
import {ContactContext} from '../../Context/contact'

export default function AddContact({navigation, route: {params}}) {
    const {contact} = params
    const [state, dispatch] = useContext(ContactContext)
    const [firstName, setFirstName] = useState(contact.firstName)
    const [lastName, setLastName] = useState(contact.lastName)
    const [age, setAge] = useState(contact.age+'')
    const [loading, setLoading] = useState(false)

    const save = async () => {
        setLoading(true)
        try {
            const response = await editContact({
                contactId: contact.id, 
                dataToEdit: {
                    age,
                    firstName,
                    lastName
                }})
            // setContacts(response)
            dispatch({
                type: 'UPDATE_CONTACT',
                payload: {
                    id: contact.id,
                    firstName,
                    lastName,
                    age,
                    photo: contact.photo
                  }
            })
            setLoading(false)
            navigation.navigate('AllContact')    
        } catch (error) {
            dispatch({
                type: 'UPDATE_CONTACT',
                payload: {
                    id: contact.id,
                    firstName,
                    lastName,
                    age,
                    photo: contact.photo
                  }
            })
            setLoading(false)
            navigation.navigate('AllContact')   
        }
        
    }

    return (
        <View>
            <Header 
                title="Edit Contact" 
                RightComponent={() => 
                loading ? <ActivityIndicator size="small" color="grey" /> :    
                <TouchableOpacity onPress={save}>
                        <Text style={styles.rightComponent}>Save</Text>
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
