import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-date-picker'
import { fonts } from '../utils/fonts'
const DateandTimePicker = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DatePicker
                modal
                title={null}
                cancelText={"Cancel"}
                confirmText='OK'
                buttonColor={fonts.PRIMARY_COLOR}
                open={props.open}
                date={props.date}
                tvParallaxShiftDistanceX={false}
                dividerColor={fonts.PRIMARY_COLOR}
                onConfirm={(date) => {
                    props.setOpen(false)
                    props.setDate(date)
                }}
                onCancel={() => {
                    props.setOpen(false)
                }}
            />
       

        </View>
    )
}

export default DateandTimePicker

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        backgroundColor:'red'
    },
    verticalLine: {
        width: 5,
        backgroundColor: '#000', // Adjust color as needed
        height: '100%',
    },
})