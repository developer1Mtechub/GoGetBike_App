import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../utils/fonts'

const CommonSubtxt = ({subtxt,customStyle}) => {
  return (
    <Text style={[styles.subtitleStyle, { ...customStyle}]}>{subtxt}</Text>

  )
}

export default CommonSubtxt

const styles = StyleSheet.create({
    subtitleStyle: {
        fontFamily:fonts.LATO_REGULAR,
        fontSize: 16,
        textAlign:'center',
        color:fonts.descriptionTxtColor
    }
})