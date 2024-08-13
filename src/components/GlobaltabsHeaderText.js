import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../utils/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
const GlobaltabsHeaderText = ({ title,add,onPress }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {add && <TouchableOpacity onPress={onPress} style={styles.addContainer}>
                <AntDesign name='plus' color={"#fff"} size={20} />
            </TouchableOpacity>}
        </View>
    )
}

export default GlobaltabsHeaderText

const styles = StyleSheet.create({
    addContainer:{
        borderRadius: 20,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: fonts.PRIMARY_COLOR
    },
    title: {
        textAlign: 'center',
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        fontSize: 20,
        color: '#000',
    },
})