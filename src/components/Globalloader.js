import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Globalloader = () => {
    return (
        <View>
            <ActivityIndicator
                size={"small"}
                color={"#fff"}
            />
        </View>
    )
}

export default Globalloader

const styles = StyleSheet.create({})