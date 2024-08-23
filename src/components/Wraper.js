import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wraper = (props) => {
    return (
        <View style={{ backgroundColor: '#fff',
        padding:12,
        elevation: 2,paddingVertical:16,borderRadius:10,marginTop:20 }}>
            {props.children}
        </View>
    )
}

export default Wraper

const styles = StyleSheet.create({})