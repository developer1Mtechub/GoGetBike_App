import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const CustomHeader = (props) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.header}>
                <Ionicons name='chevron-back' size={32} color={"black"} style={{ right: 14 }} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

export default CustomHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        width:70,
        marginLeft:12,
        // backgroundColor: 'red', // Set background color or use global styles
    },
    header: {
        paddingRight: 15,
    },
    headerTitle: {
        fontSize: 18, // Adjust as necessary
        color: 'black',
    },
});