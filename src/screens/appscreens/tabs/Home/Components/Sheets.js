import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Commontitle from "../../../../../components/Commontitle";
import IconCom from "../../../../../components/IconCom";
import Entypo from 'react-native-vector-icons/Entypo'
import { FlatList } from "react-native";
import { bikesModelArray } from "../../../../../utils/data";
import { fonts } from "../../../../../utils/fonts";
import { getTitle } from "../../../../../utils/commonUtils";


export const handleLocation = () => {
    return <Text>Handle Location</Text>;
};

export const handleSearchBikeModal = ({ handleBikeModalClose, state, onSelectBikeModel }) => {
    return (
        <View>
            <View style={styles.bikescontainerStyle}>
                <Text></Text>
                <Commontitle
                    title={"Select Bike Model"}
                    customStyle={styles.biikeTitleStyle}
                />
                <IconCom
                    customStyle={styles.iconStyle}
                    onPress={() => handleBikeModalClose()}
                    icon={<Entypo name={"cross"} size={16} color={"#fff"} />}
                />
            </View>
            <FlatList
                data={bikesModelArray}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        onSelectBikeModel(item)
                        handleBikeModalClose()
                    }} style={{ paddingLeft: 16, paddingVertical: 8 }}>
                        <Text style={styles.globalTxt}>{getTitle(item, state)}</Text>
                        <Text style={[styles.biikeDesStyle, { marginTop: 4, opacity: 0.66 }]}>{item.des}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};


const styles = StyleSheet.create({
    iconStyle: {
        height: 25,
        width: 25
    },
    bikescontainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%"
    },
    biikeTitleStyle: {
        fontFamily: fonts.MONTESERAT_BOLD,
        color: '#000',
        fontSize: 14
    },
    biikeDesStyle: {
        fontFamily: fonts.LATO_REGULAR,
        color: '#000',
        width: '90%',
        fontSize: 14
    }
})