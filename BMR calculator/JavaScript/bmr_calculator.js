//tabs function
function openCalc(bmr, calcSelection) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(calcSelection).style.display = "block";
    bmr.currentTarget.className += " active";
}
// The original Harris–Benedict equations published in 1918 and 1919.

function calculateBmrImp() {
    var genderImp = document.getElementById("genderImp").selectedIndex;
    var age = document.getElementById("age").value;
    age = Number(age);

    //Weight & Height Variables Imperial
    var stones = document.getElementById("stones").value;
    var pounds = document.getElementById("pounds").value;
    var totalWeightImp = (Number(stones) * 14) + Number(pounds);
    var feet = document.getElementById("feet").value;
    var inches = document.getElementById("inches").value;
    var totalHeightImp = (Number(feet) * 12) + Number(inches);

    //Exercise frequency variables
    var sedentaryImp = document.getElementById("sedentaryImp").checked;
    var lightImp = document.getElementById("lightImp").checked;
    var moderateImp = document.getElementById("moderateImp").checked;
    var hardImp = document.getElementById("hardImp").checked;
    var veryHardImp = document.getElementById("veryHardImp").checked;
    
    var manBmrImp = 66 + (6.2 * totalWeightImp) + (12.7 * totalHeightImp) - (6.76 * age);
    var womanBmrImp = 655 + (4.35 * totalWeightImp) + (4.7 * totalHeightImp) - (4.7 * age);

    //Imperial BMR calculator

    // Man conditions
    if (genderImp == 1 && sedentaryImp == true) {
        alert(`Your BMR is ${manBmrImp.toFixed(2)}\nYour recommended consumption per day is 1608 Cal`);
    }
    if (genderImp == 1 && lightImp == true) {
        alert(`Your BMR is ${manBmrImp.toFixed(2)}\nYour recommended consumption per day is 1843 Cal`);
    }
    if (genderImp == 1 && moderateImp == true) {
        alert(`Your BMR is ${manBmrImp.toFixed(2)}\nYour recommended consumption per day is 1964 Cal`);
    }
    if (genderImp == 1 && hardImp == true) {
        alert(`Your BMR is ${manBmrImp.toFixed(2)}\nYour recommended consumption per day is 2077 Cal`);
    }
    if (genderImp == 1 && veryHardImp == true) {
        alert(`Your BMR is ${manBmrImp.toFixed(2)}\nYour recommended consumption per day is 2547 Cal`);
    }

    //Woman Conditions
    if (genderImp == 2 && sedentaryImp == true) {
        alert(`Your BMR is ${womanBmrImp.toFixed(2)}\nYour recommended consumption per day is 1608 Cal`);
    }
    if (genderImp == 2 && lightImp == true) {
        alert(`Your BMR is ${womanBmrImp.toFixed(2)}\nYour recommended consumption per day is 1843 Cal`);
    }
    if (genderImp == 2 && moderateImp == true) {
        alert(`Your BMR is ${womanBmrImp.toFixed(2)}\nYour recommended consumption per day is 1964 Cal`);
    }
    if (genderImp == 2 && hardImp == true) {
        alert(`Your BMR is ${womanBmrImp.toFixed(2)}\nYour recommended consumption per day is 2077 Cal`);
    }
    if (genderImp == 2 && veryHardImp == true) {
        alert(`Your BMR is ${womanBmrImp.toFixed(2)}\nYour recommended consumption per day is 2547 Cal`);
    }
}

//Metric BMR calculator

function calculateBmrMet() {
    var genderMet = document.getElementById("genderMet").selectedIndex;
    var age = document.getElementById("age").value;
    age = Number(age);

    //Weight & Height variables Metric
    var kilograms = document.getElementById("kilograms").value;
    kilograms = Number(kilograms);
    var meters = document.getElementById("meters").value;
    var centiMeters = document.getElementById("centiMeters").value;
    var totalHeightMet = (Number(meters) * 100) + Number(centiMeters);

    //Exercise frequency variables
    var sedentaryMet = document.getElementById("sedentaryMet").checked;
    var lightMet = document.getElementById("lightMet").checked;
    var moderateMet = document.getElementById("moderateMet").checked;
    var hardMet = document.getElementById("hardMet").checked;
    var veryHardMet = document.getElementById("veryHardMet").checked;

    var manBmrMet = 66.5 + (13.75 * kilograms) + (5.003 * totalHeightMet) - (6.755 * age);
    var womanBmrMet = 655 + (9.563 * kilograms) + (1.850 * totalHeightMet) - (4.676 * age);
    
    // Man conditions
    if (genderMet == 1 && sedentaryMet == true) {
        alert(`Your BMR is ${manBmrMet.toFixed(2)}\nYour recommended consumption per day is 1608 Cal`);
    }
    if (genderMet == 1 && lightMet == true) {
        alert(`Your BMR is ${manBmrMet.toFixed(2)}\nYour recommended consumption per day is 1843 Cal`);
    }
    if (genderMet == 1 && moderateMet == true) {
        alert(`Your BMR is ${manBmrMet.toFixed(2)}\nYour recommended consumption per day is 1964 Cal`);
    }
    if (genderMet == 1 && hardMet == true) {
        alert(`Your BMR is ${manBmrMet.toFixed(2)}\nYour recommended consumption per day is 2077 Cal`);
    }
    if (genderMet == 1 && veryHardMet == true) {
        alert(`Your BMR is ${manBmrMet.toFixed(2)}\nYour recommended consumption per day is 2547 Cal`);
    }

    //Woman Conditions
    if (genderMet == 2 && sedentaryMet == true) {
        alert(`Your BMR is ${womanBmrMet.toFixed(2)}\nYour recommended consumption per day is 1608 Cal`);
    }
    if (genderMet == 2 && lightMet == true) {
        alert(`Your BMR is ${womanBmrMet.toFixed(2)}\nYour recommended consumption per day is 1843 Cal`);
    }
    if (genderMet == 2 && moderateMet == true) {
        alert(`Your BMR is ${womanBmrMet.toFixed(2)}\nYour recommended consumption per day is 1964 Cal`);
    }
    if (genderMet == 2 && hardMet == true) {
        alert(`Your BMR is ${womanBmrMet.toFixed(2)}\nYour recommended consumption per day is 2077 Cal`);
    }
    if (genderMet == 2 && veryHardMet == true) {
        alert(`Your BMR is ${womanBmrMet.toFixed(2)}\nYour recommended consumption per day is 2547 Cal`);
    }
}

// sets all form field values to defaults
function resetForm() {
    document.getElementById("kilograms").value = 0;
    document.getElementById("meters").value = 0;
    document.getElementById("centimeters").value = 0;
    document.getElementById("feet").value = 0;
    document.getElementById("pounds").value = 0;
    document.getElementById("stones").value = 0;
    document.getElementById("age").value = 0;
    document.getElementById("gender").checked = false;
    document.addEventListener("load", resetForm, false);
}
