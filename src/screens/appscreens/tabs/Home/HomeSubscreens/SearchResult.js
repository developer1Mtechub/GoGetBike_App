import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { globalStyel } from '../../../../globalstyle'
import TabsHeader from '../../../../../components/TabsHeader'
import { images } from '../../../../../utils/constants'
import DetailCard from '../Components/DetailCard'
import GlobalAlert from '../../../../../components/GlobalAlert'
import { fonts } from '../../../../../utils/fonts'
import CustomImage from '../../../../../components/CustomImage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import BikeCaresoul from '../Components/BikeCaresoul'
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get("window");
const sliderWidth = screenWidth;
const itemWidth = screenWidth * 0.9;

const SearchResult = ({ navigation }) => {
    const [state, setState] = useState({
        isModalVisible: false,
        caresoulRef: useRef(),
        bikeDetails:
            [{
                label: "Bike Details",
                value: "Economy",
                label2: "Bike Details",
                value2: "Economy",
                model: 'SYM GTS200',
                id: 'FBG3258T',
                bikeImage: images.bikeFront2,
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
                iuNumber: "23456",
                iuText: "IU Number",
                location: '7 Clover Wy, Singapore 5790807 Clover Wy, Singapore 579080',
                price: '4',
                root: 'Road Tax'
            },
            {
                label: "Bike Details",
                value: "Economy",
                label2: "Bike Details",
                id: 'FBG3258T',
                model: 'SYM GTS200',
                value2: "Economy",
                bikeImage: images.bikeFront2,
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
                iuNumber: "23456",
                iuText: "IU Number",
                location: '7 Clover Wy, Singapore 5790807 Clover Wy, Singapore 579080',
                price: '4',
                root: 'Road Tax'
            },
            {
                label: "Bike Details",
                value: "Economy",
                label2: "Bike Details",
                id: 'FBG3258T',
                model: 'SYM GTS200',
                value2: "Economy",
                bikeImage: images.bikeFront2,
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
                iuNumber: "23456",
                iuText: "IU Number",
                location: '7 Clover Wy, Singapore 5790807 Clover Wy, Singapore 579080',
                price: '4',
                root: 'Road Tax'
            },

            ]
    })


    const handleConfirm = () => {
        setState(prevState => ({
            ...prevState,
            isModalVisible: true
        }));

    }

    const _handleModalResponce = (value) => {
        if (value == "yes") {
            setState(prevState => ({
                ...prevState,
                isModalVisible: false
            }));
            navigation.navigate("ConfirmBooking", { bikeDetails: state.bikeDetails })
        } else {
            setState(prevState => ({
                ...prevState,
                isModalVisible: false
            }));
        }
    }
    const bikeDetails = {
        imageSource: images.bikeFront2, // Example image path
        id: 'FBG3258T',
        model: 'SYM GTS200',
        settings: 'Auto',
        capacity: '2',
        rating: '4.5',
        location: 'MSCP TPTPM8 - 11A Lor 8 Toa Payoh, Singapore 311011 Deck 2B Lot 39 to 49',
        category: 'Economy',
        pricePerHour: '$14 Per hr',
    };


    const _handlCaresoulPress = (response) => {
        navigation.navigate("Bikedetails",{response})
        console.log("Check Response", response)

    }

    _renderItem = ({ item, index }) => {
        return (
            <BikeCaresoul
                onPress={(res) => _handlCaresoulPress(res)}
                bikeDetails={item}

            />
        );
    }
    return (
        <View style={[globalStyel.tabsContainer, { backgroundColor: 'lightgrey' }]}>
            <TabsHeader
                screeenHeading={"Search Result"}
                header={false}
                navigation={navigation}
                searchresult={true}
                onPress={() => navigation.goBack()}
            />
            <View>
                {/* <DetailCard
                    bikeDetails={state.bikeDetails}
                    onConfirm={handleConfirm}
                /> */}

                {state.isModalVisible && <GlobalAlert
                    isModalVisible={state.isModalVisible}
                    handleModal={(responce) => _handleModalResponce(responce)}
                    type={"searchResultScreen"}
                />}
            </View>
            <Carousel

                autoplay={true}
                ref={state.caresoulRef}
                data={state.bikeDetails}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                inactiveSlideScale={0.95}
                inactiveSlideOpacity={0.7}
                enableMomentum={true}
                layout={"default"}
                decelerationRate={1}
                containerCustomStyle={styles.carouselContainer}
                contentContainerCustomStyle={styles.carouselContent}


            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
    },
    carouselContainer: {
        overflow: 'visible',
    },
    carouselContent: {
        paddingLeft: screenWidth * 0.1,
        paddingRight: screenWidth * 0.1,
    },
});


export default SearchResult

