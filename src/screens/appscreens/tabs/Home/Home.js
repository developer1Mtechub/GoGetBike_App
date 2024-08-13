import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabsHeader from '../../../../components/TabsHeader'
import { globalStyel } from '../../../globalstyle'
import Custombutton from '../../../../components/Custombutton'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Home = ({navigation}) => {
  return (
    <View style={globalStyel.tabsContainer}>
      <TabsHeader header={true} />
      <>
        <View style={globalStyel.globalcontainer}>

        </View>
      </>
      <View style={globalStyel.searchbutton}>
        <Custombutton
          startIcon={<AntDesign name={"search1"} size={24} color={"#fff"} />}
          title={"Search Ride"}
          onPress={()=>navigation.navigate("SearchRide")}
        />
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

})