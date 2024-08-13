import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyel } from '../../../globalstyle'
import { fonts } from '../../../../utils/fonts'
import Historybuttons from './Component/Historybuttons'
import HistoryCard from './Component/HistoryCard'
import { images } from '../../../../utils/constants'
import GlobaltabsHeaderText from '../../../../components/GlobaltabsHeaderText'

const History = ({ navigation }) => {
  const [state, setState] = useState({
    selectedIndex: 0,
    bikeDetails: {
      label: "Bike Details",
      value: "Economy",
      label2: "Bike Details",
      id: 'FBG3258T',
      model: 'SYM GTS200',
      value2: "Economy",
      bikeImage: images.bikeFront2,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
      iuNumber: "23456",
      iuText: "IU Number",
      location: '7 Clover Wy, Singapore 5790807 Clover Wy, Singapore 579080',
      price: '4',
      root: 'Road Tax'
    },
  })

  const _handleStatusPress = (index) => {
    setState(prevState => ({
      ...prevState,
      selectedIndex: index
    }))
  };
  const _handleCardPress = (result) => {
    if (result) {
      navigation.navigate("Bikedetails", {
        fromHistory: true,
        streamTitle: state.selectedIndex == 0 ? "Upcomming" : "Completed",
        response: state.bikeDetails
      })
    }
  }


  return (
    <View style={globalStyel.tabsContainer}>
      <View style={globalStyel.tabsinnerContainer}>
    <GlobaltabsHeaderText title={"My Rides"}/>
      <View style={styles.buttonContainer}>
        {["Upcoming", "Completed"].map((item, index) => (
          <Historybuttons
            key={index}
            cId={state.selectedIndex}
            index={index}
            onPress={_handleStatusPress}
            buttonTitle={item}
          />
        ))}
      </View>
      <View style={styles.cardContainer}>
        {state.selectedIndex === 0 ? <HistoryCard onPress={(responce) => _handleCardPress(responce)} /> :<HistoryCard onPress={(responce) => _handleCardPress(responce)} />}
      </View>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontFamily: fonts.MONTESERAT_SEMIBOLD,
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  cardContainer: {
    marginTop: 10,
  },
});

export default History;
