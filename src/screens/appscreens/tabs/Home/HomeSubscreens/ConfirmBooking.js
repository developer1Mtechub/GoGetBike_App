import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyel } from '../../../../globalstyle'
import TabsHeader from '../../../../../components/TabsHeader'
import DetailCard from '../Components/DetailCard'
import DateandTimePicker from '../../../../../components/DateandTimePicker'
import { formatDateTime } from '../../../../../utils/commonUtils'

const ConfirmBooking = ({ navigation, route }) => {
    const bikeDetails = route?.params?.bikeDetails;
    const [state, setState] = useState({
        date: new Date(),
        dateType: '',
        showPicker: false,
        premiumDate: '',
        premiumStartTime: '',
        premiumEndTime: ''
    })

    const _handleDates = (res) => {
        setState(prevState => ({ ...prevState, showPicker: true, dateType: res }));


    }
    const handleClosePicker = () => {
        setState(prevState => ({ ...prevState, showPicker: false }));
    };
    const handleDateChange = (event) => {
        const selectedDate = event;
        const formattedResult = formatDateTime(selectedDate);

        const dateTypeMapping = {
            "confirmDate": { premiumDate: formattedResult },
            "confirmstartTime": { premiumStartTime: formattedResult },
            "confirmendTime": { premiumEndTime: formattedResult }
        };

        setState(prevState => ({
            ...prevState,
            ...dateTypeMapping[state.dateType],
            showPicker: Platform.OS === 'ios',
            date: selectedDate,
        }));
    };

    const _handlecontinue = (respo) => {
        navigation.navigate("ConfirmPayment", {
            bikeDetails, 
            timings: {
                premiumDate: state.premiumDate,
                startTime: state.premiumStartTime,
                endTime: state.premiumEndTime
            }
        })
    }

    return (
        <View style={globalStyel.tabsContainer}>
            <TabsHeader
                screeenHeading={"Confirm Booking"}
                header={false}
                addloc={true}
                navigation={navigation}
                onPress={() => navigation.goBack()}
            />
            <DetailCard
                bikeDetails={bikeDetails}
                fromConfirmBooking={true}
                onConfirm={(result) => _handlecontinue(result)}
                confirmDate={state.premiumDate}
                startTime={state.premiumStartTime}
                endTime={state.premiumEndTime}
                onDateTimePress={(responce) => _handleDates(responce)}
            />
            <DateandTimePicker
                open={state.showPicker}
                date={state.date}
                setOpen={handleClosePicker}
                setDate={(date) => handleDateChange(date, state.dateType)}

            />
        </View>
    )
}

export default ConfirmBooking

const styles = StyleSheet.create({})