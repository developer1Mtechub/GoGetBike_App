import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomImage from './CustomImage';
import Custombutton from './Custombutton';
import { fonts } from '../utils/fonts';
import Commontitle from './Commontitle';
import CommonSubtxt from './CommonsubTxt';
import FieldCard from './FieldCard';
const CustomCard = (props) => {
    return (
        <>
            {props.titleSubtitle ?
                <>
                    <View style={styles.headeView}>
                        <Commontitle title={props.title} customStyle={props.titleStyle} />
                        <CommonSubtxt subtxt={props.description} customStyle={props.desStyle}/>
                        <View style={{ width: "100%", marginTop: 20 }}>
                            <FieldCard
                                completeProfile={props.completeProfile}
                                onPress={(res) => props.onPress(res)}
                                onPressDB={(res)=>props.onPressDB(res)}
                                tellmore={props.tellmore}
                                fronPhoto={props.fronPhoto}
                                backPhoto={props.backPhoto}
                                uploadDrive={props.uploadDrive}
                                buttonTitle={props.titleSubtitle ? "Submit" : ""}
                                loading={props.loading}
                            />
                        </View>

                    </View>

                </> :
                <View style={{ flex: 1 }}>
                    <View style={{ flex: !props.completeProfile ? 2 :props.takeselfie ? 0 : 1, 
                        alignItems: 'center', justifyContent: 'center' }}>
                        {!props.completeProfile && <CustomImage source={props.imageSource} />}
                    </View>
                    <View style={{
                        flex: props.completeProfile ? 2.5 : 1,
                        alignItems: 'center'
                    }}>
                        {props.completeProfile && <CustomImage source={props.imageSource} style={{ height: 100, width: 100 }} />}
                        <Commontitle title={props.title} />
                        <CommonSubtxt subtxt={props.description} />
                        {props.card &&
                            <View style={{ width: '100%', marginTop: 20 }}>
                                <FieldCard
                                    codeScreen={props.codeScreen}
                                    codeState={props.codeState}
                                    countryName={props.countryName}
                                    contryCode={props.countryCode}
                                    symbol={props.symbol}
                                    registration={props.registration}
                                    identity={props.identity}
                                    completeProfile={props.completeProfile}
                                    manual={props.manual}
                                    imagePath={props.imagePath}
                                    selfie={props.takeselfie}
                                    selefieState={props.selefieState}
                                    onPress={(res) => props.onPress(res)}
                                    buttonTitle={props.codeScreen ? "Verify" : props.completeProfile ? "Continue" : "Send Code"}
                                    loading={props.loading}
                                />
                            </View>
                        }
                    </View>
                    <View style={{ flex: 1 }}>
                        {props.button1Title &&
                            <Custombutton
                                onPress={() => props.onPress("Create")}
                                title={props.button1Title}
                                loading={props.loading}
                                customstyle={props.button1Style}
                            />
                            }

                        {props.button2Title && <Custombutton
                            title={props.button2Title}
                            onPress={() => props.onPress("Login")}
                            customstyle={props.button2Style}
                            customTilestyle={props.button2TitleStyle}
                        />}
                    </View>
                </View>

            }

        </>

    );
};

const styles = StyleSheet.create({
    subcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 20,
    },
    textViewStyle: {
        justifyContent: "flex-end",
        alignItems: 'center',
        flex: 1,


    },
    headeView: {
        alignItems: 'center'
    },
    buttView: {
        paddingTop: 20,
        width: '100%'

    },

    txt: {
        fontSize: 24,
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        marginVertical: 10,
    },
    Acccreatetxt: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: fonts.MONTESERAT_REGULAR,
        marginVertical: 10,
        paddingHorizontal: 20,
    },
});

export default CustomCard;
