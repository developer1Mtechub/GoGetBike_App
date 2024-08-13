import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { fonts } from '../../../../../utils/fonts'

const Historybuttons = ({ buttonTitle, onPress, index, cId }) => {
    console.log("Index", cId, index)
    return (
        <TouchableOpacity onPress={() => onPress(index)} style={[styles.button, {
            borderWidth: index != cId ? 1 : 0,
            borderColor: index != cId ? fonts.PRIMARY_COLOR : "green",
            backgroundColor: index != cId ? "#fff" : fonts.PRIMARY_COLOR
        }]}>
            <Text style={{ color: index == cId ? "#fff" : fonts.PRIMARY_COLOR, fontFamily: fonts.MONTESERAT_SEMIBOLD }}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default Historybuttons

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20,
        // width:200

    },
    button: {
        height: 30,
        backgroundColor: fonts.PRIMARY_COLOR,
        alignItems: 'center',
        paddingHorizontal: 12,
        margin: 2,
        width: 150,
        // width: ,
        justifyContent: 'center',
        borderRadius: 20
    }
})