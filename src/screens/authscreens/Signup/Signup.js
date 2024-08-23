import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useMemo } from 'react'
import { images } from '../../../utils/constants'
import CountryPicker from 'react-native-country-picker-modal';
import CustomHeader from '../../../components/CustomHeader';
import Wraper from '../../../components/Wraper';
import InputField from '../../../components/InputField';
import { fonts } from '../../../utils/fonts';
import CustomImage from '../../../components/CustomImage';
import Customtitle from '../../../components/Customtitle';
import Customdescription from '../../../components/Customdescription';
import Custombutton from '../../../components/Custombutton';
import { globalStyel } from '../../globalstyle';
import { getEmojiFlag } from '../../../utils/helpers';
import Spacer from '../../../components/Spacer';
import { verify_Phone } from '../../../utils/apis';
import { _handlePress, handleCodeSend, handleCountrySelect, onPhoneNumberChange } from '../../../utils/functions';

const Signup = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const [symbol, setSymbol] = useState("SG");
    const [phonenumber, setPhonenumber] = useState('');
    const [phonenumberErr, setPhonenumberErr] = useState('');
    const [code, setCode] = useState("65");
    const [loading, setLoading] = useState(false);

    const flagResult = useMemo(() => getEmojiFlag(symbol), [symbol]);
    const onPhoneChangeHandler = useCallback(onPhoneNumberChange(setPhonenumber, setPhonenumberErr), []);
    const onCountrySelectHandler = useCallback(handleCountrySelect(setSymbol, setCode, setShowPicker, setVisible), []);
    const onCodeSendHandler = useCallback(handleCodeSend(setLoading, phonenumber, verify_Phone, navigation, setPhonenumberErr), [phonenumber, navigation]);
    const onPressHandler = useCallback(_handlePress(setVisible, setShowPicker, navigation), [navigation]);

    return (
        <View style={globalStyel.container}>
            <CustomHeader navigation={navigation} />
            <View style={globalStyel.globalcontainer}>
                <View style={globalStyel.centerCOntent}>
                    <CustomImage source={images.reseticon} />
                    <Customtitle title={"Registration"} />
                    <Customdescription
                        customStyle={{ textAlign: 'center' }}
                        title={`Enter your mobile number to \n receive a verification code.`}
                    />
                </View>

                <Wraper>
                    <View style={styles.viewStyle}>
                        <TouchableOpacity onPress={() => onPressHandler("flag")} style={styles.headerRow}>
                            <Text style={{ fontSize: 26 }}>{flagResult}</Text>
                            <Text style={styles.countryNameTxt}>{`+ ${code}`}</Text>
                        </TouchableOpacity>
                        <InputField
                            keyboardType="number-pad"
                            value={phonenumber}
                            onChangeText={onPhoneChangeHandler}
                            inpStyle={styles.numberPad}
                        />
                    </View>
                    {phonenumberErr && <Customdescription title={phonenumberErr} customStyle={globalStyel.errorTxt} />}

                    <Spacer space={10} />
                    <Custombutton
                        loading={loading}
                        customstyle={{ width: '75%', alignSelf: 'center' }}
                        title={"Send Code"}
                        onPress={onCodeSendHandler}
                    />
                </Wraper>

                {showPicker && (
                    <CountryPicker
                        visible={visible}
                        withFilter
                        withFlag
                        withCountryNameButton
                        withCallingCode
                        withEmoji
                        onSelect={onCountrySelectHandler}
                        onClose={() => setVisible(false)}
                    />
                )}
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center'
    },
    viewStyle: {
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        borderColor: fonts.PRIMARY_COLOR,
        borderRadius: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 6,
    },
    numberPad: {
        width: 220,
        alignSelf: 'center',
        height: 50,
        borderBottomWidth: 0,
        marginLeft: 5,
    }
})