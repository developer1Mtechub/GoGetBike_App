import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyel } from '../../globalstyle'
import CustomHeader from '../../../components/CustomHeader'
import CustomCard from '../../../components/CustomCard'
import AntDesign from "react-native-vector-icons/AntDesign"
import Spacer from '../../../components/Spacer'
import Custombutton from '../../../components/Custombutton'
import { _globalImagePicker } from '../../../components/ImagePicker'
import CustomImage from '../../../components/CustomImage'
import Entypo from 'react-native-vector-icons/Entypo'
import GlobalAlert from '../../../components/GlobalAlert'
const UploaddriveId = ({ navigation }) => {
    const [state, setState] = useState({
        driverId: '',
        modalVisble: false,
        loading: false

    })
    const _handleOnpress = () => {
        setState((prevState) => ({
            ...prevState,
            modalVisble: true
        }))

        setTimeout(() => {
            setState((prevState) => ({
                ...prevState,
                modalVisble: false
            }))
            _redirectingtoHome();
        }, 1000);
    }
    const _redirectingtoHome = () => {
        navigation.navigate("Tabs")
    }
    const handleImageSelected = (image) => {
        setState(prevState => ({
            ...prevState,
            driverId: image.path,
        }))
    }
    const handleImagePicker = (type) => {
        _globalImagePicker(type, handleImageSelected);
    };

    // const handleModalres = (res) => {
    //     if (res == "Yes") {
    //         _redirectingtoHome();
    //     }
    //     else {
    //         setState(prevState => ({
    //             ...prevState,
    //             modalVisble: false,
    //         }))
    //     }
    // }

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
                    <Spacer space={20} />
                    <View>
                        {state.driverId ? <View style={{
                            height: 200,
                            borderRadius: 10,
                            width: '100%',
                            borderWidth: 1
                        }}>
                            <CustomImage source={state.driverId} style={{ height: 200, width: "100%", resizeMode: 'cover', borderRadius: 10 }} />
                            <TouchableOpacity onPress={() => {
                                setState((prevState => ({
                                    ...prevState,
                                    driverId: ""
                                })))
                            }} style={{ position: 'absolute', alignSelf: 'flex-end', }}>
                                <Entypo name={"circle-with-cross"} size={32} color={"red"} />
                            </TouchableOpacity>
                        </View>
                            : <TouchableOpacity onPress={() => handleImagePicker("camera")} style={styles.uploadCard}>
                                <AntDesign name={"camerao"} size={24} color={"#000"} />
                                <Text style={globalStyel.globalTxt}>Upload Id</Text>
                            </TouchableOpacity>}
                    </View>
                    <Spacer space={20} />
                    {state.driverId != "" && <Custombutton title={"Submit"} onPress={() => _handleOnpress()} />}
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

const styles = StyleSheet.create({
    uploadCard: {
        height: 100, backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 4,
        alignItems: 'center', justifyContent: 'center'
    }
})