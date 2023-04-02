const ftRef = document.getElementById('ft');
const cmRef = document.getElementById('cm');
const inRef = document.getElementById('in');

// Functions to convert
let convertFromFt = () => {
    let ft = ftRef.value;

    // toFixed(2) limits the digits to 2.
    cmRef.value = (ft * 30.48).toFixed(2);
    inRef.value = (ft * 12).toFixed(2);
}


ftRef.addEventListener('input', convertFromFt);