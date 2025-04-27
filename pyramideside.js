let plasseringer;
let lavestePlasseringer;
let høyesteVerdi = 0;
let summer = [];
let pyramide = [];
let sumPyramide = [];
let plassPyramide = [];
let pyramideEl = document.querySelector("#pyramide");

let hastighet_liste = []
let iterasjonsliste = []

function finnRute(plass, rad, verdi, plassering){
    if (rad < pyramide.length - 1) {
        finnRute(plass, rad+1, verdi + pyramide[rad][plass], plassering.concat([plass]))
        finnRute(plass+1, rad+1, verdi + pyramide[rad][plass], plassering.concat([plass+1]))
    } else {
        if (verdi + pyramide[rad][plass] > høyesteVerdi) {
            høyesteVerdi = verdi + pyramide[rad][plass];
            plasseringer = plassering;
        }
        if (verdi + pyramide[rad][plass] < minsteVerdi) {
            minsteVerdi = verdi + pyramide[rad][plass];
            lavestePlasseringer = plassering;
        }
        summer.push(verdi + pyramide[rad][plass])
    }
}

function sjekkVerdi(verdi, plassering) {
    if (verdi > høyesteVerdi) {
        høyesteVerdi = verdi
        plasseringer = plassering
    }
}

function finnRute2(plass, rad, verdi, plassering){
    iterasjoner_julie_metoden++;
    if (rad < pyramide.length - 1) {
        if (sumPyramide[rad+1][plass] != 0 && sumPyramide[rad+1][plass+1] != 0) {
            if (sumPyramide[rad+1][plass] > sumPyramide[rad+1][plass+1]) {
                sumPyramide[rad][plass] = pyramide[rad][plass] + sumPyramide[rad+1][plass]
                plassPyramide[rad][plass] = [plass].concat(plassPyramide[rad+1][plass])
                sjekkVerdi(verdi + sumPyramide[rad+1][plass] + pyramide[rad][plass], plassering.concat(plassPyramide[rad+1][plass]))
            } else {
                sumPyramide[rad][plass] = pyramide[rad][plass] + sumPyramide[rad+1][plass+1]
                plassPyramide[rad][plass] = [plass].concat(plassPyramide[rad+1][plass+1])
                sjekkVerdi(verdi + sumPyramide[rad+1][plass+1] + pyramide[rad][plass], plassering.concat(plassPyramide[rad+1][plass+1]))
            }
        } else {
            finnRute2(plass, rad+1, verdi + pyramide[rad][plass], plassering.concat([plass]))
            finnRute2(plass+1, rad+1, verdi + pyramide[rad][plass], plassering.concat([plass + 1]))
        }
    } else {
        sjekkVerdi(verdi + pyramide[rad][plass], plassering)
    }
}

function storste(a,b){
    if (a > b){
        return a
    } else {
        return b
    }
}

function finnHoyesteVedLokke(pyr){
    // Kopierer liste og ikke bare referansen siden den blir endret på
    let trekant = []
    for (let linje of pyr){
        trekant.push(Array.from(linje))
    }
    //let iterasjoner = 0
    for (let i = trekant.length-2;i>=0;i--){
        for (let j = 0; j<trekant[i].length;j++){
            iterasjoner_sum_oppover++;
            trekant[i][j] += storste(trekant[i+1][j], trekant[i+1][j+1])
        }
    }
    return trekant[0][0]
}

function finnBesteSti(rad, index){
    iterasjoner_rekursiv++;
    let sum = pyramide[rad][index]
    if (rad < pyramide.length - 1){
        let sum_venstre = finnBesteSti(rad+1, index)
        let sum_hoyre = finnBesteSti(rad+1, index+1)
        if (sum_venstre > sum_hoyre){
            sum += sum_venstre
        } else {
            sum += sum_hoyre
        }
    }
    return sum
}

function lagPyramide(start, slutt, rader) {
    for (let i = 1; i <= rader; i++) {
        let rad_liste = []
        let rad_plass_liste = []
        let rad_sum_liste = []
        let rad = document.createElement("div")
        rad.setAttribute("class", "pyramiderad")
        for (let j = 0; j < i; j++) {
            let tall = Math.floor(Math.random()*(slutt-start + 1)+start)
            let rute = document.createElement("div")
            rute.innerText = tall
            rute.setAttribute("class", "tallrute")
            rad_liste.push(tall)
            rad.appendChild(rute)
            if (i != rader) {
                rad_plass_liste.push([])
                rad_sum_liste.push(0)
            } else {
                rad_plass_liste.push(j)
                rad_sum_liste.push(tall)
            }
        }
        plassPyramide.push(rad_plass_liste)
        sumPyramide.push(rad_sum_liste)
        pyramide.push(rad_liste)
        pyramideEl.appendChild(rad)
    }
}

let animasjontimeouts = []

function fargelegg(plasseringer) {
    // Fjerner pågående animasjoner
    for (let timeout of animasjontimeouts){
        clearTimeout(timeout)
    }
    animasjontimeouts = []

    let rader = document.querySelectorAll(".pyramiderad")
    for (let i = 0; i < pyramide.length; i++) {
        animasjontimeouts.push( // Legger til alle timeoutene i en liste slik at de kan bli fjernet midt i animasjonen
            setTimeout(function () {
                let rute = rader[i].querySelectorAll("div")[plasseringer[i]]
                for (let j = 1; j<=100; j++){
                    rute.style.color = tekstfargeRiktigeRuter
                    animasjontimeouts.push(
                        setTimeout(function(){
                            rute.style.background = "linear-gradient(0deg,white " +(100-j)+"%," + farge +" "+(100-j)+"%)"
                        }, 5*j)
                    )
                }
            }, 500*i)
        )
    }
}

function byttSøk(e) {
    let ruter = document.querySelectorAll(".tallrute")
    for (let i = 0; i < ruter.length; i++) {
        ruter[i].style.background = "white"
        ruter[i].style.color = "black"
    }
    let valgtKnapp = e.target
    if (valgtKnapp.id == "høyest") {
        fargelegg(plasseringer)
    } else {
        fargelegg(lavestePlasseringer)
    }
}

function sorterTall(a, b) {
    return a-b;
}


let startverdier_i_intervall;
let sluttverdier_i_intervall;
let antall_i_intervall;
let navn_kategorier_sektordiagram = [];

function lagSektordiagram() {
    summer.sort(sorterTall)
    let antall_inndelinger = 4;
    let differanse = summer[summer.length-1] - summer[0]
    if (summer.length < antall_inndelinger) {
        antall_inndelinger = summer.length
    }
    if (differanse < antall_inndelinger) {
        antall_inndelinger = differanse + 1
    }
    let rest = (differanse+1) % antall_inndelinger
    let intervall = (differanse+1 - rest) / antall_inndelinger
    startverdier_i_intervall = []
    sluttverdier_i_intervall = []
    antall_i_intervall = Array(antall_inndelinger).fill(0)
    console.log(antall_i_intervall)
    console.log(differanse, antall_inndelinger, rest, intervall)
    let verdi = summer[0]
    for (let i = 0; i < antall_inndelinger; i++) {
        startverdier_i_intervall.push(verdi)
        verdi += intervall;
        if (rest > 0) {
            verdi++;
            rest--;
        }
        sluttverdier_i_intervall.push(verdi-1)
        if (startverdier_i_intervall[i] == sluttverdier_i_intervall[i]) {
            navn_kategorier_sektordiagram.push(String(startverdier_i_intervall[i]))
        } else {
            navn_kategorier_sektordiagram.push(String(startverdier_i_intervall[i] + "-" + sluttverdier_i_intervall[i]))
        }
    }
    console.log(startverdier_i_intervall)
    console.log(sluttverdier_i_intervall)
    for (let i = 0; i < summer.length; i++) {
        let plassering = 0;
        while (summer[i] > sluttverdier_i_intervall[plassering]) {
            plassering++;
        }
        antall_i_intervall[plassering]++;
    }
    console.log("hei", antall_i_intervall)
}

function fraHexTilRGBListe(hex){
    rgb = [0,0,0]
    for (let i=1;i<hex.length;i++){
        let value
        if (hex[i] == "a"){
            value = 10
        } else if ((hex[i] == "b")){
            value = 11
        } else if ((hex[i] == "c")){
            value = 12
        } else if ((hex[i] == "d")){
            value = 13
        } else if ((hex[i] == "e")){
            value = 14
        } else if ((hex[i] == "f")){
            value = 15
        } else {
            value = Number(hex[i])
        }
        if (i%2 != 0){
            rgb[Math.floor((i-1)/2)] += value*16
        } else{
            rgb[Math.floor((i-1)/2)] += value
        }
    }
    return rgb
}

function fraTiTilSekstenTallsSystem(titall){
    if (titall == 10){
        return "a"
    } else if (titall == 11){
        return "b"
    } else if (titall == 12){
        return "c"
    } else if (titall == 13){
        return "d"
    } else if (titall == 14){
        return "e"
    } else if (titall == 15){
        return "f"
    } else {
        return titall
    }
}

function fraRGBListeTilHex(rgb){
    let hex = "#"
    for(let primerfarge of rgb){
        let seksten_plass = Math.floor(primerfarge/16)
        hex += fraTiTilSekstenTallsSystem(seksten_plass)
        let enkelt_plass = primerfarge%16
        hex += fraTiTilSekstenTallsSystem(enkelt_plass)
    }
    return hex
}

let antall_rader = Number(localStorage.getItem("raderlagring"))
let intervall_bunn = Number(localStorage.getItem("startlagring"))
let intervall_topp = Number(localStorage.getItem("sluttlagring"))
let farge = localStorage.getItem("fargelagring")

let minsteVerdi = antall_rader * intervall_topp

// Velger passende tekstfarge til rutene som skal endre farge (baseres på brukerens farge)
let farge_som_rgb = fraHexTilRGBListe(farge)
/* for (let i = 0; i < farge_som_rgb.length; i++){
    farge_som_rgb[i] = 255-farge_som_rgb[i]

} */

function luminesens([r, g, b]) { // Magisk lumeninesens-utregning
    return (0.299 * r + 0.587 * g + 0.114 * b)/255
}

function forskjellLumin(rgb1, rgb2) {
    let farge1 = luminesens(rgb1);
    let farge2 = luminesens(rgb2);
    return Math.max(farge1, farge2) - Math.min(farge1, farge2);
}
function finnBesteFargeTilfeldig(bakgrunnRGB, antallForsok = 30) {
    let bestKontrast = 0;
    let bestFarge = [0, 0, 0];

    for (let i = 0; i < antallForsok; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let kontrast = forskjellLumin(bakgrunnRGB, [r, g, b]);
        if (kontrast > bestKontrast) {
            bestKontrast = kontrast;
            bestFarge = [r, g, b];
        }
    }

    return bestFarge;
}

let tekstfargeRiktigeRuter = fraRGBListeTilHex(finnBesteFargeTilfeldig(farge_som_rgb))


lagPyramide(intervall_bunn,intervall_topp,antall_rader)
// finnRute2(0,0,0,[0])
finnRute(0,0,0,[0])

let mulighet_tekst = document.querySelector("#antall-muligheter")
mulighet_tekst.innerText += " " + 2**(antall_rader-1)

let høyeste_sum_tekst = document.querySelector("#høyeste-sum")
høyeste_sum_tekst.innerText += " " + høyesteVerdi

let laveste_sum_tekst = document.querySelector("#laveste-sum")
laveste_sum_tekst.innerText += " " + minsteVerdi

let søkKnapperEl = document.querySelectorAll(".søk-instilling-knapp")
for (let i = 0; i < søkKnapperEl.length; i++) {
    søkKnapperEl[i].addEventListener("change", byttSøk);
}

fargelegg(plasseringer)

console.log(pyramide)
console.log(sumPyramide)
console.log(plassPyramide)
console.log(plasseringer)
console.log(høyesteVerdi)

lagSektordiagram()
console.log(summer)
console.log(navn_kategorier_sektordiagram)

let bitfarger = [
  "#9467CB",
  "#6DB1BF",
  "#ECE4B7",
  "#5B9A74"
];

new Chart("sumfordelingsdiagram", {
  type: "pie",
  data: {
    labels: navn_kategorier_sektordiagram,
    datasets: [{
      backgroundColor: bitfarger,
      data: antall_i_intervall
    }]
  },
  options: {
    title: {
      display: true,
      text: "Fordeling av sum"
    }
  }
});

let repetisjoner = 10000
let hastigheter = [];
let iterasjoner = [];

let iterasjoner_rekursiv = 0;
let t0 = performance.now();
for (let i=0;i<repetisjoner;i++){
    //console.time("Rek")
    finnBesteSti(0,0)
    //console.timeEnd("Rek")
}
let t1 = performance.now();
hastigheter.push((t1-t0)/repetisjoner)
iterasjoner.push(iterasjoner_rekursiv)

let iterasjoner_julie_metoden = 0;
t0 = performance.now()
for (let i=0;i<repetisjoner;i++){
    //console.time("Julie")
    finnRute2(0,0,0,[0])
    //console.timeEnd("Julie")
}
t1 = performance.now();
hastigheter.push((t1-t0)/repetisjoner)
iterasjoner.push(iterasjoner_julie_metoden)

let iterasjoner_sum_oppover = 0;
t0 = performance.now()
for (let i=0;i<repetisjoner;i++){
    //console.time("lokke")
    finnHoyesteVedLokke(pyramide)
    //console.timeEnd("lokke")
}
t1 = performance.now();
hastigheter.push((t1-t0)/repetisjoner)
iterasjoner.push(iterasjoner_sum_oppover)

console.log(hastigheter)
console.log(iterasjoner)

let x_verdier = ["Rekursiv", "Julie-metoden", "Sum oppover"];
let stolpefarger = ["#9467CB", "#6DB1BF","#ECE4B7"];

new Chart("hastighet-diagram", {
  type: "bar",
  data: {
    labels: x_verdier,
    datasets: [{
      backgroundColor: stolpefarger,
      data: hastigheter
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Hastighet (ms)"
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
new Chart("iterasjon-diagram", {
    type: "bar",
    data: {
      labels: x_verdier,
      datasets: [{
        backgroundColor: stolpefarger,
        data: iterasjoner
      }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Antall iterasjoner"
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });

let til_start_knapp = document.querySelector("#tilbake")
let til_algoritmer_knapp = document.querySelector("#mer-om-algoritme")

function tekstHover(e) {
    e.target.style.paddingLeft = "10px"
}
function tekstIkkeHover(e) {
    e.target.style.paddingLeft = "5px"
}

til_start_knapp.addEventListener("mouseover", tekstHover)
til_start_knapp.addEventListener("mouseout", tekstIkkeHover)
til_algoritmer_knapp.addEventListener("mouseover", tekstHover)
til_algoritmer_knapp.addEventListener("mouseout", tekstIkkeHover)