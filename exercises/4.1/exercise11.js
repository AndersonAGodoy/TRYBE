let grossSalary = 1500.00;

if ( grossSalary <= 1556.94 ) {
    grossSalary -= grossSalary * 0.08;
} else if ( grossSalary >= 1556.95 && grossSalary < 2594.92 ) {
    grossSalary -= grossSalary * 0.09;
} else if ( grossSalary >= 2594.93 && grossSalary < 5189.82 ) {
    grossSalary -= grossSalary * 0.11;
} else {
    grossSalary -= 570.88;
}

let baseSalary = grossSalary;

if (baseSalary < 1903.98 ) {
    baseSalary = baseSalary;
} else if (baseSalary >= 1903.99 && baseSalary < 2826.65) {
    baseSalary -= (baseSalary * 0.075) - 142.80;
} else if (baseSalary >= 2826.66 && baseSalary < 3751.05 ) {
    baseSalary -= (baseSalary * 0.15) - 354.80;
} else if (baseSalary >= 3751.06 && baseSalary < 4664.68) {
    baseSalary -= (baseSalary * 0.225) - 636.13;
} else {
    baseSalary -= (baseSalary * 0.275) - 869.36;
}

console.log(baseSalary.toFixed(2));
