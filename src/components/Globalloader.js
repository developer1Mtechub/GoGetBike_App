import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Globalloader = ({color,size}) => {
    return (
        <View>
            <ActivityIndicator
                size={size ??  "small"}
                color={color ?? "#fff"}
            />
        </View>
    )
}

export default Globalloader

const styles = StyleSheet.create({})