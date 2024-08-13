import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/CustomHeader'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import { onSelect } from '../../../utils/commonUtils'
import CountryPicker from 'react-native-country-picker-modal';
import { globalStyle } from '../../../utils/globalStyle'

const Login = ({ navigation }) => {
  const [state, setState] = useState({
    visible: false,
    showPicker: false,
    country: null,
    symbol: "SG",
    code: "65",
    loading: false
  })

  const _handlePress = (resp) => {
    if (resp === "flag") {
      openCountryPicker();
    } else {
      setState(prevState => ({
        ...prevState,
        loading: true
      }))
      setTimeout(() => {
        setState(prevState => ({
          ...prevState,
          loading: false
        }))
        navigation.navigate("Code")
      }, 500);
    }
  }

  const handleSelectCountry = (country) => {
    onSelect(country, setState, (newState) => {
      console.log("Updated State:", newState);
    });
  };
  const openCountryPicker = () => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
      showPicker: true
    }));
  };
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} />
      <View style={globalStyle.container}>
        <CustomCard
          imageSource={images.reseticon}
          onPress={(type) => _handlePress(type)}
          title="Login In"
          description={`Enter your mobile number to \n receive a verification code.`}
          card={true}
          countryName={state.country}
          countryCode={state.code}
          symbol={state.symbol}
          registration={true}
          loading={state.loading}
        />
      </View>

      {state.showPicker && <CountryPicker
        visible={state.visible}
        withFilter
        withFlag
        withCountryNameButton
        withCallingCode
        withEmoji
        onSelect={handleSelectCountry}
        onClose={() => setState((prevState) => ({ ...prevState, visible: false }))}
      />}
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})