import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback } from 'react'
import { images } from '../../../utils/constants'
import CustomHeader from '../../../components/CustomHeader'
import { verify_Code } from '../../../utils/apis'
import { globalStyel } from '../../globalstyle'
import CustomImage from '../../../components/CustomImage'
import Customtitle from '../../../components/Customtitle'
import Customdescription from '../../../components/Customdescription'
import Wraper from '../../../components/Wraper'
import Custombutton from '../../../components/Custombutton'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import Spacer from '../../../components/Spacer'
import { handleVerify } from '../../../utils/functions'

const CELL_COUNT = 4;

const Code = ({ navigation, route }) => {
    const { fromLogin, otP, phoneNumber } = route.params;
    console.log("Check Otp", otP);

    // const [state, setState] = useState({
    //     loading: false,
    // });
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState('');
    const [valueErr, setValueErr] = useState('');


    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const handleVerifyHandler = useCallback(
        handleVerify(setLoading, phoneNumber, value, verify_Code, fromLogin, navigation, setValueErr),
        [fromLogin, phoneNumber, value, navigation]
    );
    return (
        <View style={globalStyel.container}>
            <CustomHeader navigation={navigation} />
            <View style={globalStyel.globalcontainer}>
                <View style={globalStyel.centerCOntent}>
                    <CustomImage source={images.reseticon} />
                    <Customtitle title="Verification" />
                    <Customdescription
                        customStyle={styles.description}
                        title={`Enter a 4 digit number that \n was sent to +${phoneNumber}`}
                    />
                </View>
                <Wraper>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={(txt)=>{
                            setValue(txt)
                            setValueErr("")
                        }}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler ? getCellOnLayoutHandler(index) : undefined}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                    {valueErr && <Customdescription title={valueErr} customStyle={globalStyel.errorTxt} />}
                    <Spacer space={15} />
                    <Custombutton
                        loading={loading}
                        customstyle={styles.customButtonStyle}
                        title="Verify"
                        onPress={handleVerifyHandler}
                    />
                </Wraper>
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
    customButtonStyle: {
        width: '75%',
        alignSelf: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginHorizontal: 20,
    },
    cell: {
        width: 40,
        height: 40,
        fontSize: 24,
        borderBottomWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
})