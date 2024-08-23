import { ScrollView, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../../utils/constants'
import { globalStyel } from '../../globalstyle'
import CustomHeader from '../../../components/CustomHeader'
import DateandTimePicker from '../../../components/DateandTimePicker'
import InputField from '../../../components/InputField'
import CustomImage from '../../../components/CustomImage'
import Wraper from '../../../components/Wraper'
import Custombutton from '../../../components/Custombutton'
import { Formik } from 'formik'
import { completeProfileValidationSchema } from '../../../utils/validatonhelper'
import Customtitle from '../../../components/Customtitle'
import Customdescription from '../../../components/Customdescription'
import { formateDOB } from '../../../utils/commonUtils'
import ErrorTxt from '../../../components/ErrorTxt'

const Complete = ({ navigation, route }) => {
    const { phoneNumber } = route.params;
    const [state, setState] = useState({
        value: '',
        fullName: '',
        email: '',
        dob: '',
        loading: false,
        date: new Date(),
        dateType: '',
        showPicker: false,
        address: ''
    })


    const _handlePress = (res) => {
        setState((prevState => ({
            ...prevState,
            loading: true
        })))
        setTimeout(() => {
            setState((prevState => ({
                ...prevState,
                loading: false
            })))
            navigation.navigate("Idenitity", { userData: res })
        }, 500);



    }

    const handleOpenPicker = () => {
        setState(prevState => ({ ...prevState, showPicker: true }));
    };
    const handleClosePicker = () => {
        setState(prevState => ({ ...prevState, showPicker: false }));
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }}
            showsVerticalScrollIndicator={false}>
            <CustomHeader navigation={navigation} />
            <View style={globalStyel.globalcontainer}>
                <View style={{ alignItems: 'center' }}>
                    <CustomImage source={images.user} style={{ height: 100, width: 100 }} />
                    <Customtitle title={"Complete Profile"} />
                    <Customdescription title={`Please let us know \n more About your self`} customStyle={{ textAlign: 'center' }} />
                </View>

                <Wraper>
                    <Formik
                        initialValues={state}
                        onSubmit={(values) => _handlePress(values)}
                        validationSchema={completeProfileValidationSchema}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (
                            <View style={{ paddingHorizontal: 10 }}>
                                <InputField
                                    label="Full Name"
                                    onChangeText={handleChange('fullName')}
                                    value={values.fullName}
                                    autoCapitalize="none"
                                />
                                {errors.fullName && <ErrorTxt title={errors.fullName} />}
                                <InputField
                                    label="Email"
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                />
                                {errors.email && <ErrorTxt title={errors.email} />}
                                <InputField
                                    label="Full Address"
                                    onChangeText={handleChange('address')}
                                    value={values.address}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                />
                                {errors.address && <ErrorTxt title={errors.address} />}
                                <TouchableOpacity onPress={() => handleOpenPicker()}>
                                    <InputField
                                        label={values.dob === "" ? "Date of Birth" : ""}
                                        value={values.dob}
                                        editable={false}
                                        autoCapitalize="none"
                                    />
                                </TouchableOpacity>
                                {errors.dob && <ErrorTxt title={errors.dob} />}
                                <Custombutton
                                    title={"Complete"}
                                    loading={state.loading}
                                    onPress={() => handleSubmit(values)}
                                />

                                {/* Date Picker */}
                                <DateandTimePicker
                                    open={state.showPicker}
                                    date={state.date}
                                    setOpen={handleOpenPicker}
                                    setDate={(date) => {
                                        const formattedDate = formateDOB(date); // Format the date
                                        setFieldValue('dob', formattedDate);  // Update the dob inside Formik
                                        handleClosePicker();  // Close the picker
                                    }}
                                />
                            </View>
                        )}
                    </Formik>
                </Wraper>
            </View>


        </ScrollView>
    )
}

export default Complete
