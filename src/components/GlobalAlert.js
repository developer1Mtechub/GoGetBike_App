import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import Custombutton from './Custombutton'
import { fonts } from '../utils/fonts'
import CustomImage from './CustomImage'
import { images } from '../utils/constants'
import Customtitle from './Customtitle'
import Customdescription from './Customdescription'
const GlobalAlert = (props) => {
    const renderModalContent = () => {
        switch (props.type) {
            case "addlocation":
                return (
                    <View style={styles.modalsubContainer}>
                        <CustomImage source={images.warning} style={{ height: 70, width: 70, resizeMode: "contain" }} />
                        <Text style={styles.titleTxt}>Sorry, We are not operating in this location</Text>
                        <Custombutton onPress={() => props.handleModal("gotIt")} title={"I Got It"} customstyle={{ width: '70%', marginVertical: 12 }} />
                    </View>
                );

            case "searchResultScreen":
                return (
                    <View style={styles.modalsubContainer}>
                        <CustomImage source={images.warning} style={{ height: 70, width: 70, resizeMode: "contain" }} />
                        <Text style={styles.titleTxt}>Are you sure you want to book this bike?</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Custombutton onPress={() => props.handleModal("no")} title={"No"} customstyle={{ width: '45%' }} />
                            <Custombutton onPress={() => props.handleModal("yes")} title={"Yes"} customTilestyle={{ color: fonts.PRIMARY_COLOR }} customstyle={styles.yesButton} />
                        </View>
                    </View>
                );
            case "uploadedSuccessfuly":
                return (
                    <View style={styles.modalsubContainer}>
                        <CustomImage source={images.warning} style={{ height: 70, width: 70, resizeMode: "contain" }} />
                        <Text style={styles.titleTxt}>Manual Registration will be verified within 3-5 working days.</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Custombutton onPress={() => props.handleModal("no")} title={"No"} customstyle={{ width: '45%' }} />
                                <Custombutton onPress={() => props.handleModal("yes")} title={"Yes"} customTilestyle={{ color: fonts.PRIMARY_COLOR }} customstyle={styles.yesButton} /> */}
                        </View>
                    </View>
                );
            case "rideRate":
                return (
                    <View style={styles.modalsubContainer}>
                        <CustomImage source={images.warning} style={{ height: 70, width: 70, resizeMode: "contain" }} />
                        <Text style={styles.titleTxt}>{`Review Submitted \nTo Admin`}</Text>
                    </View>
                );
            case "lowBalance":
                return (
                    <View style={styles.modalsubContainer}>
                        <CustomImage source={images.warning} style={{ height: 70, width: 70, resizeMode: "contain" }} />
                        <Customtitle title={"Security Deposit"} />
                        <Customdescription 
                        customStyle={{
                            fontFamily:fonts.MONTESERAT_SEMIBOLD,
                            paddingVertical:4
                        }}
                        title={"An amount of 20$ as a \n  security is required"} />
                        <Custombutton
                        onPress={()=>props.onPress("balance")}
                        title={"Continue"} customstyle={{
                            height: 40,
                            width: '50%',
                            marginTop:10

                        }} />
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <Modal
            transparent={true}
            visible={props.isModalvisible}>
            <View style={styles.modalContainer}>
                {renderModalContent()}
            </View>
        </Modal>
    );
};


export default GlobalAlert

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        padding: 16
    },
    yesButton: {
        width: '45%',
        marginLeft: 12,
        backgroundColor: null,
        borderWidth: 1,
        borderColor: fonts.PRIMARY_COLOR

    },
    modalsubContainer: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 30,
        alignItems: 'center'
    },
    titleTxt: {
        fontFamily: fonts.MONTESERAT_BOLD,
        color: '#000',
        paddingVertical: 10,
        fontSize: 18,
        textAlign: 'center'
    }
})