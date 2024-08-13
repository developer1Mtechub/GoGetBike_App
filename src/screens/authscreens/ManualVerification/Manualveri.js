import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import { globalStyel } from '../../globalstyle'
import CustomHeader from '../../../components/CustomHeader'

const Manualveri = ({navigation}) => {
    const _handlePress = (result) => {
        if(result == "camera"){
            navigation.navigate("TakeSelfie")
        }

    }
    return (
        <View style={globalStyel.mainCOntainer}>
            <CustomHeader navigation={navigation}/>
            <View style={globalStyel.globalcontainer}>
            <CustomCard
                imageSource={images.identify}
                onPress={(type) => _handlePress(type)}
                title="Manual Verification"
                description={`We Need to verify your identity \n (Required)`}
                manual={true}
                card={true}
            />
            </View>
         
        </View>
    )
}

export default Manualveri

const styles = StyleSheet.create({})