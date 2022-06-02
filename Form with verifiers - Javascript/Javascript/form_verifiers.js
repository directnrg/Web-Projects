

var formValidation = true;

function validateRequiredFields() {

    var inputElements = document.querySelectorAll("#memberInfo input[required]");
    var errorDiv = document.getElementById("errorText");
    var currentElement;

    for (var i = 0; i < inputElements.length; i++) {
        currentElement = inputElements[i];
        if (currentElement.value === "") {
            currentElement.style.background = "rgb(255,233,233)";
            errorDiv.innerHTML = "Please complete the highlighted fields.";
            errorDiv.style.display = "block";

        } else {
            currentElement.style.background = "";
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    }
}

function validateCadPostalCode() {
    var postalCode = document.getElementById("cadPostalCodeInput");
    var cadPostalCodeCheck = /^([a-zA-Z]\d[a-zA-Z][-]?\d[a-zA-Z]\d)$/;
    var postalCodeError = document.getElementById("postalCodeError");

    try {

        if (cadPostalCodeCheck.test(postalCode.value) === false) {
            throw "Postal code must match Canadian format (i.e: A1A 1A1)";
        } else {
            postalCode.style.background = "white";
        }

        postalCodeError.style.display = "none";
        postalCodeError.innerHTML = "";
    }
    catch (msg) {
        postalCodeError.style.display = "block";
        postalCodeError.innerHTML = msg;
        postalCode.style.background = "rgb(255,233,233)";
        formValidation = false;
    }
}

function validatePassword() {
    var pw1Input = document.getElementById("pw1Input");
    var pw2Input = document.getElementById("pw2Input");
    var passwordErrorText = document.getElementById("pwErrorText");
    var passwordcheck = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
    ;
    var passwordValidation = true;

    try {
        if (passwordcheck.test(pw2Input.value) === false || (pw1Input.value === "")) {
            pw1Input.style.background = "rgb(255,233,233)";
            pw2Input.style.background = "rgb(255,233,233)";
            passwordValidation = false;

            if (passwordValidation === false) {
                throw "Password must be at least 8 characters, 1 upper-case letter, 1 lower-case letter and 1 symbol.";
            }

        } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
            throw "Passwords must match";
        } else {
            pw1Input.style.background = "white";
        }

        pw1Input.style.background = "";
        pw2Input.style.background = "";
        passwordErrorText.style.display = "none";
        passwordErrorText.innerHTML = "";
    }
    catch (msg) {
        passwordErrorText.style.display = "block";
        passwordErrorText.innerHTML = msg;
        formValidation = false;
    }
}

function validateAge() {
    var ageInput = document.querySelector("#ageInput");
    var ageError = document.getElementById("ageErrorText");
    var minimumValidAge = 18;
    var ageValidation = true;

    try {

        if (ageInput.value < minimumValidAge || (ageInput.value === "")) {
            ageInput.style.background = "rgb(255,233,233)";
            ageValidation = false;
            if (ageValidation === false) {
                throw "Please insert a valid age. You must be at least 18 years old to register.";
            }
        } else {
            ageInput.style.background = "white";
        }

        ageError.style.display = "none";
        ageError.innerHTML = "";
    }
    catch (msg) {
        ageError.style.display = "block";
        ageError.innerHTML = msg;
        formValidation = false;
    }
}

function validateEmailAddress() {

    var emailInput = document.getElementById("emailInput");
    var emailError = document.getElementById("emailErrorText");
    var emailAddressCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    var emailValidation = true;

    try {
        if (emailAddressCheck.test(emailInput.value) === false || (emailInput.value === "")) {
            emailInput.style.background = "rgb(255,233,233)";
            emailValidation = false;
            if (emailValidation === false) {
                throw "Please provide a valid E-mail address. Format should be test@test.com";
            }
        } else {
            emailInput.style.background = "white";
        }

        emailError.style.display = "none";
        emailError.innerHTML = "";
    }
    catch (msg) {
        emailError.style.display = "block";
        emailError.innerHTML = msg;
        formValidation = false;
    }
}

function validateProvince() {
    var availableProvinces = ["QC", "ON", "MN", "SK", "AB", "BC"];
    var provinceInput = document.getElementById("provinceInput");
    var provinceError = document.getElementById("provinceErrorText");

    try {
        for (var i = 0; i <= availableProvinces.length; i++) {
            if (provinceInput.value.toUpperCase() === availableProvinces[i]) {
                provinceInput.style.background = "white";
                i = 0;
                provinceError.style.display = "none";
                provinceError.innerHTML = "";
                break;
            }
            if (i === 6) {
                throw "Please provide a valid Province. Available provinces: QC, ON, MN, SK, AB, BC.";
            }
            if (provinceInput.value.toUpperCase() !== availableProvinces[i]) {
                continue;
            }
        }
    }

    catch (msg) {
        provinceError.style.display = "block";
        provinceError.innerHTML = msg;
        formValidation = false;

    }
}

/* validate form */
function validateForm(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false; // prevent form from submitting in IE8
    }
    formValidation = true;

    var firstNameInput = document.getElementById("firstNameInput");
    var lastNameInput = document.getElementById("lastNameInput");
    var cityInput = document.getElementById("cityInput");
    var addressInput = document.getElementById("addressInput");
    var provinceInput = document.getElementById("provinceInput");
    var postalCodeInput = document.getElementById("cadPostalCodeInput");
    var passwordInput = document.getElementById("pw2Input");
    var ageInput = document.getElementById("ageInput");
    var emailInput = document.getElementById("emailInput");
    if (firstNameInput.value === "" || lastNameInput.value === "" || cityInput.value === "" ||
        addressInput.value === "" || provinceInput.value === "" || postalCodeInput.value === "" ||
        ageInput.value === "" || passwordInput.value === "" || emailInput.value === "") {
        document.getElementById("errorText").innerHTML = "Please complete the highlighted fields.";
        document.getElementById("errorText").style.display = "block";
        formValidation = false;
        validateRequiredFields();
    }

    if (firstNameInput.value !== "" && lastNameInput.value !== "" && cityInput.value !== "" &&
        addressInput.value !== "" && provinceInput.value !== "" && postalCodeInput.value !== "" &&
        ageInput.value !== "" && passwordInput.value !== "" && emailInput.value !== "") {

        formValidation = true;
    }

    if (formValidation === true) {
        document.querySelectorAll("form")[0].submit();
        alert("Thanks for registering with our website, your customer record was created successfully.");
    }
}

function createEventListeners() {
    var provinceInput = document.getElementById("provinceInput");
    var postalCodeInput = document.getElementById("cadPostalCodeInput");
    var passwordInput = document.getElementById("pw2Input");
    var ageInput = document.getElementById("ageInput");
    var emailInput = document.getElementById("emailInput");

    if (postalCodeInput.addEventListener) {
        provinceInput.addEventListener("change", validateProvince, false);
        postalCodeInput.addEventListener("change", validateCadPostalCode, false);
        passwordInput.addEventListener("change", validatePassword, false);
        ageInput.addEventListener("change", validateAge, false);
        emailInput.addEventListener("change", validateEmailAddress, false);
    } else if (postalCodeInput.attachEvent) {
        provinceInput.attachEvent("onchange", validateProvince);
        postalCodeInput.attachEvent("onchange", validateCadPostalCode);
        passwordInput.attachEvent("onchange", validatePassword);
        ageInput.attachEvent("onchange", validateAge);
        emailInput.attachEvent("onchange", validateEmailAddress);
    }

    var form = document.getElementById("memberForm");
    var clearButton = document.getElementById("clearBtn");

    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm, false);
    }
    if (clearButton.addEventListener) {
        clearButton.addEventListener("reset", form);
    } else if (form.attachEvent) {
        clearButton.attachEvent("onreset", form);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}