import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CustomImage = ({ source, style, ...props }) => {
    let imageSource;

    if (typeof source === 'string') {
        imageSource = { uri: source };
    } else {
        imageSource = source;
    }

    return (
        <Image
            source={imageSource}
            style={[styles.image, style]}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 250,
        resizeMode: 'contain',
    },
});

export default CustomImage;
