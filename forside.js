let startSliderEl = document.querySelector("#start-slider")
let displayVerdiStartEl = document.querySelector("#display-verdi-start")

let sluttSliderEl = document.querySelector("#slutt-slider")
let displayVerdiSluttEl = document.querySelector("#display-verdi-slutt")

let raderSliderEl = document.querySelector("#rader-slider")
let displayVerdiRaderEl = document.querySelector("#display-verdi-rader")

// Viser verdien til slideren uner den oppdateres når verdiene endres
document.addEventListener("DOMContentLoaded", () => {
    displayVerdiStartEl.innerHTML = startSliderEl.value
    startSliderEl.addEventListener("input", () => {
        displayVerdiStartEl.innerHTML = startSliderEl.value
    })

    displayVerdiSluttEl.innerHTML = sluttSliderEl.value
    sluttSliderEl.addEventListener("input", () => {
        displayVerdiSluttEl.innerHTML = sluttSliderEl.value
    })

    displayVerdiRaderEl.innerHTML = raderSliderEl.value
    raderSliderEl.addEventListener("input", () => {
        displayVerdiRaderEl.innerHTML = raderSliderEl.value
    })
})

startKnappEl = document.querySelector("#start-knapp")
startKnappEl.addEventListener("click", knappetrykk)

feilTekstEl = document.querySelector("#feil-tekst")
fargeVelgerEl = document.querySelector("#farge-velger")


// Funksjon for når startsknappen blir trykket
function knappetrykk(){
    // Gir brukeren beskjed om det ikke er gyldig input
    if (startSliderEl.value >= sluttSliderEl.value){
        feilTekstEl.innerHTML = "Start-verdien må være lavere enn slutt-verdien"
    } else { // Lagrer på localstorage og sender brukeren videre til pyramidesiden
        localStorage.setItem("startlagring",String(startSliderEl.value));
        localStorage.setItem("sluttlagring",String(sluttSliderEl.value));
        localStorage.setItem("raderlagring",String(raderSliderEl.value));
        localStorage.setItem("fargelagring",String(fargeVelgerEl.value));
        window.location.href = "pyramideside.html"
    }
}