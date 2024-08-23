import * as Yup from 'yup'


const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const Passmessage = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
const logInValidationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter Valid email *').required('Email address is required*'),
})
const completeProfileValidationSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Full name is required*')
        .matches(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces*'),
    email: Yup.string()
        .email('Please enter a valid email*')
        .required('Email address is required*'),
    dob: Yup.string()
        .required('Date of birth is required*'),
    address: Yup.string()
        .required('Address is required*')
        .matches(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces*'),
});

const tellUsmorescreenValidation = Yup.object().shape({
    fullNameNric: Yup.string()
        .required('Full name as per NRIC is required*')
        .matches(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces*'),
    fullAddress: Yup.string()
        .required('Address is required*')
        .matches(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces*'),
    nricNo: Yup.string()
        .required('NRIC number is required*'),
    postalCode: Yup.string()
        .required('Postal code is required*'),
    frontPic: Yup.string().required('Front ID Photo is required*'), // Assuming photo is a URL
    backPic: Yup.string().required('Back ID Photo is required*')
});
const SignUpValidationSchema = Yup.object().shape({
    email: Yup.string().email('Please Enter a valid email').required('Email Address is required'),
    password: Yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .matches(strongPasswordRegex, `${Passmessage}`)
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Please re-type your password')
        .oneOf([Yup.ref('password')], 'Passwords does not match'),
})

const forgetPasswordValidationSchema = Yup.object().shape({
    email: Yup.string().email('please enter valid email *').required('Email Address is required'),
})
const resetPasswordValidationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .matches(strongPasswordRegex, `${Passmessage}`)
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Please Confirm your password')
        .oneOf([Yup.ref('password')], 'Passwords does not match'),
})

const changePasswordValidationSchema = Yup.object().shape({
    newPassword: Yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .matches(strongPasswordRegex, `${Passmessage}`)
        .required('Password is required'),
    confirmnewPassword: Yup.string()
        .required('Please confirm your new password')
        .oneOf([Yup.ref('newPassword')], 'Passwords do not match'),
})








export {
    logInValidationSchema,
    SignUpValidationSchema,
    forgetPasswordValidationSchema,
    resetPasswordValidationSchema,
    changePasswordValidationSchema,
    completeProfileValidationSchema,
    tellUsmorescreenValidation

}
