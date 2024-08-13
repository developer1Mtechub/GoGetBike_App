import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomCard from '../../../components/CustomCard'
import CustomHeader from '../../../components/CustomHeader'
import { globalStyel } from '../../globalstyle'
import { images } from '../../../utils/constants'
import { _globalImagePicker, _imagePicker } from '../../../components/ImagePicker'

const Takeselfie = ({ navigation }) => {
    const [state, setState] = useState({
        selfieState: false,
        userImage: ''
    })

    const _handleOnpress = (responce) => {
        if (responce == "selfie") {
            handleImagePicker("camera")
        } else {
            navigation.navigate("TellusMore")
        }
    }

    const handleImageSelected = (image) => {
        if (image) {
            setState(prevState => ({
                ...prevState,
                selfieState: true,
                userImage: image.path
            }))

        }
    };

    const handleImagePicker = (type) => {
        _globalImagePicker(type, handleImageSelected);
    };



    return (
        <View style={globalStyel.mainCOntainer}>
            <CustomHeader navigation={navigation} />
            <View style={globalStyel.globalcontainer}>
                <CustomCard
                    imageSource={state.selfieState ? null : images.identify}
                    title="TAKE A SELFIE"
                    completeProfile={state.selfieState ? true : false}
                    description={`Manual Verification`}
                    takeselfie={true}
                    selefieState={state.selfieState}
                    imagePath={state.userImage}
                    onPress={(type) => _handleOnpress(type)}
                    card={true}
                />
            </View>




        </View>
    )
}

export default Takeselfie

const styles = StyleSheet.create({})