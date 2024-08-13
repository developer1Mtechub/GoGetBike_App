import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { globalStyel } from '../../../globalstyle'
import GlobaltabsHeaderText from '../../../../components/GlobaltabsHeaderText'
import CurrencyCard from './Components/Currency'
import HistoryCard from '../RideHistory/Component/HistoryCard'
import CustomBottomSheet from '../Home/Components/Custombottomsheet'
import Commontitle from '../../../../components/Commontitle'
import IconCom from '../../../../components/IconCom'
import Entypo from 'react-native-vector-icons/Entypo'
import InputField from '../../../../components/InputField'
import Custombutton from '../../../../components/Custombutton'
const Mywallet = () => {
  const walletRef = useRef();

  const renderContent = () => {
    return (
      <>
        <InputField label={'Add Ammount'}   />
        <Custombutton title={"Add"} onPress={() => walletRef.current.close()} />
      </>
    );
  }

  const _handleAddCards = () => {
    walletRef.current.open();
  }
  return (
    <View style={globalStyel.tabsContainer}>
      <View style={globalStyel.tabsinnerContainer}>
        <GlobaltabsHeaderText
          onPress={() => _handleAddCards()}
          title={"My Wallet"} add={true} />
        <View>
          <FlatList
            ListHeaderComponent={
              <View style={{ margin: 4, marginTop: 20 }}>
                <CurrencyCard title={"200"} />
              </View>
            }
            data={["1", "2", "3"]}
            renderItem={({ item }) => (
              <HistoryCard wallet={true} />
            )}
          />



        </View>
      </View>
      <CustomBottomSheet ref={walletRef} >
        <View>
          <View style={globalStyel.bikescontainerStyle}>
            <Text></Text>
            <Commontitle
              title={'Add Amount to Wallet'}
              customStyle={globalStyel.biikeTitleStyle}
            />
            <IconCom
              customStyle={globalStyel.iconStyle}
              onPress={() => walletRef.current.close()}
              icon={<Entypo name={"cross"} size={16} color={"#fff"} />}
            />
          </View>
          <View style={{ padding: 20 }}>
            {renderContent()}
          </View>
        </View>
      </CustomBottomSheet>
    </View>
  )
}

export default Mywallet

const styles = StyleSheet.create({})