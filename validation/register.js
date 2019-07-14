const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.username = validText(data.username) ? data.username : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";

    if (!Validator.isLength(data.username, { min: 5, max: 10 })) {
        errors.username = "Username must be between 5 and 10 characters.";
    }
    if (!Validator.isEmpty(data.username)) {
        errors.username = "Username field is required.";
    }

    if (!Validator.isEmpty(data.age)) {
        errors.age = "Age field is required.";
    }
    if (!Validator.isNumeric(data.age)) {
        errors.age = "Age must be a number between 12 and 100.";
    }

    if (!Validator.isLength(data.password, { min: 5, max: 10 })) {
        errors.password = "Password must be between 5 and 10 characters.";
    }
    if (!Validator.isEmpty(data.password)) {
        errors.age = "Password field is required.";
    }

    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password fields must match.";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}