import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { fonts } from '../../../../../utils/fonts';
import Custombutton from '../../../../../components/Custombutton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomImage from '../../../../../components/CustomImage';
import IconsText from './IconsText';
import { images } from '../../../../../utils/constants';

const BikedetailsComp = ({ response, fromHistory, streamTitle,onPress }) => {

    const renderRideDetails = () => (
        <View style={styles.rideDetailsContainer}>
            {[
                { label: 'Ride Date', value: '01-03-2024' },
                { label: 'Ride Start time', value: '10:00 AM' },
                { label: 'Ride End time', value: '09:00 PM' },
                { label: 'Charges Per hr', value: '24$' },
                { label: 'Ride tax', value: '4$' },
                { label: 'Total Amount', value: '28$' },
                { label: 'PAID BY:', value: 'Card', isBold: true },
            ].map((item, index) => (
                <View style={styles.row} key={index}>
                    <Text style={styles.headTxt}>{item.label}</Text>
                    <Text style={[styles.subTxt, item.isBold && styles.boldText]}>{item.value}</Text>
                </View>
            ))}
        </View>
    );

    const renderButtons = () => (
        <View style={styles.buttonRow}>
            <Custombutton onPress={()=>onPress("issue")} title="Report an issue" customstyle={styles.redButton} customTilestyle={styles.buttonText} />
            <Custombutton onPress={()=>onPress("ratebike")} title="Rate Bike" customstyle={styles.button} customTilestyle={styles.buttonText} />
        </View>
    );

    const renderContent = () => {
        switch (true) {
            case fromHistory && streamTitle === "Completed":
                return (
                    <>
                        {renderRideDetails()}
                        {renderButtons()}
                    </>
                );
            case fromHistory:
                return renderRideDetails();
            default:
                return <Custombutton title="Confirm" />;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <CustomImage source={response.bikeImage} style={styles.bikeImage} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{response.id}</Text>
                <Text style={styles.subtitle}>{response.model}</Text>
            </View>
            <View style={styles.iconRow}>
                <IconsText icon="settings" text="Auto" iconColor="green" />
                <IconsText icon="person" text="2" />
                <IconsText icon="star" text="4.5" iconColor="orange" />
                <IconsText icon={images.helmet} text="yes" />
            </View>
            <View style={styles.valueRow}>
                <Text style={styles.value}>{response.value}</Text>
                <Text style={styles.price}>{response.price}$ Per hr</Text>
            </View>
            <View style={styles.locationContainer}>
                <Text style={styles.sectionTitle}>Pickup Location</Text>
                <View style={styles.locationRow}>
                    <FontAwesome5 name='map-marker-alt' style={styles.locationIcon} />
                    <Text style={styles.locationText}>{response.location}</Text>
                </View>
            </View>
            {renderContent()}
        </View>
    );
};

export default BikedetailsComp;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 10,
    },
    imageContainer: {
        height: 170,
        borderWidth: 2,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: fonts.PRIMARY_COLOR,
        marginBottom: 16,
    },
    bikeImage: {
        height: 150,
        width: 200,
        resizeMode: 'contain',
    },
    infoContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 35,
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        color: '#707070',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: fonts.MONTESERAT_REGULAR,
        color: '#888',
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    headTxt: {
        fontFamily: fonts.MONTESERAT_MEDIUM,
        color: 'grey',
    },
    subTxt: {
        fontFamily: fonts.MONTESERAT_REGULAR,
    },
    boldText: {
        color: '#000',
        fontFamily: fonts.MONTESERAT_BOLD,
    },
    valueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    value: {
        fontSize: 16,
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        color: fonts.PRIMARY_COLOR,
    },
    price: {
        fontSize: 16,
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        color: fonts.PRIMARY_COLOR,
    },
    locationContainer: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        color: fonts.PRIMARY_COLOR,
        marginBottom: 8,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        fontSize: 18,
        color: fonts.PRIMARY_COLOR,
        marginRight: 8,
    },
    locationText: {
        fontSize: 14,
        fontFamily: fonts.MONTESERAT_REGULAR,
        color: '#7c7c7c',
    },
    rideDetailsContainer: {
        marginTop: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    redButton: {
        width: '47%',
        backgroundColor: 'red',
    },
    button: {
        width: '47%',
    },
    buttonText: {
        fontSize: 15,
    },
});
