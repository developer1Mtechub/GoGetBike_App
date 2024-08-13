import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { fonts } from '../../../../../utils/fonts'
import CustomImage from '../../../../../components/CustomImage'
const ProfileItems = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(item.title)} style={styles.profileContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.iconBox}>
                    <CustomImage source={item.icon} style={{ height: 20, width: 20 }} />
                </View>
                <Text style={styles.titletxt}>{item.title}</Text>
            </View>
            {item.title != "Log Out" && <MaterialIcon name={"arrow-forward-ios"} size={18} color={"#000"} />}
        </TouchableOpacity>
    )
}

export default ProfileItems

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        paddingVertical: 6,
        alignItems: 'center', justifyContent: 'space-between'
    },
    iconBox: {
        height: 50, width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: fonts.PINK, borderRadius: 5
    },
    titletxt: {
        fontSize: 16,
        fontFamily: fonts.MONTESERAT_MEDIUM,
        color: fonts.BLACK,
        marginLeft: 6
    }
})