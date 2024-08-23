import axios from 'axios'
import { CLOUDINARY_URL, CLOUD_NAME, UPLOAD_PRESET } from './config';
const LIVE_SERVER = axios.create({
    baseURL: `https://demo.vizitr.com/API/api/`

});

const LOCAL_PORT = 8000
const LOCAL_IP = '192.168.18.12'




const LOCAL_SERVER = axios.create({
    baseURL: `http://${LOCAL_IP}:${LOCAL_PORT}/`

});


const verify_Phone = async payload => {
    const requrest = `user/verify-phone`;
    try {
        const response = await LOCAL_SERVER.post(requrest, payload, {
            headers: {
                Accept: 'application/json',
            },
        });
        const { data, status } = response;
        return status === 200 || status === 201 ? data : null;
    } catch (err) {
        console.log("chck Error", err.response)
        throw err;
    }
};
const verify_Code = async payload => {
    const requrest = `user/verify-code`;
    try {
        const response = await LOCAL_SERVER.post(requrest, payload, {
            headers: {
                Accept: 'application/json',
            },
        });
        const { data, status } = response;
        return status === 200 || status === 201 ? data : null;
    } catch (err) {
        console.log("chck Error", err.response)
        throw err;
    }
};
const userRegister = async payload => {
    const requrest = `user/update-user`;
    try {
        const response = await
            LOCAL_SERVER.post(requrest, payload, {
                headers: {
                    Accept: 'application/json',
                },
            });
        const { data, status } = response;
        return status === 200 || status === 201 ? data : null;
    } catch (err) {
        console.log("chck Error", err.response)
        throw err;
    }
};
 const uploadImageToCloudinary = async (imageUri) => {
    const data = new FormData();
    data.append('file', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'upload.jpg',
    });
    data.append('cloud_name', CLOUD_NAME); 
    data.append('upload_preset', UPLOAD_PRESET);
    try {
        const response = await axios.post(CLOUDINARY_URL, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (response.data.secure_url) {
            return response.data.secure_url;
        }
    } catch (error) {
        console.log('Error uploading image to Cloudinary:', error);
        throw error;
    }
};

const getonboardingResult = async payload => {
    const requrest = `user/get-about-us`;
    try {
        const response = await
            LOCAL_SERVER.get(requrest, {
                headers: {
                    Accept: 'application/json',
                },
            });
        const { data, status } = response;
        return status === 200 || status === 201 ? data : null;
    } catch (err) {
        console.log("chck Error", err.response)
        throw err;
    }
};









export {
    getonboardingResult,
    verify_Phone,
    verify_Code,
    userRegister,
    uploadImageToCloudinary

};
