import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomCard from '../../../components/CustomCard'
import CustomHeader from '../../../components/CustomHeader'
import { globalStyel } from '../../globalstyle'
import { images } from '../../../utils/constants'
import { _globalImagePicker, _imagePicker } from '../../../components/ImagePicker'
import { uploadImageToCloudinary } from '../../../utils/apis'

const Takeselfie = ({ navigation, route }) => {
    const { userData } = route.params;
    const [state, setState] = useState({
        selfieState: false,
        userImage: '',
        loading: false
    })

    const _handleOnpress = (responce) => {

        setState(prevState => ({
            ...prevState,
            loading: true
        }))
        if (responce == "selfie") {
            handleImagePicker("camera")
        } else {
            setTimeout(() => {
                setState(prevState => ({
                    ...prevState,
                    loading: false
                }))
                const userResponse = {
                    fullName: userData.fullName,
                    email: userData.email,
                    address: userData.address,
                    dob: userData.dob,
                    userImage: state.userImage
                };
                navigation.navigate("TellusMore", {
                    userData: userResponse
                });
            }, 1000);


        }
    }

    // const handleImageSelected = (image) => {
    //     if (image) {
    //         setState(prevState => ({
    //             ...prevState,
    //             selfieState: true,
    //             userImage: image.path,
    //             userData: {
    //                 ...userData,
    //                 userImage: image.path
    //             }
    //         }))

    //     }
    // };
    const handleImageSelected = async (image) => {

        if (image) {
            setState(prevState => ({
                ...prevState,
                selfieState: true,
                userImage: image.path,
                loading: true,
            }));
            try {
                const uploadedImageUrl = await uploadImageToCloudinary(image.path);
                if (uploadedImageUrl) {
                    setState(prevState => ({
                        ...prevState,
                        userImage: uploadedImageUrl,
                        loading: false,
                    }));
                    Alert.alert("Image uploaded!", `Image URL: ${uploadedImageUrl}`);
                }
            } catch (error) {
                console.log('Error uploading image:', error.response);
                Alert.alert("Error", "Failed to upload image.");
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }));
            }
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
                    loading={state.loading}
                />
            </View>




        </View>
    )
}

export default Takeselfie

const styles = StyleSheet.create({})