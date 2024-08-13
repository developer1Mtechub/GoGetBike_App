import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import Custombutton from '../../../../../components/Custombutton';
import { fonts } from '../../../../../utils/fonts';
import Spacer from '../../../../../components/Spacer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DetailCard = ({
    bikeDetails,
    onConfirm,
    fromConfirmBooking,
    onDateTimePress,
    confirmDate,
    startTime,
    endTime,
    fromConfirmPayment
}) => {

    const DetailRow = ({ label, value, labelStyle, valueStyle }) => (
        <View style={styles.row}>
            <Text style={[styles.headingTxt, labelStyle]}>{label}</Text>
            <TouchableOpacity onPress={() => onConfirm("addcard")} disabled={value != "Add Card" ? true : false} style={{ padding: 6 }}>
                <Text style={[styles.subheadingtxt, valueStyle]}>{value}</Text>
            </TouchableOpacity>

        </View>
    );

    const DateTimeRow = ({ label, onPress, value }) => (
        <TouchableOpacity onPress={onPress} style={styles.Daterow}>
            <Text style={styles.timerHead}>{value || label}</Text>
            <MaterialIcons name={"keyboard-arrow-down"} size={22} />
        </TouchableOpacity>
    );

    const ConfirmPaymentDateTimeRow = ({ label, onPress, value }) => (
        <TouchableOpacity onPress={onPress} style={[styles.Daterow, { borderBottomWidth: 0, paddingVertical: 2 }]}>
            <Text style={[styles.timerHead, { color: 'grey', fontFamily: fonts.MONTESERAT_REGULAR }]}>{label}</Text>
            <Text style={[styles.timerHead, { color: 'grey', fontFamily: fonts.MONTESERAT_REGULAR }]}>{value}</Text>
        </TouchableOpacity>
    );

    const renderRow = (rowType, props) => {
        switch (rowType) {
            case 'DetailRow':
                return <DetailRow {...props} />;
            case 'DateTimeRow':
                return <DateTimeRow {...props} />;
            case 'ConfirmPaymentDateTimeRow':
                return <ConfirmPaymentDateTimeRow {...props} />;
            default:
                return null;
        }
    };

    return (
        <View style={[styles.container, { elevation: (fromConfirmBooking || fromConfirmPayment) ? 0 : 3 }]}>
            {renderRow('DetailRow', { label: fromConfirmPayment ? "Ride Details" : bikeDetails.label, value: bikeDetails.value })}
            {!fromConfirmPayment && <Image source={bikeDetails.bikeImage} style={[styles.image, bikeDetails.imageStyle]} />}
            {renderRow('DetailRow', { label: bikeDetails.iuText, value: bikeDetails.iuNumber })}
            {!fromConfirmPayment && (
                <>
                    {renderRow('DetailRow', { label: bikeDetails.root, value: `$${bikeDetails.price}`, labelStyle: { color: '#343434', opacity: 0.6 } })}
                    <View style={[styles.row, styles.descriptionRow]}>
                        <Text style={styles.desTxt}>{bikeDetails.description}</Text>
                    </View>
                </>
            )}
            <View style={styles.locationRow}>
                <Feather name={"map-pin"} size={24} />
                <Text style={[styles.desTxt, { paddingLeft: 10 }]}>{bikeDetails.location}</Text>
            </View>
            {fromConfirmBooking && (
                <>
                    {renderRow('DateTimeRow', { label: "Confirm Date", value: confirmDate, onPress: () => onDateTimePress("confirmDate") })}
                    {renderRow('DateTimeRow', { label: "Confirm Start time", value: startTime, onPress: () => onDateTimePress("confirmstartTime") })}
                    {renderRow('DateTimeRow', { label: "Confirm End time", value: endTime, onPress: () => onDateTimePress("confirmendTime") })}
                </>
            )}
            {fromConfirmPayment && (
                <>
                    {renderRow('ConfirmPaymentDateTimeRow', { label: "Ride Date", value: confirmDate, onPress: () => onDateTimePress("confirmDate") })}
                    {renderRow('ConfirmPaymentDateTimeRow', { label: "Ride Start time", value: startTime, onPress: () => onDateTimePress("confirmstartTime") })}
                    {renderRow('ConfirmPaymentDateTimeRow', { label: "Ride End time", value: endTime, onPress: () => onDateTimePress("confirmendTime") })}
                    {renderRow('DetailRow', { labelStyle: { fontSize: 14 }, label: "Charges Per Hr.", value: "$24" })}
                    {renderRow('DetailRow', { labelStyle: { fontSize: 14 }, label: "Ride Tax.", value: "$4" })}
                    {renderRow('DetailRow', { labelStyle: { fontSize: 14 }, label: "Total Amount.", value: "$28" })}
                    {renderRow('DetailRow', {
                        labelStyle: { fontSize: 14 },
                        valueStyle: { fontFamily: fonts.MONTESERAT_SEMIBOLD, color: fonts.PRIMARY_COLOR },
                        label: "Pay By:", value: "Add Card"
                    })}
                </>
            )}
            <Spacer space={10} />
            <Custombutton title={fromConfirmBooking ? "Continue" : fromConfirmPayment ? "Pay Now" : "Confirm"} onPress={() => {
                if (fromConfirmBooking) {
                    onConfirm("continue")
                } else if (fromConfirmPayment) {
                    alert("Wait for Payment")
                }

                else {
                    onConfirm("confirm")
                }
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        elevation: 2, // Android elevation
        shadowColor: '#000', // iOS shadow properties
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin: 10,
        paddingVertical: 10,
        padding: 12,
        borderRadius: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    Daterow: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        paddingVertical: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    image: {
        height: 80,
        width: 150,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    descriptionRow: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    locationText: {
        marginLeft: 10,
        flexShrink: 1
    },
    headingTxt: {
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        color: '#000',
        fontSize: 18
    },
    timerHead: {
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        color: '#000',
        fontSize: 14
    },
    desTxt: {
        fontFamily: fonts.MONTESERAT_REGULAR,
        color: '#9E9E9E',
        fontSize: 13
    },
    subheadingtxt: {
        fontFamily: fonts.MONTESERAT_MEDIUM,
        color: fonts.BLACK
    }
});

export default DetailCard;


