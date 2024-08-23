import {View } from 'react-native'
import React, { useState } from 'react'
import { globalStyel } from '../../globalstyle'
import CustomHeader from '../../../components/CustomHeader'
import CustomCard from '../../../components/CustomCard'
import Spacer from '../../../components/Spacer'
import Custombutton from '../../../components/Custombutton'
import { _globalImagePicker } from '../../../components/ImagePicker'
import GlobalAlert from '../../../components/GlobalAlert'
import ImageUpload from './component/Imageupload'
import { userRegister } from '../../../utils/apis'
const UploaddriveId = ({ navigation, route }) => {
    const { userData } = route.params;
    const [state, setState] = useState({
        driverIdFront: '',
        modalVisble: false,
        loading: false,
        driverIdBack: '',
        imageType: ''

    })
    const _handleOnpress = () => {
        const userResponce = {
            phone: "+923135959779",
            email: userData.email,
            full_name: userData.fullName,
            full_address: userData.fullAddress,
            dob: "22-01-2000",
            verification_method: "manual",
            location: {
                latitude: "33.626057",
                longitude: "73.071442"
            },
            profile_pic: {
                public_id: "sample",
                url: userData.userImage
            },
            nric_no: userData.nricNo,
            front_id_pic: {
                public_id: "sample", 
                url: userData.frontPic 
            },
            back_id_pic: {
                public_id: "sample",
                url: userData.backPic
            },
            front_id_license: {
                public_id: "sample",
                url: state.driverIdFront
            },
            back_id_license: {
                public_id: "sample",
                url: state.driverIdBack
            }
        };
        userRegister(userResponce).then((responce) => {
            console.log("Check Api Responce", responce)
        }).catch((error) => {
            console.log("Get Error", error)
        })
        // setState((prevState) => ({
        //     ...prevState,
        //     modalVisble: true
        // }))

        // setTimeout(() => {
        //     setState((prevState) => ({
        //         ...prevState,
        //         modalVisble: false
        //     }))
        //     _redirectingtoHome();
        // }, 2000);
    }
    const _redirectingtoHome = () => {
        navigation.navigate("Tabs")
    }
    const handleImagePicker = (type, side) => {
        _globalImagePicker(type, (image) => {
            if (side === 'front') {
                setState(prevState => ({ ...prevState, driverIdFront: image.path }));
            } else if (side === 'back') {
                setState(prevState => ({ ...prevState, driverIdBack: image.path }));
            }
        });
    };
    const handleClearImage = (position) => {
        setState(prevState => ({
            ...prevState,
            [position]: '',
        }));
    };

    return (
        <View style={globalStyel.mainCOntainer}>
            <CustomHeader navigation={navigation} />
            <View style={globalStyel.globalcontainer}>
                <View style={globalStyel.contentContainer}>
                    <CustomCard
                        title={`Upload Your \n Driving ID`}
                        description={`Only users that hold a minimum of 2B Class license will be able to use app`}
                        uploadDrive={true}
                        titleStyle={{
                            textAlign: 'center'
                        }}
                        desStyle={{
                            marginTop: 6
                        }}
                        titleSubtitle={true}

                    />
                    <Spacer space={10} />
                    <View>
                        <ImageUpload
                            imageUri={state.driverIdFront}
                            onUploadPress={() => handleImagePicker('camera', 'front')}
                            onClearPress={() => handleClearImage('driverIdFront')}
                            uploadTitle="Upload Id Front"
                        />
                        <Spacer space={10} />
                        <ImageUpload
                            imageUri={state.driverIdBack}
                            onUploadPress={() => handleImagePicker('camera', 'back')}
                            onClearPress={() => handleClearImage('driverIdBack')}
                            uploadTitle="Upload Id Back"
                        />
                    </View>
                    <Spacer space={20} />
                    {state.driverIdFront != "" && state.driverIdBack != "" && <Custombutton title={"Submit"} onPress={() => _handleOnpress()} />}
                    <GlobalAlert
                        isModalvisible={state.modalVisble}
                        type={"uploadedSuccessfuly"}
                        onPress={(res) => handleModalres(res)}
                    />
                </View>
            </View>





        </View>
    )
}

export default UploaddriveId
