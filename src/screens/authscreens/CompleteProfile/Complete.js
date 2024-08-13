import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import { globalStyel } from '../../globalstyle'
import CustomHeader from '../../../components/CustomHeader'

const Complete = ({ navigation }) => {
    const [state, setState] = useState({
        value: '',
        loading: false

    })


    const _handlePress = (res) => {
        if (res == "complete") {
            setState((prevState => ({
                ...prevState,
                loading: true
            })))
            setTimeout(() => {
                setState((prevState => ({
                    ...prevState,
                    loading: false
                })))
                navigation.navigate("Idenitity")
            }, 500);

        }

    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1,backgroundColor:'#fff' }}
            showsVerticalScrollIndicator={false}>
                  <CustomHeader navigation={navigation} />
            <View style={globalStyel.globalcontainer}>
              
                <CustomCard
                    imageSource={images.user}
                    onPress={(type) => _handlePress(type)}
                    title="Complete Profile"
                    description={`Please let us know \n more About your self`}
                    completeProfile={true}
                    card={true}
                    loading={state.loading}

                />



            </View>
        </ScrollView>
    )
}

export default Complete
