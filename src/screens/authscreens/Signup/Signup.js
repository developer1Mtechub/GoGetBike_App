import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import CountryPicker from 'react-native-country-picker-modal';
import CustomHeader from '../../../components/CustomHeader';

const Signup = ({ navigation }) => {
    const [state, setState] = useState({
        visible: false,
        showPicker: false,
        country: null,
        symbol: "SG",
        code: "65"
    })
    const onSelect = (country) => {
        setState(prevState => ({
            ...prevState,
            country: country.name,
            symbol: country.cca2,
            code: country.callingCode[0],
            showPicker: false,
            visible: false
        }));
    }

    const _handlePress = (res) => {
        if (res == "flag") {
            openCountryPicker();
        } else {
            navigation.navigate("Code")
        }

    }
    const openCountryPicker = () => {
        setState((prevState) => ({
            ...prevState,
            visible: true,
            showPicker: true
        }));
    };

    return (
        <View style={styles.container}>
            <CustomHeader navigation={navigation}/>
            <CustomCard
                imageSource={images.reseticon}
                onPress={(type) => _handlePress(type)}
                title="Registration"
                description={`Enter your mobile number to \n receive a verification code.`}
                card={true}
                countryName={state.country}
                countryCode={state.code}
                symbol={state.symbol}
                registration={true}

            />
            {state.showPicker && <CountryPicker
                visible={state.visible}
                withFilter
                withFlag
                withCountryNameButton
                withCallingCode
                withEmoji
                onSelect={onSelect}
                onClose={() => setState((prevState) => ({ ...prevState, visible: false }))}
            />}
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
})