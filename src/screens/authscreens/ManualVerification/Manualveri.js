import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import { globalStyel } from '../../globalstyle'
import CustomHeader from '../../../components/CustomHeader'
import CustomImage from '../../../components/CustomImage'
import Customtitle from '../../../components/Customtitle'
import Customdescription from '../../../components/Customdescription'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Spacer from '../../../components/Spacer'
import { fonts } from '../../../utils/fonts'
const Manualveri = ({ navigation, route }) => {
    const { userData } = route.params;
    const _handlePress = (result) => {
        if (result == "camera") {
            navigation.navigate("TakeSelfie", { userData: userData })
        }

    }
    return (
        <View style={globalStyel.mainCOntainer}>
            <CustomHeader navigation={navigation} />
            <View style={globalStyel.globalcontainer}>
                <View style={globalStyel.centerCOntent}>
                    <CustomImage source={images.identify} />
                    <Customtitle title={"Manual Verification"} />
                    <Customdescription
                        customStyle={{ textAlign: 'center' }}
                        title={`We Need to verify your identity \n (Required)`} />
                </View>
                <Spacer space={15} />
                <TouchableOpacity onPress={() => _handlePress("camera")} style={styles.buttons}>
                    <AntDesign name={"camerao"} size={24} color={"#000"} />
                    <Text style={styles.subheading}>{"Capture from camera"}</Text>
                </TouchableOpacity>
                <Spacer space={15} />
                <TouchableOpacity style={styles.buttons}>
                    <Feather name={"image"} size={24} color={"#000"} />
                    <Text style={styles.subheading}>{"Upload From Gallery"}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Manualveri

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        elevation: 2,
        paddingVertical: 8
    },
    subheading: {
        fontFamily: fonts.MONTESERAT_MEDIUM,
        color: '#000',
        paddingLeft: 10
    }
})