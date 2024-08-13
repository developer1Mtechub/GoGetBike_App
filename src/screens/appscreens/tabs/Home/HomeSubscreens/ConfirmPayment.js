import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { globalStyel } from '../../../../globalstyle'
import TabsHeader from '../../../../../components/TabsHeader'
import DetailCard from '../Components/DetailCard'
import CustomBottomSheet from '../Components/Custombottomsheet'
import IconCom from '../../../../../components/IconCom'
import Commontitle from '../../../../../components/Commontitle'
import Entypo from 'react-native-vector-icons/Entypo'
import InputField from '../../../../../components/InputField'
import Custombutton from '../../../../../components/Custombutton'
import { formatCardNumber, formatExpiryDate } from '../../../../../utils/commonUtils'
import { fonts } from '../../../../../utils/fonts'
const ConfirmPayment = ({ navigation, route }) => {
    const [state, setState] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvC: '',
        isValidExpiryDate: true
    })
    const paymentRef = useRef();
    const bikeDetails = route?.params?.bikeDetails;
    const timings = route?.params?.timings
    const _handleAddCard = (response) => {
        paymentRef.current.open();

    }
    const handleCardChange = (text, type) => {
        let formattedText = text;
        switch (type) {
            case 'cardNumber':
                formattedText = formatCardNumber(text);
                setState(prevState => ({
                    ...prevState,
                    cardNumber: formattedText
                }));
                break;
            case 'expiryDate':
                const { formattedValue, isValid } = formatExpiryDate(text);
                setState(prevState => ({
                    ...prevState,
                    isValidExpiryDate: isValid,
                    expiryDate: formattedValue
                }));
                break;
            default:
                break;
        }
    };



    return (
        <View style={globalStyel.tabsContainer}>
            <TabsHeader
                screeenHeading={"Confirm Payment"}
                header={false}
                addloc={true}
                navigation={navigation}
                onPress={() => navigation.goBack()}
            />
            <View>
                <DetailCard
                    bikeDetails={bikeDetails}
                    fromConfirmPayment={true}
                    onConfirm={(res) => _handleAddCard(res)}
                    confirmDate={timings.premiumDate}
                    startTime={timings.startTime}
                    endTime={timings.endTime}

                />
            </View>
            <CustomBottomSheet
                ref={paymentRef}
            // handlClose={() => _handleClose()}
            >
                <View>
                    <View style={styles.bikescontainerStyle}>
                        <Text></Text>
                        <Commontitle
                            title={"Add New Card"}
                            customStyle={styles.biikeTitleStyle}
                        />
                        <IconCom
                            customStyle={styles.iconStyle}
                            onPress={() => paymentRef.current.close()}
                            icon={<Entypo name={"cross"} size={16} color={"#fff"} />}
                        />
                    </View>
                    <View style={{ padding: 20 }}>
                        <InputField
                            label={"Name on Card"}
                            onChangeText={(txt) => setState(prevState => ({
                                ...prevState,
                                cardholderName: txt
                            }))}
                            value={state.cardholderName}
                        />
                        <InputField
                            label={"Card Number"}
                            onChangeText={(text) => handleCardChange(text, 'cardNumber')}
                            value={state.cardNumber}
                            keyboardType={"number-pad"}

                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <InputField
                                    label={"Expiry Date"}
                                    onChangeText={(text) => handleCardChange(text, 'expiryDate')}
                                    value={state.expiryDate}
                                    inpStyle={{ width: 120, borderBottomColor: state.isValidExpiryDate == false ? 'red' : "lightgrey" }}

                                />
                                {state.isValidExpiryDate == false && <Text style={styles.expiryErrorTxt}>Enter a valid Expiry date</Text>}
                            </View>
                            <InputField
                                label={"CVC"}
                                onChangeText={(txt) => setState(prevState => ({
                                    ...prevState,
                                    cvC: txt
                                }))}
                                value={state.cvC}
                                inpStyle={{ width: 120 }}

                            />
                        </View>

                        <Custombutton title={"Add"} />
                    </View>


                </View>

            </CustomBottomSheet>
        </View>
    )
}

export default ConfirmPayment

const styles = StyleSheet.create({
    bikescontainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",

    },
    biikeTitleStyle: {
        fontSize: 14
    },
    iconStyle: {
        height: 25,
        width: 25
    },
    expiryErrorTxt: {
        bottom: 10,
        fontFamily: fonts.MONTESERAT_REGULAR,
        color: 'red'
    }
})