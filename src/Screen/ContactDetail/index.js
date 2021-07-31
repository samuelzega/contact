import React, {useState, useContext} from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import {Header, DetailCard, ProfileImage} from '../../Components'
import {deleteContact} from '../../Api'
import styles from './style'
import {ContactContext} from '../../Context/contact'

export default function AllContact({navigation, route: {params}}) {
    const {contact} = params;
    const [state, dispatch] = useContext(ContactContext)
    const [loading, setLoading] = useState(false)
    const deleteAction = async () => {
        // console.log(contact.id);
        setLoading(true)
        try {
            const response = await deleteContact({contactId: contact.id})
            dispatch({
                type: 'DELETE_CONTACT',
                payload: contact
            })
            setLoading(false)
            navigation.navigate('AllContact')
            
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'DELETE_CONTACT',
                payload: contact
            })
            setLoading(false)
            navigation.navigate('AllContact')
        }
    }

    
    return (
        <View style={styles.container}>
            <Header 
                title="Detail" 
                RightComponent={() => 
                    <TouchableOpacity onPress={() => navigation.navigate('EditContact', {contact})}>
                        <Text style={styles.rightComponent}>Edit</Text>
                    </TouchableOpacity>
            } 
                backButton
            />
            <ProfileImage source={{uri: contact.photo}} />
            <Text style={styles.name}>{`${contact.firstName} ${contact.lastName}`}</Text>
            <DetailCard title="First Name" desc={contact.firstName} />
            <DetailCard title="Last Name" desc={contact.lastName} />
            <DetailCard title="Age" desc={contact.age} />
            <TouchableOpacity onPress={deleteAction} style={styles.deleteButton}>
                {loading?<ActivityIndicator style={styles.activityIndicator} color="#f2f2f2" />:
                <Text style={styles.deleteText}>Delete</Text>}
            </TouchableOpacity>
            
        </View>
    )
}
