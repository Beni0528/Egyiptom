let nev = prompt("Kérek egy nevet:")
document.getElementById("neved").innerHTML = nev;

document.getElementById("kijelzo").innerText = setInterval(displayTime, 1000);
function displayTime(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours < 10) {
    hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    let displayTime2 = `${hours}:${minutes}:${seconds}`;
    document.getElementById("kijelzo").innerText = displayTime2;
}

let startTime;
let timerId;
function startTimer() {
    startTime = Date.now();
    timerId = setInterval(updateElapsedTime, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

function updateElapsedTime() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    document.getElementById("elapsedTime").textContent = `Eltelt idő: ${elapsedTime} másodperc`;
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);

function submitQuiz() {
    const helyes = {
        Kérdés1: "Anubis",
        Kérdés2: "Ré",
        Kérdés3: "Ozirisz",
        Kérdés4: "Hórusz"
    };

    let pont = 0;
    let eredmeny = "<h2>Eredmények:</h2>";

    for (let kerdes in helyes) {
        const valasz = document.querySelector(`input[name="${kerdes}"]:checked`);
        if (valasz) {
            if (valasz.value === helyes[kerdes]) {
                pont++;
                eredmeny += `<p>${kerdes}: Helyes (${valasz.value})</p>`;
            } else {
                eredmeny += `<p>${kerdes}: Helytelen (Válaszod: ${valasz.value}, Helyes válasz: ${helyes[kerdes]})</p>`;
            }
        } else {
            eredmeny += `<p>${kerdes}: Nem válaszoltál</p>`;
        }
    }

    eredmeny += `<p>Összpontszám: ${pont} / ${Object.keys(helyes).length}</p>`;

    document.getElementById('result').innerHTML = eredmeny;
}