import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import CustomHeader from '../../../components/CustomHeader'
import { globalStyle } from '../../../utils/globalStyle'

const Code = ({ navigation }) => {
    const [state, setState] = useState({
        value: '',
        loading: false
    })


    const _handlePress = (res) => {
        if (res == "verify") {
            setState(prevState => ({
                ...prevState,
                loading: true
            }))
            setTimeout(() => {
                setState(prevState => ({
                    ...prevState,
                    loading: false
                }))
                navigation.navigate("Complete")

            }, 500);

        }

    }

    return (
        <View style={styles.container}>
            <CustomHeader navigation={navigation} />
            <View style={globalStyle.container}>
            <CustomCard
                imageSource={images.opticon}
                onPress={(type) => _handlePress(type)}
                title="Verification"
                description={`Enter a 4 digit number that \n was sent to + (1) 555 678 2810`}
                codeScreen={true}
                card={true}
                codeState={state.value}
                loading={state.loading}
                setValue={(value) => setState({ ...state, value })}

            />
            </View>
         

        </View>
    )
}

export default Code

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 12,
        justifyContent: 'center'
    },
})