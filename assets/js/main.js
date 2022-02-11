let price = document.getElementById("priceInput");
let headsNum = document.getElementById("numOfPeop");
let serviceRate = document.getElementById("serviceRate");
let out = document.getElementById("output");

console.log("object");

function calcTip() {
    console.log(headsNum.value);
    let priceClear = Number(price.value);
    let headsClear = Number(headsNum.value);
    let serviceRateC = Number(serviceRate.value);

    if (priceClear > 0 && headsClear > 0 && serviceRateC > 0) {
        if (serviceRateC === 1) {
            out.innerHTML = ("Das Trinkgeld beträgt: " + priceClear * 0.02 + " €" + `<br>` + "Die Gesamtsumme beträgt: " + priceClear * 1.02 + ' €' + `<br>` + 'Der Preis pro Person ist: ' + (priceClear * 1.02) / headsClear + ' €');
        } else if (serviceRateC === 2) {
            out.innerHTML = ("Das Trinkgeld beträgt: " + priceClear * 0.1 + " €" + `<br>` + "Die Gesamtsumme beträgt: " + priceClear * 1.1 + ' €' + `<br>` + 'Der Preis pro Person ist: ' + (priceClear * 1.1) / headsClear + ' €');
        } else if (serviceRateC === 3) {
            out.innerHTML = ("Das Trinkgeld beträgt: " + priceClear * 0.2 + " €" + `<br>` + "Die Gesamtsumme beträgt: " + priceClear * 1.2 + ' €' + `<br>` + 'Der Preis pro Person ist: ' + (priceClear * 1.2) / headsClear + ' €');
        }

    } else if ((!priceClear) > 0) {
        out.innerHTML = "Bitte gib einen Preis ein!";
    } else if ((!headsClear) > 0) {
        out.innerHTML = "Bitte gib die Anzahl Personen ein, die sich die Rechnung teilen"
    } else if ((!serviceRateC) > 0) {
        out.innerHTML = "Bitte gib an, wie dein Service war!"
    } else {
        console.log("Error");
    }
}