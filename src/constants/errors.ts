export default {
    EMAIL_INVALID_FORMAT: {
        code: 400,
        key: 'email.invalid.format',
        message: 'Invalid email format'
    },
    USER_NAME_INVALID_LENGTH: {
        code: 400,
        key: 'username.invalid.length',
        message: 'Username length must be between 3 and 16 characters'
    },
    USER_NAME_ALREADY_EXISTS: {
        code: 400,
        key: 'username.already.exists',
        message: 'Such username already exists'
    },
    BIRTH_DATE_INVALID_FORMAT: {
        code: 400,
        key: 'birth.invalid.format',
        message: 'Invalid format of birth date'
    },
    BIRTH_DATE_INVALID_RANGE: {
        code: 400,
        key: 'birth.invalid.range',
        message: 'Invalid range of birth date'
    },
    AGE_LIMIT: {
        code: 400,
        key: 'age.limit',
        message: 'Age is beyond the limit'
    },
    USER_ALREADY_REGISTERED: {
        code: 400,
        key: 'user.already.registered',
        message: 'Such user already registered'
    },
    FORUM_REGISTER_DISABLED: {
        code: 400,
        key: 'forum.register.disabled',
        message: 'Forum registration is disabled'
    },
    AGREEMENT_MISSED: {
        code: 400,
        key: 'agreement.missed',
        message: 'User should agree with forum rules'
    },
    EMAIL_TAKEN: {
        code: 400,
        key: 'email.taken',
        message: "Such email is already taken"
    },
    UNKNOWN_FORUM_ERROR: {
        code: 500,
        key: 'forum.unknown.error',
        message: 'Unknown forum error'
    },
    INVALID_CREDENTIALS: {
        code: 403,
        key: 'credentials.invalid',
        message: 'Invalid credentials'
    },
    AUTH_ATTEMPTS_EXCEEDED: {
        code: 400,
        key: 'auth.attempts.exceeded',
        message: 'Exceeded the number of authentication attempts'
    },
    USER_NOT_FOUND: {
        code: 404,
        key: 'user.not.found',
        message: 'User not found'
    },
    INVALID_CREDENTIALS_FORMAT: {
        code: 400,
        key: 'credentials.invalid.format',
        message: 'Invalid credentials format'
    },
    BIRTH_DATE_MISSED: {
        code: 400,
        key: 'birth.date.missed',
        message: 'Birth date is missed'
    },
    BIRTH_DATE_INVALID: {
        code: 400,
        key: 'birth.date.invalid',
        message: 'Birth date is invalid'
    },
    INVALID_ENTITY_ID: {
        code: 400,
        key: 'entity.id.invalid',
        message: 'Invalid entity id'
    },
    CREDENTIALS_MISSED: {
        code: 400,
        key: 'user.credentials.missed',
        message: "Missed user credentials"
    },
    MANUFACTURER_NOT_FOUND: {
        code: 404,
        key: 'manufacturer.not.found',
        message: 'Manufacturers not found'
    },
    MODEL_NOT_FOUND: {
        code: 404,
        key: 'model.not.found',
        message: 'Model not found'
    },
    VEHICLE_NOT_FOUND: {
        code: 404,
        key: 'vehicle.not.found',
        message: 'Vehicle not found'
    },
    OPERATION_FORBIDDEN: {
        code: 403,
        key: 'operation.forbidden',
        message: 'Operation is forbidden'
    },
    PHONE_NUMBER_INVALID: {
        code: 400,
        key: 'phone.number.invalid',
        message: 'Invalid phone number'
    },
    GENDER_NOT_FOUND: {
        code: 404,
        key: 'gender.not.found',
        message: 'Gender not found'
    },
    SETTING_NOT_FOUND: {
        code: 404,
        key: 'setting.not.found',
        message: 'Setting not found'
    },
    PREFERENCE_NOT_FOUND: {
        code: 404,
        key: 'setting.not.found',
        message: 'Setting not found'
    },
    VEHICLE_TYPE_NOT_FOUND: {
        code: 404,
        key: 'vehicle.type.not.found',
        message: 'Vehicle type not found'
    },
    UNAUTHORIZED: {
        code: 401,
        key: 'unauthorized',
        message: 'Unauthorized',
    }
}