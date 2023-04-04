const tabItems = document.querySelectorAll('.tabs');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Variables for Length, Weight, Temperature
const ftRef = document.getElementById('ft');
const cmRef = document.getElementById('cm');
const inRef = document.getElementById('in');

const kgRef = document.getElementById('kg');
const lbRef = document.getElementById('lb');
const ozRef = document.getElementById('oz');

const clRef = document.getElementById('cl');
const fhRef = document.getElementById('fh');
const kvRef = document.getElementById('kv');

// Functions to convert length
let convertFromFt = () => {
    let ft = ftRef.value;

    // toFixed(2) limits the digits to 2.
    cmRef.value = (ft * 30.48).toFixed(2);
    inRef.value = (ft * 12).toFixed(2);
}

let convertFromCm = () => {
    let cm = cmRef.value;

    ftRef.value = (cm / 30.48).toFixed(2);
    inRef.value = (cm / 2.54).toFixed(2);
}

let convertFromIn = () => {
    let inch = inRef.value;

    ftRef.value = (inch / 12).toFixed(2);
    cmRef.value = (inch * 2.54).toFixed(2);
}

ftRef.addEventListener('input', convertFromFt);
cmRef.addEventListener('input', convertFromCm);
inRef.addEventListener('input', convertFromIn);