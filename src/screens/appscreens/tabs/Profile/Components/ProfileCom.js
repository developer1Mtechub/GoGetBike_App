import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../../../../../utils/fonts'

const ProfileCom = ({ title, subtitle }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={styles.profileNameView}>
                <Text style={[styles.titleTxt,{fontFamily:fonts.MONTESERAT_BOLD}]}>JD</Text>
            </View>
            <View>
                <Text style={styles.titleTxt}>{title}</Text>
                <Text style={styles.titleTxt}>{subtitle}</Text>
            </View>
            <View />
        </View>
    )
}

export default ProfileCom

const styles = StyleSheet.create({
    titleTxt: {
        fontSize: 16,
        fontFamily: fonts.MONTESERAT_MEDIUM,
        color:'#000'
    },
    profileNameView: {
        height: 100,
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: fonts.PINK,
    }
})