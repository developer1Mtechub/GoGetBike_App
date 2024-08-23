import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../utils/fonts'

const Customtitle = ({ title, customStyle }) => {
    return (
        <View>
            <Text style={[styles.titleStyle, { ...customStyle }]}>{title}</Text>
        </View>
    )
}

export default Customtitle

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        color: '#000',
        fontFamily: fonts.MONTESERAT_BOLD
    }
})