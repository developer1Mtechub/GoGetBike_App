import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { fonts } from '../../../../../utils/fonts';
import IconsText from './IconsText';


const BikeCarousel = ({ bikeDetails, onPress }) => {
    const {
        bikeImage,
        value,
        id,
        model,
        location,
        price,

    } = bikeDetails;

    return (
        <TouchableOpacity onPress={() => onPress(bikeDetails)} style={styles.container}>
            <View style={styles.carouselCard}>
                <View style={styles.imageContainer}>
                    <Image source={bikeImage} style={styles.image} />
                    <Text style={styles.bikeValue}>{value}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.row}>
                        <Text style={styles.headingText}>{id}</Text>
                        <Text style={[styles.headingText, styles.lightText]}>{model}</Text>
                    </View>
                    <View style={[styles.row, styles.topMargin]}>
                        <IconsText icon="settings" text="Auto" iconColor="green" />
                        <IconsText icon="person" text="2" />
                        <IconsText icon="star" text="4.5" iconColor="orange" />
                    </View>
                    <View style={[styles.row, styles.verticalPadding]}>
                        <Feather name="map-pin" size={20} color={fonts.PRIMARY_COLOR} />
                        <Text style={styles.locationText}>{location}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.headingText}>{`${price}$ Per hr`}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        bottom: 20,
        width: '100%',
    },
    imageContainer: {
        width: "30%",
        justifyContent: 'center',
    },
    carouselCard: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: fonts.PRIMARY_COLOR,
        margin: 10,
        height: 154,
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 10,
    },
    bikeValue: {
        textAlign: 'center',
        bottom: 6,
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        color: fonts.PRIMARY_COLOR,
    },
    iconText2: {
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        fontSize: 13,
        paddingLeft: 3
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsContainer: {
        width: "70%",
        justifyContent: 'center',
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 110,
        width: "100%",
    },
    locationText: {
        flex: 1,
        paddingLeft: 8,
        fontSize: 11,
        color: '#7c7c7c',
        fontFamily: fonts.MONTESERAT_REGULAR,
    },
    headingText: {
        paddingLeft: 4,

        fontFamily: fonts.MONTESERAT_SEMIBOLD,
    },
    lightText: {
        color: 'lightgrey',
    },
    topMargin: {
        marginTop: 3,
    },
    verticalPadding: {
        paddingVertical: 16,
    },
});

export default BikeCarousel;
