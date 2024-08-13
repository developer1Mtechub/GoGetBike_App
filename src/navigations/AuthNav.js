// In App.js in a new project

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LetStart from '../screens/authscreens/Start/Letstart'
import Signup from '../screens/authscreens/Signup/Signup';
import Code from '../screens/authscreens/Code/Code';
import Complete from '../screens/authscreens/CompleteProfile/Complete';
import Identity from '../screens/authscreens/Identity/Identity';
import Manualveri from '../screens/authscreens/ManualVerification/Manualveri';
import Takeselfie from '../screens/authscreens/TakeSelfie/Takeselfie';
import Tellus from '../screens/authscreens/TelusMore/Tellus';
import UploaddriveId from '../screens/authscreens/Uploaddrving/UploaddriveId';
import TabsNav from './TabsNav';
import Login from '../screens/authscreens/Login/Login';

const Stack = createNativeStackNavigator();

function AuthNav() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="LetStart" component={LetStart} />
            <Stack.Screen name="Registration" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Code" component={Code} />
            <Stack.Screen name="Complete" component={Complete} />
            <Stack.Screen name="Idenitity" component={Identity} />
            <Stack.Screen name="ManualVerification" component={Manualveri} />
            <Stack.Screen name="TakeSelfie" component={Takeselfie} />
            <Stack.Screen name="TellusMore" component={Tellus} />
            <Stack.Screen name="UploaddriveId" component={UploaddriveId} />
        </Stack.Navigator>
    );
}

export default AuthNav;