import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyel } from '../../../../globalstyle'
import TabsHeader from '../../../../../components/TabsHeader'
import GlobalAlert from '../../../../../components/GlobalAlert'
import Custombutton from '../../../../../components/Custombutton'
const AddLocation = ({ navigation }) => {
    const [state, setState] = useState({
        isModalvisible: false
    })
    const _handlePress = (values) => {
        if (values == "gotIt") {
            setState(prevState => ({
                ...prevState,
                isModalvisible: false
            }))
            navigation.navigate("SearchResult")
        }
    }

    return (
        <View style={globalStyel.tabsContainer}>
            <TabsHeader
                screeenHeading={"Add Location"}
                header={false}
                addloc={true}
                navigation={navigation}
                onPress={() => navigation.goBack()}
            />
            <View>

            </View>
            <View style={globalStyel.searchbutton}>
                <Custombutton
                    title={"Confirm"}
                    onPress={() => {
                        setState(prevState => ({
                            ...prevState,
                            isModalvisible: true
                        }))
                    }}
                />
            </View>
            <GlobalAlert
                type={"addlocation"}
                isModalvisible={state.isModalvisible}
                handleModal={(responce) => _handlePress(responce)}
            />
        </View>
    )
}

export default AddLocation

const styles = StyleSheet.create({})