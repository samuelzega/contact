import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AllContact from '../Screen/AllContact'
import AddContact from '../Screen/AddContact'
import ContactDetail from '../Screen/ContactDetail'
import EditContact from '../Screen/EditContact'
import {navigationRef, isReadyRef} from './RootNavigation';

const Stack = createStackNavigator()

export default function Router () {
    React.useEffect(() => {
        return () => {
          isReadyRef.current = false;
        };
    }, []);
    return(
    <NavigationContainer ref={navigationRef} onReady={() => {
        isReadyRef.current = true;
      }}>
        <Stack.Navigator initialRouteName="AllContact" mode="modal">
            <Stack.Screen options={{headerShown: false}} name="AllContact" component={AllContact} />
            <Stack.Screen options={{headerShown: false}} name="AddContact" component={AddContact} />
            <Stack.Screen options={{headerShown: false}} name="ContactDetail" component={ContactDetail} />
            <Stack.Screen options={{headerShown: false}} name="EditContact" component={EditContact} />
        </Stack.Navigator>
    </NavigationContainer>)
}