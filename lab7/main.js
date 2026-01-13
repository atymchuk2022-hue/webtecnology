let n = parseInt(prompt("Введіть розмір ромба (n):"));

if (isNaN(n) || n < 1) {
    alert("Введіть коректне число більше 0");
} else {
    let result = "";

    // верхня частина ромба (включно з серединою)
    for (let i = 1; i <= n; i++) {
        result += " ".repeat(n - i);

        for (let j = 1; j <= i; j++) {
            result += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            result += j;
        }

        result += "\n";
    }

    // нижня частина ромба
    for (let i = n - 1; i >= 1; i--) {
        result += " ".repeat(n - i);

        for (let j = 1; j <= i; j++) {
            result += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            result += j;
        }

        result += "\n";
    }

    console.log(result);
    document.write("<pre>" + result + "</pre>");
}

function calculateHarmonicSeries() {
    let nString = prompt("Введіть ціле число n (верхню межу ряду):");
    let n = parseInt(nString);
    if (isNaN(n) || n <= 0) {
        console.log("Некоректне введення. Будь ласка, введіть додатне ціле число.");
        return;
    }
    let sum = 0;          
    let seriesOutput = "S = ";
    for (let i = 1; i <= n; i++) {
  
        let term = 1.0 / i;

        sum += term;
        if (i === 1) {
            seriesOutput += "1";
        } else {
            seriesOutput += ` + 1/${i}`;
        }
    }
    console.log("--- Результати обчислення ряду ---");
    console.log(seriesOutput);
    console.log(`Сума S для n = ${n} дорівнює: ${sum.toFixed(6)}`);
    console.log("----------------------------------");
}
calculateHarmonicSeries();