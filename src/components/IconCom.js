import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { fonts } from '../utils/fonts'

const IconCom = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress()} style={[styles.headerBack,{...props.customStyle}]}>
            {props.icon}
        </TouchableOpacity>
    )
}

export default IconCom

const styles = StyleSheet.create({
    headerBack: {
        backgroundColor: fonts.HEADER_BG, borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 40,
        width: 40
    },
})