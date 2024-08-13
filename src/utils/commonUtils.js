export const formatDateTime = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: "short" }).toLowerCase();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    return `${day} ${month},${year} ${formattedTime}`;
};

export const getTitle = (item, state) => {
    const titleMappings = {
        "Search Bike Modal": state.bikeModel,
        "Start Date & time": state.startdateTime,
        "End Date & time": state.enddateTime,
        "Pick Date": state.premiumDate,
        "Start Time": state.premiumStarttime,
        "End Time": state.premiumEndtime
    };

    return titleMappings[item.title] || item.title;
};


export const formatCardNumber = (text) => {
    const formattedText = text.replace(/[^\d]/g, '');
    const maxLength = 16;
    let newValue = '';
    for (let i = 0; i < Math.min(formattedText.length, maxLength); i++) {
        if (i > 0 && i % 4 === 0) {
            newValue += ' ';
        }
        newValue += formattedText[i];
    }
    return newValue;
};

export const formatExpiryDate = (text) => {
    const formattedText = text.replace(/[^\d]/g, '');

    let newValue = '';
    let isValid = true; // Flag to indicate validity of the expiry date
    if (formattedText.length >= 2) {
        const month = parseInt(formattedText.substring(0, 2), 10);

        // Validate month between 1 and 12
        if (month < 1 || month > 12) {
            newValue += '01';
            isValid = false; // Set validity flag to false
        } else {
            newValue += `${month < 10 ? '0' + month : month}`;
        }
    } else if (formattedText.length > 0) {
        // If only one digit is entered, directly append it (for example, '1' becomes '01')
        newValue += formattedText;
    }

    // Handle the next two characters as year (YY)
    if (formattedText.length >= 3) {
        const year = formattedText.substring(2, 4); // Extract YY part
        newValue += `/${year}`;
    }

    return { formattedValue: newValue, isValid };
};



// onSelect.js
export const onSelect = (country, updateState, callback) => {    
    updateState(prevState => {
        const newState = {
            ...prevState,
            country: country.name,
            symbol: country.cca2,
            code: country.callingCode[0],
            showPicker: false,
            visible: false,
        };
                if (callback) {
            callback(newState);
        }
        
        return newState;
    });
};










