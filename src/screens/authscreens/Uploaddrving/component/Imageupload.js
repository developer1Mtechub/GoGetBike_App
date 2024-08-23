import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomImage from '../../../../components/CustomImage';
import { fonts } from '../../../../utils/fonts';

const ImageUpload = ({ imageUri, onUploadPress, onClearPress, uploadTitle }) => (
    <View style={styles.container}>
        {imageUri ? (
            <View style={styles.imageContainer}>
                <CustomImage source={imageUri} style={styles.image} />
                <TouchableOpacity onPress={onClearPress} style={styles.clearButton}>
                    <Entypo name="circle-with-cross" size={32} color="#979797" />
                </TouchableOpacity>
            </View>
        ) : (
            <TouchableOpacity onPress={onUploadPress} style={styles.uploadCard}>
                <AntDesign name="camerao" size={24} color="#000" />
                <Text style={styles.uploadText}>{uploadTitle}</Text>
            </TouchableOpacity>
        )}
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    imageContainer: {
        height: 200,
        borderRadius: 10,
        width: '100%',
        borderWidth: 1,
        position: 'relative',
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    clearButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 10,
        right: 10,
    },
    uploadCard: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    uploadText: {
        paddingTop: 10,
        fontFamily:fonts.MONTESERAT_BOLD,
        color:'#000'
    },
});

export default ImageUpload;
