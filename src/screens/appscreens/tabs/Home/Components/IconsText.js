import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../../../../../utils/fonts';
import SvgUri from 'react-native-svg-uri';

const IconsText = ({ icon, text, iconColor }) => {
    return (
        <View style={styles.iconText}>
            {typeof icon === 'string' ? (
                <Ionicons name={icon} size={16} color={iconColor} />
            ) : (
                <SvgUri
                    width="16"
                    height="16"
                    source={icon}
                />
            )}
            <Text style={styles.iconText2}>{text}</Text>
        </View>
    )
}

export default IconsText

const styles = StyleSheet.create({
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText2: {
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        fontSize: 13,
        paddingLeft: 3
    },
    image: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
})