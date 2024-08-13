import * as React from 'react';
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/appscreens/tabs/Home/Home';
import MyWallet from '../screens/appscreens/tabs/Wallet/Mywallet';
import Profile from '../screens/appscreens/tabs/Profile/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fonts } from '../utils/fonts';
import History from '../screens/appscreens/tabs/RideHistory/History';



const Tab = createBottomTabNavigator();

export default function TabsNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'History') {
                        iconName = focused ? 'history' : 'history';
                        return <MaterialCommunityIcons name={iconName} size={25} color={color} />
                    } else if (route.name === 'MyWallet') {
                        iconName = focused ? 'wallet' : 'wallet';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={25} color={color} />;
                },
                tabBarLabel: ({ focused, color }) => {
                    let label;
                    if (route.name === 'Home') {
                        label = 'Home';
                    } else if (route.name === 'History') {
                        label = 'History';
                    } else if (route.name === 'MyWallet') {
                        label = 'Wallet';
                    } else if (route.name === 'Profile') {
                        label = 'Profile';
                    }

                    return (
                        <Text
                            style={{
                                color: focused ? fonts.PRIMARY_COLOR : '#BABDBF',
                                fontFamily: fonts.MONTESERAT_BOLD,
                                marginBottom: 16,
                                fontSize: 13
                            }}>
                            {label}
                        </Text>
                    );
                },
                tabBarActiveTintColor: fonts.PRIMARY_COLOR,
                tabBarInactiveTintColor: '#BABDBF',
                tabBarStyle: {
                    height: 65,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="MyWallet" component={MyWallet} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}