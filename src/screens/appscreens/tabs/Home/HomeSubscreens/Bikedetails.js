import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { globalStyel } from '../../../../globalstyle'
import TabsHeader from '../../../../../components/TabsHeader'
import CustomImage from '../../../../../components/CustomImage'
import { fonts } from '../../../../../utils/fonts'
import IconsText from '../Components/IconsText'
import { images } from '../../../../../utils/constants'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Custombutton from '../../../../../components/Custombutton'
import BikedetailsComp from '../Components/BikedetailsComp'
import InputField from '../../../../../components/InputField'
import IconCom from '../../../../../components/IconCom'
import Commontitle from '../../../../../components/Commontitle'
import CustomBottomSheet from '../Components/Custombottomsheet'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomCard from '../../../../../components/CustomCard'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { _globalImagePicker } from '../../../../../components/ImagePicker'
import StarRating from 'react-native-star-rating-widget';
import GlobalAlert from '../../../../../components/GlobalAlert'

const Bikedetails = ({ navigation, route }) => {
    const response = route.params.response;
    const fromHistory = route.params.fromHistory;
    const streamTitle = route.params.streamTitle;
    const reportRef = useRef();
    const [state, setState] = useState({
        addcomment: '',
        checkType: '',
        attachement: [],
        rating: 0,
        rateModal: false
    })
    const _handleRidecompletedPress = (result) => {
        if (result == "issue") {
            setState(prevState => ({
                ...prevState,
                checkType: "issue"
            }))
            reportRef.current.open();
        } else {
            setState(prevState => ({
                ...prevState,
                checkType: "rate"
            }))
            reportRef.current.open();

        }

    }

    const _handleOnpress = (responce) => {
        if (responce == "selfie") {
            handleImagePicker("camera")
        }
    }

    const handleImageSelected = (image) => {
        if (image) {
            setState(prevState => ({
                ...prevState,
                attachement: [...prevState.attachement, image.path]
            }))

        }
    };

    const handleImagePicker = (type) => {
        _globalImagePicker(type, handleImageSelected);
    };
    const handleDelete = (index) => {
        const newAttachments = state.attachement.filter((item, i) => i !== index);
        setState(prevState => ({
            ...prevState,
            attachement: newAttachments
        }))
    };

    const renderIssueContent = () => {
        return (
            <>
                <InputField
                    label={'Add Comment'}
                    onChangeText={(txt) =>
                        setState((prevState) => ({
                            ...prevState,
                            addcomment: txt,
                        }))
                    }
                    value={state.addcomment}
                />

                <View style={styles.imagesCard}>
                    {state.attachement.map((item, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <CustomImage source={item} style={styles.image} />
                            <TouchableOpacity
                                onPress={() => handleDelete(index)}
                                style={styles.deleteButton}
                            >
                                <Entypo name={'cross'} size={24} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                    ))}
                    <TouchableOpacity
                        onPress={() => _handleOnpress('selfie')}
                        style={styles.card}
                    >
                        <AntDesign name={'camerao'} size={20} color={'#000'} />
                        <Text style={{ fontFamily: fonts.MONTESERAT_SEMIBOLD, color: '#000' }}>
                            Open attachment
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }

    const renderRateContent = () => {
        return (
            <View style={{ alignSelf: 'center', paddingVertical: 16 }}>
                <StarRating
                    rating={state.rating}
                    starSize={40}
                    onChange={(res) => {
                        setState(prevState => ({
                            ...prevState,
                            rating: res
                        }))
                    }}
                />
                <View style={{ marginTop: 20 }}>
                    <Custombutton title={'ADD'} onPress={() => {
                        reportRef.current.close()
                        setState(prevState => ({
                            ...prevState,
                            rateModal: true,

                        }))
                        setTimeout(() => {
                            setState(prevState => ({
                                ...prevState,
                                rateModal: false,
    
                            }))
                        }, 2000);
                    }} />
                </View>
            </View>
        );
    };
    const renderContent = () => {
        switch (state.checkType) {
            case 'issue':
                return renderIssueContent();
            case 'rate':
                return renderRateContent();
            default:
                return null;
        }
    };

    return (
        <View style={globalStyel.tabsContainer}>
            <TabsHeader
                screeenHeading={"Bike Details"}
                header={false}
                addloc={true}
                fromHistory={fromHistory}
                streamTitle={streamTitle}
                navigation={navigation}
                onPress={() => navigation.goBack()}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <BikedetailsComp
                    response={response}
                    fromHistory={fromHistory}
                    streamTitle={streamTitle}
                    onPress={(responce) => _handleRidecompletedPress(responce)}
                />
            </ScrollView>

            <CustomBottomSheet ref={reportRef} >
                <View>
                    <View style={globalStyel.bikescontainerStyle}>
                        <Text></Text>
                        <Commontitle
                            title={state.checkType == "issue" ? "Briefly tell us the issue" : 'Rate Bike'}
                            customStyle={globalStyel.biikeTitleStyle}
                        />
                        <IconCom
                            customStyle={globalStyel.iconStyle}
                            onPress={() => reportRef.current.close()}
                            icon={<Entypo name={"cross"} size={16} color={"#fff"} />}
                        />
                    </View>
                    <View style={{ padding: 20 }}>
                        {renderContent()}
                    </View>
                </View>
            </CustomBottomSheet>
            <GlobalAlert
                isModalvisible={state.rateModal}
                type={"rideRate"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        elevation: 10,
        borderRadius: 10,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        width: "45%",
        zIndex: 99,
        backgroundColor: 'white',
    },
    deleteButton: {
        backgroundColor: 'red',
        position: 'absolute',
        alignSelf: 'flex-end',
        borderRadius: 20

    },
    crossView: {
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: 'red',
        borderRadius: 20
    },
    image: {
        height: 80,
        borderRadius: 10,
        width: 120
    },
    imagesCard: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap'
    }
})
export default Bikedetails

