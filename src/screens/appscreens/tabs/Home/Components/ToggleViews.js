import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { fonts } from '../../../../../utils/fonts';

const ToggleView = (props) => {

    return (
        <View >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.onPress("economy")}
                    style={[
                        styles.box,
                        { backgroundColor: props.value == "economy" ? fonts.PRIMARY_COLOR : null },
                    ]}
                >
                    <Text style={[styles.txt, { color: props.value != "economy" ? fonts.PRIMARY_COLOR : "#fff" }]}>Economy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onPress("premium")}
                    style={[
                        styles.box,
                        { backgroundColor: props.value == "premium" ? fonts.PRIMARY_COLOR : null },
                    ]}
                >
                    <Text style={[styles.txt, { color: props.value != "premium" ? fonts.PRIMARY_COLOR : "#fff" }]}>Premium</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        borderWidth: 3,
        borderRadius: 25,
        width:'80%',
        alignSelf:'center',
        marginTop:20,
        borderColor: fonts.PRIMARY_COLOR,
        flexDirection: 'row',
    },
    box: {
        height: 39,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    },
    txt: {
        color: '#fff',
        fontSize: 14,
        fontFamily: fonts.MONTESERAT_MEDIUM
    }
});

export default ToggleView;
