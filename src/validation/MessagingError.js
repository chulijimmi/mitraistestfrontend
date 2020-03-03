/**
 * Standart messaging error on
 * Registration
 */
export default {
    mobileNumber: {
        isRequired: {
            error: 201,
            message: "Mobile number is required"
        },
        isExist: {
            error: 201,
            message: "Your mobile number is exist, plase use another"
        },
        isNotValid: {
            error: 201,
            message: "Please enter valid indonesian mobile number"
        }
    },
    firstName: {
        isRequired: {
            error: 202,
            message: "First name is required"
        }
    },
    lastName: {
        isRequired: {
            error: 203,
            message: "Last name is required"
        }
    },
    email: {
        isRequired: {
            error: 204,
            message: "Email is required and should valid email address"
        },
        isExist: {
            error: 202,
            message: "Your email is not available, plase use other"
        }
    }
}