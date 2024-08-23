import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomImage from '../../../../components/CustomImage';
import CameraButton from '../../../../components/CameraButton';

const PhotoWithButton = ({ photo, onPressCamera, onPressClear, title, currentPic, setCurrentPic, error,isPhotoUploaded }) => {
    console.log("isPhotoUploaded",error)
    return (
        <View style={[styles.container, isPhotoUploaded ? styles.photoUploaded : error ? styles.errorBorder : null]}>
            {photo ? (
                <View>
                    <CustomImage
                        source={photo}
                        style={styles.image}
                    />
                    <TouchableOpacity
                        onPress={onPressClear}
                        style={styles.crossView}
                    >
                        <Entypo name={"cross"} size={18} color={"#fff"} />
                    </TouchableOpacity>
                </View>
            ) : (
                <CameraButton
                    customStyle={styles.cameraButton}
                    customtitleStyle={styles.cameraButtonText}
                    onPress={() => {
                        onPressCamera();
                        setCurrentPic(currentPic);
                    }}
                    title={title}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:1
    },
    image: {
        height: 90,
        width: 120,
        borderRadius: 3,
    },
    errorBorder: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 3

    },
    photoUploaded: {
        borderColor:null,
        borderWidth:0
    },
    crossView: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        padding: 5,
    },
    cameraButton: {
        // Your CameraButton styles
    },
    cameraButton2: {
        marginLeft: 8
        // Your CameraButton styles
    },
    cameraButtonText: {
        fontSize: 13,
    },
});

export default PhotoWithButton;
