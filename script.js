const input = document.getElementById("inputTemp");
const from = document.getElementById("fromUnit");
const to = document.getElementById("toUnit");
const result = document.getElementById("result");

/* LIVE CONVERSION */
function convert() {
    let val = parseFloat(input.value);

    if (isNaN(val)) {
        result.innerText = "Result: --";
        return;
    }

    let temp;

    if (from.value === "C") temp = val;
    else if (from.value === "F") temp = (val - 32) * 5/9;
    else temp = val - 273.15;

    let final;
    if (to.value === "C") final = temp;
    else if (to.value === "F") final = (temp * 9/5) + 32;
    else final = temp + 273.15;

    result.innerText = `Result: ${final.toFixed(2)} °${to.value}`;
}

/* AUTO LIVE */
input.addEventListener("input", convert);
from.addEventListener("change", convert);
to.addEventListener("change", convert);

/* DARK/LIGHT TOGGLE */
const toggle = document.getElementById("modeToggle");

toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark");
});