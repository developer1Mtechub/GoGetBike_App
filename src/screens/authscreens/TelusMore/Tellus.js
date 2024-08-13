import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/CustomHeader'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import { globalStyel } from '../../globalstyle'
import { _globalImagePicker } from '../../../components/ImagePicker'

const Tellus = ({ navigation }) => {
    const [state, setState] = useState({
        frontPic: '',
        backPic: '',
        currentPic: ''
    })
    const _handleOnpress = (res) => {
        if (res == "frontPic") {
            handleImagePicker("camera")
            setState(prevState => ({
                ...prevState,
                currentPic: res
            }))

        } else if (res == "clearFrontphoto") {
            setState(prevState => ({
                ...prevState,
                currentPic: "",
                frontPic: ""
            }))

        } else if (res == "clearBackphoto") {
            setState(prevState => ({
                ...prevState,
                currentPic: "",
                backPic: ""
            }))

        }else if(res == "tellmore"){
            navigation.navigate("UploaddriveId")
        }
        else {
            handleImagePicker("camera")
            setState(prevState => ({
                ...prevState,
                currentPic: res
            }))
        }
    }
    const handleImageSelected = (image) => {
        if (state.currentPic == "frontPic") {
            setState(prevState => ({
                ...prevState,
                frontPic: image.path
            }))
        } 
        
        else {
            setState(prevState => ({
                ...prevState,
                backPic: image.path
            }))

        }


    }
    const handleImagePicker = (type) => {
        _globalImagePicker(type, handleImageSelected);
    };
    return (
        <View style={globalStyel.mainCOntainer}>
            <CustomHeader navigation={navigation} />
            <View style={globalStyel.globalcontainer}>
                <View style={globalStyel.contentContainer}>
                    <CustomCard
                        title={`Tell us More About \n YourSelf`}
                        description={`Manual Verification`}
                        onPress={(type) => _handleOnpress(type)}
                        completeProfile={true}
                        tellmore={true}
                        fronPhoto={state.frontPic}
                        backPhoto={state.backPic}
                        card={true}
                        titleStyle={{
                            textAlign: 'center'
                        }}
                        desStyle={{
                            marginTop: 6
                        }}
                        titleSubtitle={true}

                    />
                </View>
            </View>






        </View>
    )
}

export default Tellus

