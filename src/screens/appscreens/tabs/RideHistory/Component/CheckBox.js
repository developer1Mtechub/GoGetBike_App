import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CheckBox = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.checkBoxView}>
        </TouchableOpacity>
    )
}

export default CheckBox

const styles = StyleSheet.create({
    checkBoxView:{ height: 20, width: 20, borderRadius: 20, borderWidth: 1,borderColor:'lightgrey' }
})