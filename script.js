// Ting vi vil ha med:
/*
- Animasjon av pyramiden og riktige tall markerte
- Tid
- Fremstille data på en eller annen måte (sammenligne både forskjellige algoritmer og ulike antall rader)
- Flere algoritmer for å finne løsning (og sammenligne dem i data-ting, søylediagram)
- Velge antall rader og velge intervall til verdiene i pyramiden (slider eller tekst?, kanskje helst slider)
- kunne velge algritme (dropdown eller radiobutton)
- Si noe om antall mulige utfall til ulike størrelser på pyramiden

design:
- tabell eller liste med antall muligheter, høyeste verdi og laveste verdi, (gjennomsnitt???)
- Sektordiagram med fordeling av ulike verdier (0-10, 10-20, osv.) (laveste verdi som start, høyeste som slutt, dele i x forskjelige kategorier mellom)
*/

let startSliderEl = document.querySelector("#start-slider")
let displayVerdiStartEl = document.querySelector("#display-verdi-start")
displayVerdiStartEl.innerHTML = startSliderEl.value
startSliderEl.addEventListener("input", () => {
    displayVerdiStartEl.innerHTML = startSliderEl.value
})

let sluttSliderEl = document.querySelector("#slutt-slider")
let displayVerdiSluttEl = document.querySelector("#display-verdi-slutt")
displayVerdiSluttEl.innerHTML = sluttSliderEl.value
sluttSliderEl.addEventListener("input", () => {
    displayVerdiSluttEl.innerHTML = sluttSliderEl.value
})

let raderSliderEl = document.querySelector("#rader-slider")
let displayVerdiRaderEl = document.querySelector("#display-verdi-rader")
displayVerdiRaderEl.innerHTML = raderSliderEl.value
raderSliderEl.addEventListener("input", () => {
    displayVerdiRaderEl.innerHTML = raderSliderEl.value
})