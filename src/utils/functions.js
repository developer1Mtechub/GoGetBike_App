// phoneHandlers.js

import { Image } from "react-native";
import { images } from "./constants";

export const onPhoneNumberChange = (setPhonenumber,setPhonenumberErr) => {
    return (txt) => {
        setPhonenumber(txt);
        setPhonenumberErr("")
    };
};

export const handleCountrySelect = (setSymbol, setCode, setShowPicker, setVisible) => {
    return (country) => {
        setSymbol(country.cca2);
        setCode(country.callingCode[0]);
        setShowPicker(false);
        setVisible(false);
    };
};
export const handleCodeSend = (setLoading, phoneNumber, verify_Phone, navigation,setPhonenumberErr) => () => {
    if (!phoneNumber) {
        setPhonenumberErr("Enter your phone number its mandatory")
      return;
    }
    setLoading(true);
    const phoneData = { phone: phoneNumber };
    verify_Phone(phoneData)
      .then(response => {
        setLoading(false);
        navigation.navigate('Code', {
          otP: response.otp,
          phoneNumber: phoneNumber,
          fromLogin: false
        });
      })
      .catch(error => {
        setLoading(false);
        console.error('Error verifying phone:', error);
      });
  };
  



export const _handlePress = (setVisible, setShowPicker, navigation) => {
    return (res) => {
        if (res === 'flag') {
            setVisible(true);
            setShowPicker(true);
        } else {
            navigation.navigate("Code", { fromLogin: false });
        }
    };
};


export const handleVerify = (setLoading, phoneNumber, value, verify_Code, fromLogin, navigation,setValueErr) => {
    return () => {
        if (!value) {
            setValueErr("verification code are required.");
            return;
        }
        setLoading(true)
        const verifyData = {
            phone: phoneNumber,
            code: value,
        };
        verify_Code(verifyData)
            .then((response) => {
                setLoading(false)

                if (fromLogin) {
                    navigation.navigate('Tabs');
                } else {
                    navigation.navigate('Complete', { phoneNumber: response.user.phone_no });
                }
            })
            .catch(() => {
                setLoading(false)
            });
    };
};


// phoneHandlers.js

export const onSelect = (setSymbol, setCode, setVisible, setShowPicker) => (country) => {
    setSymbol(country.cca2);
    setCode(country.callingCode[0]);
    setVisible(false);
    setShowPicker(false);
  };
  
  export const openCountryPicker = (setVisible, setShowPicker) => () => {
    setVisible(true);
    setShowPicker(true);
  };


export const getOnboardResultsFunction = (getonboardingResult) => {
    return getonboardingResult()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("Catch Error", error);
      });
  };

  const bikeImages = {
    1: images.bike,
    2: images.bikeFront2,  
    3: images.bike,
  };

  export const transformOnboardingData = (data) => {
    return data.map(item => {
      return {
        backgroundColor: item.backgroundColor || '#fff',
        image: <Image source={bikeImages[item.order_id] || images.bell} style={{
          height: 250,
          width: 300,
          resizeMode: 'contain'
        }} />,
        title: item.heading,
        subtitle: item.paragraph,
      };
    });
  };
  
  
  

  
 
  
  
//   export const _handlePress = (navigation, openCountryPicker) => (res) => {
//     if (res === 'flag') {
//       openCountryPicker();
//     } else {
//       navigation.navigate('Code', { fromLogin: false });
//     }
//   };
  
//   export const handleCodeSend = (setState, state, verify_Phone, navigation) => () => {
//     setState((prevState) => ({
//       ...prevState,
//       loading: true,
//     }));
  
//     const phoneData = {
//       phone: state.phonenumber,
//     };
  
//     verify_Phone(phoneData)
//       .then((response) => {
//         setState((prevState) => ({
//           ...prevState,
//           loading: false,
//         }));
//         navigation.navigate('Code', {
//           otP: response.otp,
//           phoneNumber: state.phonenumber,
//           fromLogin: false,
//         });
//       })
//       .catch((error) => {
//         setState((prevState) => ({
//           ...prevState,
//           loading: false,
//         }));
//       });
//   };
  
