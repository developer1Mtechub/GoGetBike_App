import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/CustomHeader'
import { globalStyel } from '../../globalstyle'
import { _globalImagePicker } from '../../../components/ImagePicker'
import InputField from '../../../components/InputField'
import { Formik } from 'formik'
import Wraper from '../../../components/Wraper'
import Custombutton from '../../../components/Custombutton'
import Customtitle from '../../../components/Customtitle'
import Customdescription from '../../../components/Customdescription'
import Spacer from '../../../components/Spacer'
import PhotoWithButton from './component/photoWithbuttons'
import { tellUsmorescreenValidation } from '../../../utils/validatonhelper'
import ErrorTxt from '../../../components/ErrorTxt'

const Tellus = ({ navigation, route }) => {
    const { userData } = route.params;
    console.log("Check Results====", userData)
    const [state, setState] = useState({
        frontPic: '',
        backPic: '',
        currentPic: '',
        fullNameNric: '',
        fullAddress: '',
        nricNo: '',
        postalCode: '',
        frontPicUploaded: false,
        backPicUploaded: false
    })

    // const _handleOnpress = (response) => {
    //     if (response === "frontPic") {
    //         handleImagePicker("camera", "frontPic");
    //     } else if (response === "backPic") {
    //         handleImagePicker("camera", "backPic");
    //     } else if (response === "clearFrontphoto") {
    //         setState(prevState => ({
    //             ...prevState,
    //             frontPic: "",
    //         }));
    //     } else if (response === "clearBackphoto") {
    //         setState(prevState => ({
    //             ...prevState,
    //             backPic: "",
    //         }));
    //     }
    // };

    console.log("frontPic:", state.frontPic);
    console.log("backPic:", state.backPic);
    // console.log("isPhotoUploaded (frontPic):", !!values.frontPic);
    // console.log("isPhotoUploaded (backPic):", !!values.backPic);

    const _handleOnpress = (response) => {
        if (response === "frontPic") {
            handleImagePicker("camera", "frontPic");
        } else if (response === "backPic") {
            handleImagePicker("camera", "backPic");
        } else if (response === "clearFrontphoto") {
            setState(prevState => ({
                ...prevState,
                frontPic: "",
                frontPicUploaded: false,
            }));
        } else if (response === "clearBackphoto") {
            setState(prevState => ({
                ...prevState,
                backPic: "",
                backPicUploaded: false,
            }));
        }
    };

    const handleImageSelected = (image) => {
        if (image) {
            setState(prevState => {
                const newState = { ...prevState };
                if (prevState.currentPic === "frontPic") {
                    newState.frontPic = image.path;
                    newState.frontPicUploaded = true; // Set uploaded flag
                } else if (prevState.currentPic === "backPic") {
                    newState.backPic = image.path;
                    newState.backPicUploaded = true; // Set uploaded flag
                }
                return {
                    ...newState,
                    selfieState: true,
                    currentPic: "",
                };
            });
        }
    };

    // const handleImageSelected = (image) => {
    //     if (image) {
    //         setState(prevState => {
    //             const newState = { ...prevState };
    //             if (prevState.currentPic === "frontPic") {
    //                 newState.frontPic = image.path;
    //                 newState.frontPicUploaded = true
    //             } else if (prevState.currentPic === "backPic") {
    //                 newState.backPic = image.path;
    //                 newState.backPicUploaded = true
    //             }
    //             return {
    //                 ...newState,
    //                 selfieState: true,
    //                 currentPic: "",
    //             };
    //         });
    //     }
    // };

    const handleImagePicker = (type, picType) => {
        setState(prevState => ({
            ...prevState,
            currentPic: picType
        }));
        _globalImagePicker(type, handleImageSelected);
    };

    const handleSubmitPress = (values) => {
        console.log("Check Values", values)
        const responceData = {
            ...userData,
            frontPic: state.frontPic,
            backPic: state.backPic,
            fullNameNric: state.fullNameNric,
            fullAddress: state.fullAddress,
            nricNo: state.nricNo,
            postalCode: state.postalCode

        }
        navigation.navigate("UploaddriveId", {
            userData: responceData
        })
    }

    return (
        <View style={globalStyel.mainCOntainer}>
            <CustomHeader navigation={navigation} />
            <View style={globalStyel.globalcontainer}>
                <View style={globalStyel.centerCOntent}>
                    <Customtitle customStyle={{ textAlign: 'center' }} title={`Tell us More About \n YourSelf`} />
                    <Customdescription
                        customStyle={{ textAlign: 'center' }}
                        title={`Manual Verification`} />
                </View>
                <Wraper>
                    <Formik
                        initialValues={state}
                        onSubmit={(values) => handleSubmitPress(values)}
                        validationSchema={tellUsmorescreenValidation}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors, setFieldError }) => (
                            <View style={{ paddingHorizontal: 10 }}>
                                <InputField
                                    label="Full Name as per NRIC"
                                    onChangeText={handleChange('fullNameNric')}
                                    value={values.fullNameNric}
                                    autoCapitalize="none"
                                />
                                {errors.fullNameNric && <ErrorTxt title={errors.fullNameNric} />}
                                <InputField
                                    label="Full Address"
                                    onChangeText={handleChange('fullAddress')}
                                    value={values.fullAddress}
                                    autoCapitalize="none"
                                />
                                {errors.fullAddress && <ErrorTxt title={errors.fullAddress} />}

                                <InputField
                                    label="NRIC No"
                                    onChangeText={handleChange('nricNo')}
                                    value={values.nricNo}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                />
                                {errors.nricNo && <ErrorTxt title={errors.nricNo} />}

                                <InputField
                                    label="Post Code"
                                    onChangeText={handleChange('postalCode')}
                                    value={values.postalCode}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                />
                                {errors.postalCode && <ErrorTxt title={errors.postalCode} />}
                                <View style={styles.picsContainer}>
                                    <PhotoWithButton
                                        photo={state.frontPic}
                                        onPressCamera={() => {
                                            _handleOnpress("frontPic")
                                            setFieldError("frontPic", "")
                                        }}
                                        onPressClear={() => _handleOnpress("clearFrontphoto")}
                                        title="Front ID Photo"
                                        currentPic="frontPic"
                                        error={errors.frontPic}
                                        isPhotoUploaded={!!state.frontPic}
                                        setCurrentPic={(pic) => setState(prevState => ({ ...prevState, currentPic: pic }))}
                                    />

                                    {errors.frontPic && <ErrorTxt title={errors.frontPic} />}

                                    <PhotoWithButton
                                        photo={state.backPic}
                                        onPressCamera={() => {
                                            _handleOnpress("backPic")
                                            setFieldError("backPic", "")
                                        }}
                                        onPressClear={() => _handleOnpress("clearBackphoto")}
                                        title="Back ID Photo"
                                        currentPic="backPic"
                                        error={errors.backPic}
                                        isPhotoUploaded={!!state.backPic}
                                        setCurrentPic={(pic) => setState(prevState => ({ ...prevState, currentPic: pic }))}
                                    />
                                </View>

                                <Spacer space={15} />

                                <Custombutton
                                    title={"Submit"}
                                    loading={state.loading}
                                    onPress={() => handleSubmit(values)}
                                />


                            </View>
                        )}
                    </Formik>
                </Wraper>

            </View>






        </View>
    )
}

const styles = StyleSheet.create({
    cameraTextStyle: {
        backgroundColor: '#fff',
        elevation: 2,
        margin: 4,
        padding: 10,
        borderRadius: 10
    },
    picsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly"
    },

})

export default Tellus

