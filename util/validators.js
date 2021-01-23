module.exports.validateRegisterInput = {
    username,
    email,
    password,
    confirmPassword
} => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username must not be empty, please'
    }
    if(email.trim() === ''){
        errors.username = 'Email must not be empty, please'
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
    }
}