import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import TabsHeader from '../../../../components/TabsHeader'
import { globalStyel } from '../../../globalstyle'
import Custombutton from '../../../../components/Custombutton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import GlobalAlert from '../../../../components/GlobalAlert'
import { fonts } from '../../../../utils/fonts'
const Home = ({ navigation }) => {
  const [state, setState] = useState({
    isModalvisible: true
  })

  const handleModalClick = (res) => {
    if (res == "balance") {
      setState((prevState) => ({
        ...prevState,
        isModalvisible: false
      }))
    }

  }
  return (
    <View style={globalStyel.tabsContainer}>
      <TabsHeader header={true} />
      <>
        <View style={globalStyel.globalcontainer}>
        </View>
      </>
      <View style={globalStyel.searchbutton}>

        <View style={styles.buttonsView}>
          <Custombutton customstyle={{ width: '30%', height: 35 }}
            customTilestyle={{ fontSize: 16 }}
            title={"Economy"} />
          <Custombutton customstyle={styles.premiumButton} title={"Premium"}
            customTilestyle={styles.titleTxt}
          />

        </View>

        {/* <Custombutton
          startIcon={<AntDesign name={"search1"} size={24} color={"#fff"} />}
          title={"Search Ride"}
          onPress={() => navigation.navigate("SearchRide")}
        /> */}
      </View>
      <GlobalAlert
        type={"lowBalance"}
        isModalvisible={state.isModalvisible}
        onPress={(resp) => handleModalClick(resp)}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  buttonsView: {
    backgroundColor: '#fff',
    elevation: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  titleTxt: {
    color: '#000',
    fontSize: 16
  },
  premiumButton: {
    width: '30%', height: 35,
    backgroundColor: null,
    borderWidth: 1,
    borderColor: fonts.LiGHTGREY,
    marginLeft: 10
  }

})