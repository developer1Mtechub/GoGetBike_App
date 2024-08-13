import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { fonts } from '../utils/fonts';
const CameraButton = ({ onPress, title,customStyle }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.button}>
            <View style={[styles.container,{...customStyle}]}>
                <AntDesign name={"camerao"} size={32} color={"#000"} />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        elevation:2,
        backgroundColor:'#fff',
        padding:12,
        borderRadius:6
    },
    text: {
        fontSize: 16,
        color:"#000",
        fontFamily:fonts.GOTHAM_BOLD,
        marginTop: 8, // Adjust as needed
    },
});

export default CameraButton;
