let plasseringer;
let lavestePlasseringer;
let høyesteVerdi = 0;
let pyramide = [];
let sumPyramide = [];
let plassPyramide = [];
let pyramideEl = document.querySelector("#pyramide");

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
    }
}

function sjekkVerdi(verdi, plassering) {
    if (verdi > høyesteVerdi) {
        høyesteVerdi = verdi
        plasseringer = plassering
    }
}

function finnRute2(plass, rad, verdi, plassering){
    if (rad < pyramide.length - 1) {
        if (sumPyramide[rad+1][plass] != 0 && sumPyramide[rad+1][plass+1] != 0) {
            if (sumPyramide[rad+1][plass] > sumPyramide[rad+1][plass+1]) {
                sumPyramide[rad][plass] = pyramide[rad][plass] + sumPyramide[rad+1][plass]
                //console.log([plass].concat(plassPyramide[rad+1][plass]))
                plassPyramide[rad][plass] = [plass].concat(plassPyramide[rad+1][plass])
                sjekkVerdi(verdi + sumPyramide[rad+1][plass] + pyramide[rad][plass], plassering.concat(plassPyramide[rad+1][plass]))
            } else {
                sumPyramide[rad][plass] = pyramide[rad][plass] + sumPyramide[rad+1][plass+1]
                //console.log([plass].concat(plassPyramide[rad+1][plass+1]))
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

function fiinnHoyesteVedLokke(pyr){
    // Kopierer liste og ikke bare referansen siden den blir endret på
    let trekant = []
    for (let linje of pyr){
        trekant.push(Array.from(linje))
    }
    //let iterasjoner = 0
    for (let i = trekant.length-2;i>=0;i--){
        for (let j = 0; j<trekant[i].length;j++){
            //iterasjoner++
            trekant[i][j] += storste(trekant[i+1][j], trekant[i+1][j+1])
        }
    }
    return trekant[0][0]
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
    }
    let valgtKnapp = e.target
    if (valgtKnapp.id == "høyest") {
        fargelegg(plasseringer)
    } else {
        fargelegg(lavestePlasseringer)
    }
}

let antall_rader = Number(localStorage.getItem("raderlagring"))
let intervall_bunn = Number(localStorage.getItem("startlagring"))
let intervall_topp = Number(localStorage.getItem("sluttlagring"))
let farge = localStorage.getItem("fargelagring")
let minsteVerdi = antall_rader * intervall_topp

console.log(intervall_bunn)
console.log(intervall_topp)

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