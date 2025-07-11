// Definerer verdier og lister for å finne høyest verdi
let plasseringer;
let lavestePlasseringer;
let høyesteVerdi = 0;
let summer = [];
let pyramide = [];
let sumPyramide = [];   // Lagrer summer oppover
let plassPyramide = []; // Lagrer plassering med høyest verdi oppover
let pyramideEl = document.querySelector("#pyramide");   // Pyramide

// Rekursiv funksjon som sjekker alle muligheter
// Brukes ikke direkte i koden for å sammenlikne, men brukes til å finne plasseringer for høyeste og laveste rute, og til å finne alle summer
// Plass: plassering til rute som sjekkes
// Rad: rad til rute
// Verdi: total sum ned til den ruten
// Plassering: liste med plasseringene som er gått gjennom
function finnRute(plass, rad, verdi, plassering){
    if (rad < pyramide.length - 1) {
        // Finner verdien til hver av rutene under
        finnRute(plass, rad+1, verdi + pyramide[rad][plass], plassering.concat([plass]))
        finnRute(plass+1, rad+1, verdi + pyramide[rad][plass], plassering.concat([plass+1]))
    } else {
        // Sjekker om summen på bunnen er større enn høyeste sum
        if (verdi + pyramide[rad][plass] > høyesteVerdi) {
            høyesteVerdi = verdi + pyramide[rad][plass];
            plasseringer = plassering;
        }
        // Sjekker om summen på bunnen er lavere enn minste sum
        if (verdi + pyramide[rad][plass] < minsteVerdi) {
            minsteVerdi = verdi + pyramide[rad][plass];
            lavestePlasseringer = plassering;
        }
        // Legger til summen i en liste med alle mulige summer som brukes i sektordiagram
        summer.push(verdi + pyramide[rad][plass])
    }
}

// Sjekker verdier til finnRute2
function sjekkVerdi(verdi, plassering) {
    // Sjekker om sum er større enn høyeste sum
    if (verdi > høyesteVerdi) {
        høyesteVerdi = verdi
        // Lagrer plasseringene til rutene
        plasseringer = plassering
    }
}

// Rekursiv funksjon som ikke sjekker samme ruter mange ganger på rad
// Plass: plassering til rute som sjekkes
// Rad: rad til rute
// Verdi: total sum ned til den ruten
// Plassering: liste med plasseringene som er gått gjennom
function finnRute2(plass, rad, verdi, plassering){
    // Teller antall iterasjoner for statistikk
    iterasjoner_julie_metoden++;
    // Sjekker om begge rutene under rute er tomme i sum-pyramide
    if (sumPyramide[rad+1][plass] != 0 && sumPyramide[rad+1][plass+1] != 0) {
        // Finner den største summen av de under
        if (sumPyramide[rad+1][plass] > sumPyramide[rad+1][plass+1]) {
            // Oppdaterer tilsvarende rute i sum-pyramide med største sum under og egen verdi
            sumPyramide[rad][plass] = pyramide[rad][plass] + sumPyramide[rad+1][plass]
            // Oppdaterer tilsvarende rute i plass-pyramide med plasseringene fra største sum under og egen plassering
            plassPyramide[rad][plass] = [plass].concat(plassPyramide[rad+1][plass])
            // Sjekker om verdien i ruten pluss høyeste sum under er høyrere enn høyeste verdi
            sjekkVerdi(verdi + sumPyramide[rad+1][plass] + pyramide[rad][plass], plassering.concat(plassPyramide[rad+1][plass]))
        } else {
            // Samme som over, men for motsatt rute
            sumPyramide[rad][plass] = pyramide[rad][plass] + sumPyramide[rad+1][plass+1]
            plassPyramide[rad][plass] = [plass].concat(plassPyramide[rad+1][plass+1])
            sjekkVerdi(verdi + sumPyramide[rad+1][plass+1] + pyramide[rad][plass], plassering.concat(plassPyramide[rad+1][plass+1]))
        }
    } else {
        // Sjekker rutene under aktiv rute
        finnRute2(plass, rad+1, verdi + pyramide[rad][plass], plassering.concat([plass]))
        finnRute2(plass+1, rad+1, verdi + pyramide[rad][plass], plassering.concat([plass + 1]))
    }
}

function storste(a,b){
    // Returnerer største av to verdier
    if (a > b){
        return a
    } else {
        return b
    }
}

function sumOppover(pyr){
    // Kopierer liste og ikke bare referansen siden den blir endret på
    let trekant = []
    for (let linje of pyr){
        trekant.push(Array.from(linje))
    }
    // Går gjennom listen nedenifra og oppover og setter verdien til ruten til verdien den hadde fra
    // før pluss den største av verdiene under
    for (let i = trekant.length-2;i>=0;i--){
        for (let j = 0; j<trekant[i].length;j++){
            iterasjoner_sum_oppover++;
            trekant[i][j] += storste(trekant[i+1][j], trekant[i+1][j+1])
        }
    }
    // Returnerer den øverste ruten, som har svaret på oppgaven når programmet har jobbet seg helt til toppen
    return trekant[0][0]
}

function rekursivt(rad, index){
    // Finner svaret rekursivt
    // Returnerer sin egen verdi pluss den største av de to verdiene under, som man finner ved
    // ved å kalle på denne funksjonen med indexene til de to under helt til man når bunnen av
    // pyramiden, da returneres verdien ruten har
    iterasjoner_rekursiv++;
    let sum = pyramide[rad][index]
    if (rad < pyramide.length - 1){
        let sum_venstre = rekursivt(rad+1, index)
        let sum_hoyre = rekursivt(rad+1, index+1)
        if (sum_venstre > sum_hoyre){
            sum += sum_venstre
        } else {
            sum += sum_hoyre
        }
    }
    return sum
}

// Lager pyramide i js og css
function lagPyramide(start, slutt, rader) {
    // Gjentar for antall rader
    for (let i = 1; i <= rader; i++) {
        // Oppretter liste for rad
        let rad_liste = []
        let rad_plass_liste = [] // Liste med plasseringer som brukes i finnRute2
        let rad_sum_liste = []  // Liste med summer som brukes i finnRute2
        // Lager rad-element på nettsiden
        let rad = document.createElement("div")
        rad.setAttribute("class", "pyramiderad")
        // Gjentar for antall ruter i rad
        for (let j = 0; j < i; j++) {
            // Finner tilfeldig tall innenfor intervall
            let tall = Math.floor(Math.random()*(slutt-start + 1)+start)
            // Lager rute
            let rute = document.createElement("div")
            rute.innerText = tall
            rute.setAttribute("class", "tallrute")
            // Gjør rutene mindre om antall rader er mer enn 10
            if (antall_rader > 10) {
                rute.style.height = "20px"
                rute.style.width = "20px"
                rute.style.fontSize = "13px"
            }
            // Legger til rute i rad
            rad_liste.push(tall)
            rad.appendChild(rute)
            // Legger til place-holder elementer i plass- og sumlistene til finnRute2
            if (i != rader) {
                rad_plass_liste.push([])
                rad_sum_liste.push(0)
            } else {
                // Fyller bunnrad med samme rader som i original liste
                rad_plass_liste.push(j)
                // Fyller siste rad med egne index-er
                rad_sum_liste.push(tall)
            }
        }
        // Legger til fylte lister inn i hovedlister
        plassPyramide.push(rad_plass_liste)
        sumPyramide.push(rad_sum_liste)
        pyramide.push(rad_liste)
        // Legger til rad-element i pyramide-element
        pyramideEl.appendChild(rad)
    }
}

// Oppretter en liste som skal lagre alle timeOuts-ene slik at de kan avsluttes midt i en animasjon
let animasjontimeouts = []

function fargelegg(plasseringer) {
    // Fjerner pågående animasjoner
    for (let timeout of animasjontimeouts){
        clearTimeout(timeout)
    }
    animasjontimeouts = []

    // Animerer fargelegging av trekanten
    let rader = document.querySelectorAll(".pyramiderad")
    for (let i = 0; i < pyramide.length; i++) {
        animasjontimeouts.push( // Legger til alle timeoutene i en liste slik at de kan bli fjernet midt i animasjonen
            setTimeout(function () {
                let rute = rader[i].querySelectorAll("div")[plasseringer[i]]
                for (let j = 1; j<=100; j++){
                    rute.style.color = tekstfargeRiktigeRuter
                    animasjontimeouts.push( // Legger til i liste for at animasjonen skal kunne bli stoppet
                        setTimeout(function(){ // Gjør at rutene blir gradvis fargelagt
                            rute.style.background = "linear-gradient(0deg,white " +(100-j)+"%," + farge +" "+(100-j)+"%)"
                        }, 5*j)
                    )
                }
            }, 500*i)
        )
    }
}

// Bytter mellom å vise høyeste og laveste sum
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

// Sammenlikner verdier
function sorterTall(a, b) {
    return a-b;
}

// Definerer navn og antall tall per inndeling til sektordiagram
let antall_i_intervall;
let navn_kategorier_sektordiagram = [];

// Finner data til sektordiagram
function lagSektordiagram() {
    // Sorterer liste med antall mulige summer man kan få i pyramiden
    summer.sort(sorterTall)
    // Inndelinger i diagram
    let antall_inndelinger = 4;
    // Finner differanse mellom største og laveste sum
    let differanse = summer[summer.length-1] - summer[0]
    // Minker antall inndelinger om det er for få summer eller for liten differanse
    if (summer.length < antall_inndelinger) {
        antall_inndelinger = summer.length
    }
    if (differanse < antall_inndelinger) {
        antall_inndelinger = differanse + 1
    }
    // Finner rest
    let rest = (differanse+1) % antall_inndelinger
    // Finner intervall for hver seksjon i diagram
    let intervall = (differanse+1 - rest) / antall_inndelinger
    let startverdier_i_intervall = []
    let sluttverdier_i_intervall = []
    // Oppretter liste med 0-ere tilsvarende like mange elementer som antall inndelinger
    antall_i_intervall = Array(antall_inndelinger).fill(0)
    let verdi = summer[0]
    // Legger til start- og sluttverdier i hver sine lister
    for (let i = 0; i < antall_inndelinger; i++) {
        startverdier_i_intervall.push(verdi)
        verdi += intervall;
        // Fordeler rest på de første seksjonene
        if (rest > 0) {
            verdi++;
            rest--;
        }
        sluttverdier_i_intervall.push(verdi-1)
        // Finner navn til inndelingene basert på summene de innholder
        if (startverdier_i_intervall[i] == sluttverdier_i_intervall[i]) {
            navn_kategorier_sektordiagram.push(String(startverdier_i_intervall[i]))
        } else {
            navn_kategorier_sektordiagram.push(String(startverdier_i_intervall[i] + "-" + sluttverdier_i_intervall[i]))
        }
    }
    // Finner antall ruter som gir en sum innenfor de ulike intervallene
    for (let i = 0; i < summer.length; i++) {
        let plassering = 0;
        // Finner riktig intervall til sum
        while (summer[i] > sluttverdier_i_intervall[plassering]) {
            plassering++;
        }
        antall_i_intervall[plassering]++;
    }
}

// Henter verdier fra localStorage
let antall_rader = Number(localStorage.getItem("raderlagring"))
let intervall_bunn = Number(localStorage.getItem("startlagring"))
let intervall_topp = Number(localStorage.getItem("sluttlagring"))
let farge = localStorage.getItem("fargelagring")

function fraHexTilRGBListe(hex){
    // Gjør om farge fra hex til rgb
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
    // Gjør om et tall fra titalsssystem til hex
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
    // Gjør om fra rgb til hex
    let hex = "#"
    for(let primerfarge of rgb){
        let seksten_plass = Math.floor(primerfarge/16)
        hex += fraTiTilSekstenTallsSystem(seksten_plass)
        let enkelt_plass = primerfarge%16
        hex += fraTiTilSekstenTallsSystem(enkelt_plass)
    }
    return hex
}

function luminesens(rgb) { // Magisk lumeninesens-utregning hentet fra nettet
    return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2])/255
}

function forskjellLumin(rgb1, rgb2) {
    // FInner froskjellen i luminesens mellom to farger
    let farge1 = luminesens(rgb1);
    let farge2 = luminesens(rgb2);
    return Math.abs(farge1-farge2) //Math.max(farge1, farge2) - Math.min(farge1, farge2);
}
function finnBesteFargeTilfeldig(bakgrunnRGB, antallForsok = 30) {
    // Går gjennom antallForsok tilfeldige farger og returnerer den
    // fargen som har størst forskjell i luminensens med bakgrunnsfargen
    let bestKontrast = 0;
    let bestFarge = [0, 0, 0];

    for (let i = 0; i < antallForsok; i++) {
        // Lager en tilfeldig farge
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let kontrast = forskjellLumin(bakgrunnRGB, [r, g, b]);
        // Lagrer fargen om den har størst forskjell i luminesens hittil
        if (kontrast > bestKontrast) {
            bestKontrast = kontrast;
            bestFarge = [r, g, b];
        }
    }

    return bestFarge;
}

let farge_som_rgb = fraHexTilRGBListe(farge)
// Velger passende tekstfarge til rutene som skal endre farge (baseres på brukerens farge)
let tekstfargeRiktigeRuter = fraRGBListeTilHex(finnBesteFargeTilfeldig(farge_som_rgb))

// Setter minste verdi til høyest mulig for å unngå å velge for liten startverdi når man finner minste sum
let minsteVerdi = antall_rader * intervall_topp

// Lager pyramiden
lagPyramide(intervall_bunn,intervall_topp,antall_rader)
// Finner den beste ruten og lagrer veien
finnRute(0,0,0,[0])

// Legger til tekst i statistikk-boks
let mulighet_tekst = document.querySelector("#antall-muligheter")
mulighet_tekst.innerText += " " + 2**(antall_rader-1)

let høyeste_sum_tekst = document.querySelector("#høyeste-sum")
høyeste_sum_tekst.innerText += " " + høyesteVerdi

let laveste_sum_tekst = document.querySelector("#laveste-sum")
laveste_sum_tekst.innerText += " " + minsteVerdi

// Sjekker om knapp som endrer mellom høyeste og laveste verdi blir trykket
let søkKnapperEl = document.querySelectorAll(".søk-instilling-knapp")
for (let i = 0; i < søkKnapperEl.length; i++) {
    søkKnapperEl[i].addEventListener("change", byttSøk);
}

// Fargelegger de riktige rutene ved animasjon
fargelegg(plasseringer)

// Finner verdier til sektordiagram
lagSektordiagram()

// Farger i sektordiagram
let bitfarger = [
  "#9467CB",
  "#6DB1BF",
  "#ECE4B7",
  "#5B9A74"
];

// Kakediagram over fordelingen av verdier de forskjellige stiene får
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

// Antall repitisjoner påvirkes av antall rader for at kjøringen ikke skal ta for lang tid,
// men samtidig har nok iterasjoner når funksjonene tar kortere tid
let repetisjoner = Math.floor(10000/antall_rader)
let hastigheter = [];
let iterasjoner = [];

// Tar tiden og finner iterasjoner til rekursivt
let iterasjoner_rekursiv
let t0 = performance.now();
for (let i=0;i<repetisjoner;i++){ // Kjører flere ganger og tar gjennomsnittet for mer nøyaktig svar
    iterasjoner_rekursiv = 0;
    rekursivt(0,0)
}
let t1 = performance.now();
hastigheter.push((t1-t0)/repetisjoner)
iterasjoner.push(iterasjoner_rekursiv)

// Tar tiden og finner iterasjoner til Juliemetoden
let iterasjoner_julie_metoden
t0 = performance.now()
for (let i=0;i<repetisjoner;i++){ // Kjører flere ganger og tar gjennomsnittet for mer nøyaktig svar
    iterasjoner_julie_metoden = 0;
    // Lager sumPyramide
    sumPyramide = [Array.from(pyramide[pyramide.length-1])]
    for (let i = pyramide.length-2; i>=0;i--){
        let rad = []
        for (let j = 0; j<=i;j++)[
            rad.push(0)
        ]
        sumPyramide.unshift(rad)
    }
    finnRute2(0,0,0,[0])
}
t1 = performance.now();
hastigheter.push((t1-t0)/repetisjoner)
iterasjoner.push(iterasjoner_julie_metoden)


// Tar tiden og finner iterasjoner til sumOppover
let iterasjoner_sum_oppover
t0 = performance.now()
for (let i=0;i<repetisjoner;i++){ // Kjører flere ganger og tar gjennomsnittet for mer nøyaktig svar
    iterasjoner_sum_oppover = 0;
    sumOppover(pyramide)
}
t1 = performance.now();
hastigheter.push((t1-t0)/repetisjoner)
iterasjoner.push(iterasjoner_sum_oppover)


let x_verdier = ["Rekursiv", "Julie-metoden", "Sum oppover"];
let stolpefarger = ["#9467CB", "#6DB1BF","#ECE4B7"];

// Stolpediagram for hastighet
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
                beginAtZero: true // Gjør at y-aksen starter fra null
            }
        }]
    }
  }
});

// Stolpediagram over iterasjoner
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