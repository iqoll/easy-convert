const tabItems = document.querySelectorAll('.tab-item');
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

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();

    // add border to current tab
    this.classList.add('tab-border');
    // add show class to current tab using DOM to grab content
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    tabContentItems.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen to click event
tabItems.forEach(item => item.addEventListener('click', selectItem))

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

// Function to convert weight
let convertFromKg = () => {
    kg = kgRef.value;

    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
}

let convertFromLb = () => {
    lb = pdRef.value;

    kgRef.value = (lb / 2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
}

let convertFromOz = () => {
    oz = ozRef.value;

    kgRef.value = (oz / 35.274).toFixed(2);
    lbRef.value = (oz / 16).toFixed(2);
}

kgRef.addEventListener('input', convertFromKg);
lbRef.addEventListener('input', convertFromLb);
ozRef.addEventListener('input', convertFromOz);
