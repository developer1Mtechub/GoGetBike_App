import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../utils/fonts'

const Commontitle = ({ title, customStyle }) => {
    return (
        <Text style={[styles.titleStyle, { ...customStyle }]}>{title}</Text>
    )
}

export default Commontitle

const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: fonts.MONTESERAT_BOLD,
        fontSize: 28,
        color:"#000"
    }
})