import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { globalStyel } from '../../../../globalstyle'
import TabsHeader from '../../../../../components/TabsHeader'
import ToggleView from '../Components/ToggleViews'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { searchRideArraEconomy, searchRideArraPremium } from '../../../../../utils/data'
import Custombutton from '../../../../../components/Custombutton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomBottomSheet from '../Components/Custombottomsheet'
import { handleLocation, handleSearchBikeModal } from '../Components/Sheets'
import DateandTimePicker from '../../../../../components/DateandTimePicker'
import { formatDateTime, getTitle } from '../../../../../utils/commonUtils'
const SearchRide = ({ navigation }) => {
    const refRBSheet = useRef();
    const [state, setState] = useState({
        package: 'economy',
        searchType: '',
        bikeModel: '',
        isVisible: false,
        typeId: -1,
        date: new Date(),
        dateType: '',
        showPicker: false,
        startdateTime: '',
        enddateTime: '',
        premiumDate: '',
        premiumStarttime: '',
        premiumEndtime: ''

    })

    const _handleRideSearch = (resp) => {
        setState(prevState => ({
            ...prevState,
            package: resp
        }))

    }
    const handleOpenPicker = () => {
        setState(prevState => ({ ...prevState, showPicker: true }));
    };
    const handleClosePicker = () => {
        setState(prevState => ({ ...prevState, showPicker: false }));
    };
    const handleDateChange = (date, type) => {
        const formattedResult = formatDateTime(date);
        const dateTypeMapping = {
            "PickDate": { premiumDate: formattedResult },
            "PremiumStart": { premiumStarttime: formattedResult },
            "PremiumEnd": { premiumEndtime: formattedResult },
            "Start": { startdateTime: formattedResult },
            "End": { enddateTime: formattedResult }
        };

        setState(prevState => ({
            ...prevState,
            ...dateTypeMapping[type]
        }));
    };
    const _handlSearchByType = (value) => {
        if (value.title === "Location") {
            navigation.navigate("AddLocation")
            return;
        }
        const isPremium = state.package === "premium";
        const dateTypes = {
            "Pick Date": "PickDate",
            "Start Time": "PremiumStart",
            "End Time": "PremiumEnd",
            "Start Date & time": "Start",
            "End Date & time": "End"
        };

        const isDateType = dateTypes[value.title] !== undefined;
        const dateType = dateTypes[value.title];
        if (isDateType) {
            handleOpenPicker();
            setState(prevState => ({
                ...prevState,
                dateType: dateType
            }));
        } else {
            refRBSheet.current.open();
            setState(prevState => ({
                ...prevState,
                searchType: value.title,
                isVisible: true,
                typeId: value.id
            }));
        }
    };

    const handleSelectBikeModel = (item) => {
        setState(prevState => ({
            ...prevState,
            bikeModel: item.title
        }));
    };

    const renderContent = () => {
        switch (state.searchType) {
            case "Location":
                return handleLocation();
            case "Search Bike Modal":
                return handleSearchBikeModal({
                    state,
                    handleBikeModalClose: refRBSheet?.current?.close,
                    onSelectBikeModel: handleSelectBikeModel
                });
            default:
                return null
        }
    };


    const _handleClose = () => {
        setState(prevState => ({
            ...prevState,
            isVisible: false,
            typeId: -1
        }))
    }

    const renderItems = (items, state) => {
        return items.map((item) => (
            <TouchableOpacity onPress={() => _handlSearchByType(item)} style={styles.dataStyle} key={item.id}>
                <Text style={globalStyel.globalTxt}>{getTitle(item, state)}</Text>
                <MaterialIcons
                    name={item.title == "Location" ? "arrow-forward-ios" : (state.isVisible && state.typeId == item.id ? 'keyboard-arrow-up' : "keyboard-arrow-down")}
                    size={item.title == "Location" ? 18 : 24}
                    style={{ opacity: 0.37 }}
                    color={"#151515"}
                />
            </TouchableOpacity>
        ));
    };

    const renderSelectionView = (state) => {
        const items = state.package === "economy" ? searchRideArraEconomy : searchRideArraPremium;
        return renderItems(items, state);
    };
    return (
        <View style={globalStyel.tabsContainer}>
            <TabsHeader
                screeenHeading={"Search Ride"}
                header={false}
                navigation={navigation}
                onPress={() => navigation.goBack()}

            />
            <View style={[globalStyel.globalcontainer, { justifyContent: 'flex-start' }]}>
                <View>
                    <ToggleView
                        value={state.package}
                        onPress={(type) => _handleRideSearch(type)}
                    />
                    <View style={styles.selectionViewstyle}>
                        {renderSelectionView(state)}
                    </View>
                    <Custombutton
                        title={"Search Ride"}
                        startIcon={<AntDesign name={"search1"} size={24} color={"#fff"} />}
                        customstyle={styles.rideButton}
                    />
                    <CustomBottomSheet
                        ref={refRBSheet}
                        handlClose={() => _handleClose()}
                    >
                        {renderContent()}
                    </CustomBottomSheet>
                    <DateandTimePicker
                        open={state.showPicker}
                        date={state.date}
                        setOpen={handleClosePicker}
                        setDate={(date) => handleDateChange(date, state.dateType)}

                    />
                </View>
            </View>
        </View>
    )
}

export default SearchRide

const styles = StyleSheet.create({
    dataStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    selectionViewstyle: {
        marginTop: '10%'
    },
    rideButton: {
        width: '60%',
        marginTop: 30,
        alignSelf: 'center'
    }
})