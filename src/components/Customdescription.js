import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../utils/fonts'

const Customdescription = ({ title, customStyle }) => {
    return (
        <View>
            <Text style={[styles.desStyle, { ...customStyle }]}>{title}</Text>
        </View>
    )
}

export default Customdescription
const styles = StyleSheet.create({
    desStyle: {
        fontSize: 16,
        color: '#000',
        fontFamily: fonts.MONTESERAT_REGULAR
    }
})