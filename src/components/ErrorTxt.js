import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../utils/fonts'

const ErrorTxt = ({ title, customeSTyle }) => {
    return (
        <Text style={[styles.erroTxt,{...customeSTyle}]}>{title}</Text>
    )
}

export default ErrorTxt

const styles = StyleSheet.create({
    erroTxt: {
        color: 'red',
        textAlign: 'left',
        bottom:12,
        fontFamily:fonts.MONTESERAT_REGULAR
    }
})