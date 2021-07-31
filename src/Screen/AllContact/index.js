import React, {useEffect, useContext, useState} from 'react'
import { View, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import {Header, ContactCard} from '../../Components'
import styles from './style'
import {getAllContact} from '../../Api'
import {ContactContext} from '../../Context/contact'

export default function ContactDetail({navigation}) {
    const [state, dispatch] = useContext(ContactContext)
    const [fetchLoading, setFetchLoading] = useState(false)
    // const [contacts, setContacts] = useState([])
    useEffect(() => {
        getContacts()
    }, [])

    const getContacts = async () => {
        setFetchLoading(true)
        const response = await getAllContact()
        // setContacts(response)
        dispatch({
            type: 'FETCH_CONTACTS',
            payload: response
        })
        setFetchLoading(false)
    }
    return (
        <View style={styles.container}>
            <Header 
                title="Contacts" 
                RightComponent ={() => 
                    <TouchableOpacity onPress={() => navigation.navigate('AddContact')}>
                        <Image source={require('../../Asset/plus.png')} style={styles.rightComponent} />
                    </TouchableOpacity>
            }  
            />
            {fetchLoading && <ActivityIndicator size="large" color="grey" />}
            <FlatList 
                data={state.contacts}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <ContactCard action={() => navigation.navigate('ContactDetail', {
                    contact: item
                })} title={`${item.firstName} ${item.lastName}`} />}
            />
        </View>
    )
}
