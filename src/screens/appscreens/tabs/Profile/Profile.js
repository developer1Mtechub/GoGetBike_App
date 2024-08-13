import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyel } from '../../../globalstyle'
import GlobaltabsHeaderText from '../../../../components/GlobaltabsHeaderText'
import ProfileCom from './Components/ProfileCom'
import ProfileItems from './Components/ProfileItems'
import { profileData } from '../../../../utils/data'
import Spacer from '../../../../components/Spacer'

const Profile = ({ navigation }) => {
  const _handleNaigations = (responce) => {
    if (responce == "Log Out") {
      navigation.navigate("AuthFiles")
    }

  }
  return (
    <View style={globalStyel.tabsContainer}>
      <View style={globalStyel.tabsinnerContainer}>
        <GlobaltabsHeaderText title={"My Profile"} />
        <View style={globalStyel.tabsinnerContainer}>
          <ProfileCom
            title={"Jameson Dunn"}
            subtitle={"jamesondunn@gmail.com"}
          />
          <Spacer space={30} />
          <View>
            {profileData.map((item, index) => (
              <View key={index}>
                <ProfileItems
                  onPress={(res) => _handleNaigations(res)}
                  item={item} />
              </View>
            ))}

          </View>
        </View>
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})