import ImagePicker from 'react-native-image-crop-picker';
import { Dimensions } from 'react-native'

export const _globalImagePicker = (type, onImageSelected) => {
    if (type === "picker") {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            onImageSelected(image);
        }).catch(error => {
            console.log("ImagePicker Error: ", error);
        });
    } else if (type === "camera") {
        ImagePicker.openCamera({
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
            useFrontCamera: true
        }).then(image => {
            onImageSelected(image);
        }).catch(error => {
            console.log("Camera Error: ", error);
        });
    } else {
        console.log("Invalid type provided:", type);
    }
};
