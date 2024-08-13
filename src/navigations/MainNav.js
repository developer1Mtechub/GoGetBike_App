// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding/Onboarding';
import AuthNav from './AuthNav';
import TabsNav from './TabsNav';
import SearchRide from '../screens/appscreens/tabs/Home/HomeSubscreens/SearchRide';
import AddLocation from '../screens/appscreens/tabs/Home/HomeSubscreens/AddLocation';
import SearchResult from '../screens/appscreens/tabs/Home/HomeSubscreens/SearchResult';
import ConfirmBooking from '../screens/appscreens/tabs/Home/HomeSubscreens/ConfirmBooking';
import ConfirmPayment from '../screens/appscreens/tabs/Home/HomeSubscreens/ConfirmPayment';
import Bikedetails from '../screens/appscreens/tabs/Home/HomeSubscreens/Bikedetails';

const Stack = createNativeStackNavigator();

function MainNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Onboard" component={OnboardingScreen} />
                <Stack.Screen name="AuthFiles" component={AuthNav} />
                <Stack.Screen name="Tabs" component={TabsNav} />
                <Stack.Screen name="SearchRide" component={SearchRide} />
                <Stack.Screen name="AddLocation" component={AddLocation} />
                <Stack.Screen name="SearchResult" component={SearchResult} />
                <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} />
                <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
                <Stack.Screen name="Bikedetails" component={Bikedetails} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNav;