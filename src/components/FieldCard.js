
const CELL_COUNT = 4;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import Custombutton from './Custombutton';
import { getEmojiFlag } from '../utils/helpers';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { fonts } from '../utils/fonts';
import InputField from './InputField';
import CustomImage from './CustomImage';
import { images } from '../utils/constants';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import CameraButton from './CameraButton';
import Commontitle from './Commontitle';
import Entypo from 'react-native-vector-icons/Entypo'


const Code = ({ ...props }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props2, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View>
            <View>
                <CodeField
                    ref={ref}
                    {...props2}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}
                        >
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <Custombutton
                    title={props.buttonTitle}
                    loading={props.loading}
                    onPress={() => props.onPress(props.codeScreen ? 'verify' : props.completeProfile ? 'complete' : 'sendcode')}
                    customstyle={{ width: props.codeScreen ? '70%' : '100%', alignSelf: 'center', marginTop: 20 }}
                />
            </View>
        </View>
    );
};

const CompleteProfileForm = (props) => {
    return (
        <>
            {props.tellmore ?
                <Formik
                    initialValues={{ fullName: '', email: '', dob: '' }}
                    onSubmit={(values) => props.handleLogin(values)}
                    validationSchema={props.completeProfileValidationSchema}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <View style={{ paddingHorizontal: 10 }}>
                            <InputField
                                label="Full Name as per NRIC"
                                onChangeText={(text) => handleChange('fullName')(text)}
                                value={values.fullName}
                                autoCapitalize="none"
                            />
                            <InputField
                                label="Full Address"
                                onChangeText={(text) => handleChange('email')(text)}
                                value={values.email}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                            <InputField
                                label="NRIC No."
                                onChangeText={(text) => handleChange('dob')(text)}
                                value={values.dob}
                                autoCapitalize="none"
                                keyboardType="number-pad"
                            />
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                {props.backPhoto ?
                                    <>
                                        <View>
                                            <CustomImage source={props.backPhoto} style={{ height: 90, width: 120, borderRadius: 20 }} />
                                            <TouchableOpacity onPress={()=>props.onPress("clearBackphoto")}  style={styles.crosView}>
                                            <Entypo name={"cross"} size={18} color={"#fff"}/>
                                            </TouchableOpacity>
                                        </View>

                                    </>
                                    : 
                                    <CameraButton
                                        customStyle={{
                                            backgroundColor: '#fff',
                                            elevation: 2,
                                            margin: 4,
                                            padding: 10, borderRadius: 10
                                        }}
                                        onPress={() => props.onPress("frontPic")}
                                        title={"Front ID Photo"}
                                    />}
                                {props.fronPhoto ?
                                    <View>
                                        <CustomImage source={props.fronPhoto} style={{ height: 90, width: 120, marginLeft: 10, borderRadius: 20 }} />
                                        <TouchableOpacity onPress={()=>props.onPress("clearFrontphoto")} style={styles.crosView}>
                                        <Entypo name={"cross"} size={18} color={"#fff"}/>
                                        </TouchableOpacity>
                                    </View>

                                    : <CameraButton
                                        customStyle={{
                                            backgroundColor: '#fff',
                                            elevation: 2,
                                            margin: 4,
                                            padding: 10, borderRadius: 10
                                        }}
                                        onPress={() => props.onPress("backPic")}
                                        title={"Back ID Photo"}
                                    />}
                            </View>

                            <Custombutton
                                title={props.buttonTitle}
                                onPress={() => props.onPress('tellmore')}
                                customstyle={{ width: props.tellmore ? "80%" : '100%', alignSelf: 'center', marginTop: 20 }}
                            />
                        </View>
                    )}
                </Formik> :
                <Formik
                    initialValues={{ fullName: '', email: '', dob: '' }}
                    onSubmit={(values) => props.handleLogin(values)}
                    validationSchema={props.completeProfileValidationSchema}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <View style={{ paddingHorizontal: 10 }}>
                            <InputField
                                label="Full Name"
                                onChangeText={(text) => handleChange('fullName')(text)}
                                value={values.fullName}
                                autoCapitalize="none"
                            />
                            <InputField
                                label="Email"
                                onChangeText={(text) => handleChange('email')(text)}
                                value={values.email}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                            <InputField
                                label="Date of Birth"
                                onChangeText={(text) => handleChange('dob')(text)}
                                value={values.dob}
                                autoCapitalize="none"
                                keyboardType="number-pad"
                            />
                            <Custombutton
                                title={props.buttonTitle}
                                loading={props.loading}
                                onPress={() => props.onPress(props.codeScreen ? 'verify' : props.completeProfile ? 'complete' : 'sendcode')}
                                customstyle={{ width: props.codeScreen ? '70%' : props.completeProfile ? "80%" : '100%', alignSelf: 'center', marginTop: 20 }}
                            />
                        </View>
                    )}
                </Formik>
            }

        </>

    );
};
const IdentityFy = (props) => {
    return (
        <>
            <TouchableOpacity onPress={() => props.onPress(props.item)}>
                <View style={styles.cardStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        {props.item == "manual" ?
                            <CustomImage source={images.manualCard} style={{ height: 70, width: 70 }} />
                            : <View style={styles.countryCard}>
                                <Text style={[styles.heading, { fontSize: 12, color: '#fff' }]}>SingPass</Text>
                            </View>}
                        <View style={{ paddingLeft: 10, flex: 1 }}>
                            <Text style={styles.heading}>{props.item == "manual" ? "Manual Verifcation" : "SingPass Verification"}</Text>
                            <Text style={[styles.subheading, { fontFamily: fonts.MONTESERAT_REGULAR, fontSize: 13, color: '#979797' }]}>{props.item == "manual" ? "required Passport for non citizens" : "ID or driver's iscence For Citizens of the Country mainly."}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};
const ManualVerification = (props) => {
    return (
        <>
            <TouchableOpacity onPress={() => props.onPress(props.item)}>
                <View style={[styles.cardStyle, { alignItems: 'center', justifyContent: 'center' }]}>
                    <View style={styles.card2}>
                        {props.item == "camera" ?
                            <AntDesign name={"camerao"} size={24} color={"#000"} />
                            : <Feather name={"image"} size={24} color={"#000"} />
                        }
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={styles.subheading}>{props.item == "camera" ? "Capture from camera" : "Upload From Gallery"}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};
const SelfieSection = (props) => {
    return (
        <>
            {props.selefieState ?
                <>
                    <View style={{
                        height: 100,
                        alignSelf: 'center',
                        width: 100,
                        borderRadius: 80,
                        bottom: 10,
                        elevation: 2,
                        backgroundColor: '#fff'
                    }}>
                        <CustomImage source={props.imagePath} style={{ height: 100, width: 100, borderRadius: 50 }} />
                    </View>
                    <TouchableOpacity onPress={() => props.onPress("selfie")} style={styles.changeImageView}>
                        <Commontitle title={"change"} customStyle={{ fontSize: 14, textAlign: 'center' }} />
                    </TouchableOpacity>
                    <Custombutton
                        onPress={() => props.onPress("selfiedone")}
                        title={"Continue"} customstyle={{
                            width: '70%',
                            marginTop: 20,
                            alignSelf: 'center'
                        }} />
                </>


                :
                <CameraButton
                    onPress={() => props.onPress(props.item)}
                    title={"Open Camera"}
                />
            }


        </>
    );
};

const FileCard = (props) => {
    const flagResult = getEmojiFlag(props.symbol)
    return (
        <>
            {props.identity && (
                <>
                    {['singpass', 'manual'].map((item, index) => (
                        <>

                            <View key={index} style={[styles.identificatiocard, {
                                marginTop: index == "manual" ? 10 : 0,
                                backgroundColor: "#fff"
                            }]}>
                                <IdentityFy {...props} item={item} />
                            </View>
                            {index === 0 && (
                                <Text style={{ textAlign: 'center', fontFamily: fonts.MONTESERAT_SEMIBOLD, marginVertical: 4, color: '#000' }}>OR</Text>
                            )}
                        </>
                    ))}
                </>

            )}
            {props.manual && (
                <>
                    {['camera', 'galery'].map((item, index) => (
                        <>

                            <View key={index} style={[styles.identificatiocard, {
                                marginTop: index == "1" ? 10 : 0,
                                backgroundColor: "#fff"
                            }]}>
                                <ManualVerification {...props} item={item} />
                            </View>

                        </>
                    ))}
                </>

            )}

            {props.selfie && (
                <>
                    {['selfie'].map((item, index) => (
                        <>

                            <View key={index}>
                                <SelfieSection {...props} item={item} />
                            </View>

                        </>
                    ))}
                </>

            )}
            {!props.identity && !props.manual && !props.selfie && !props.uploadDrive && <View style={styles.container}>
                {props.codeScreen ? (
                    <Code ref={props.ref} {...props} />
                ) : props.completeProfile ? (
                    <CompleteProfileForm {...props} />
                ) :
                    (
                        <>
                            <View style={styles.viewStyle}>
                                <TouchableOpacity onPress={() => props.onPress('flag')} style={styles.headerRow}>
                                    <Text style={{ fontSize: 26 }}>{flagResult}</Text>
                                    <Text style={styles.countryNameTxt}>{`+ ${props.contryCode}`}</Text>
                                </TouchableOpacity>
                                <InputField
                                    keyboardType="number-pad"
                                    inpStyle={{
                                        width: 220,
                                        alignSelf: 'center',
                                        height: 50,
                                        borderBottomWidth: 0,
                                        marginLeft: 5
                                    }}
                                />
                            </View>
                            <Custombutton
                               loading={props.loading}
                                onPress={() => props.onPress(props.codeScreen ? "verify" : props.completeProfile ? "complete" : "sendcode")}
                                title={"Send Code"} customstyle={{
                                    marginTop: 10,
                                    width:props.registration ? "70%":'100%',
                                    alignSelf:'center'

                                }} />
                        </>

                    )}
            </View>}
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: '#fff',
        elevation:0.5,
        paddingHorizontal:12,
        borderWidth:1,
        borderColor:'lightgrey',
        paddingVertical: 20,
        borderRadius:6,
        padding: 4
    },
    inputContainer: {
        marginBottom: 20,
    },
    countryCard: {
        height: 70,
        width: 70,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center', justifyContent: 'center'
    },
    crosView: {
        position: 'absolute',
        backgroundColor: 'red',
        padding:6,
        borderRadius:20,
        alignSelf: 'flex-end',
        alignItems: 'flex-end'
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: '#333',
    },
    changeImageView: {
        height: 20, width: 80,
        alignSelf: 'center',
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 4
    },
    card2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardStyle: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        // padding: ,
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 16,
        color: '#333',
    },
    viewStyle: {
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        borderColor: fonts.PRIMARY_COLOR, 
        borderRadius: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 6,
    },
    countryNameTxt: {
        marginLeft: 5,
    },

    root: {
        flex: 1,
    },
    heading: {
        fontSize: 16,
        color: '#000',
        fontFamily: fonts.GOTHAM_BOLD
    },
    subheading: {
        fontSize: 14,
        color: 'black',
        fontFamily: fonts.GOTHAM_BOLD
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
    identificatiocard: {
        elevation: 2,
        margin: 5,
        borderRadius: 10,
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default FileCard;

