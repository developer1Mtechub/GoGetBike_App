import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../../../../../utils/fonts'
import CustomImage from '../../../../../components/CustomImage'
import { images } from '../../../../../utils/constants'

const CurrencyCard = ({ title }) => {
    return (
        <View style={styles.curencyCard}>
            <CustomImage source={images.wallet} style={{ height: 60, width: 60 }} />
            <Text style={styles.curencyTxt}>$ {title}</Text>
        </View>
    )
}

export default CurrencyCard

const styles = StyleSheet.create({
    curencyCard: {
        backgroundColor: fonts.PRIMARY_COLOR,
        borderRadius: 10,
        paddingVertical: 6,
        alignItems: 'center'
    },
    curencyTxt:{
        fontSize:29,
        color:'#fff',
        marginTop:3,
        fontFamily:fonts.MONTESERAT_BOLD
    }
})