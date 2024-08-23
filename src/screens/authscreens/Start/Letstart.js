import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Custombutton from '../../../components/Custombutton'
import { fonts } from '../../../utils/fonts'
import { images } from '../../../utils/constants'
import CustomImage from '../../../components/CustomImage'
import CustomCard from '../../../components/CustomCard'

const Letstart = ({ navigation }) => {
  const _handlePress = (resp) => {
    if (resp == "Create") {
      navigation.navigate("Registration")
      // navigation.navigate("Tabs")
    }else{
      navigation.navigate("Login")
    }
  }
  return (
    <View style={styles.container}>
      <CustomCard
        imageSource={images.letsicon}
        onPress={(type) => _handlePress(type)}
        title="Let's Get Started"
        description="Create your account to access a wide range of bikes and begin your adventure!"
        button1Title="CREATE AN ACCOUNT"
        button1Style={{
          width: '90%',
          alignSelf:'center',

        }}
        button2Title="LOGIN"
        button2Style={styles.loginButton}
        button2TitleStyle={{
          color: fonts.PRIMARY_COLOR,
        }}
      />
    </View>
  )
}

export default Letstart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: null,
    borderWidth: 1,
    alignSelf:'center',
    width: '90%',
    borderColor: fonts.PRIMARY_COLOR
  },
  subcontainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  txt: {
    fontFamily: fonts.MONTESERAT_SEMIBOLD,
    fontSize: 16,
  },
  Acccreatetxt: {
    fontFamily: fonts.MONTESERAT_REGULAR,
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 12
  },
})