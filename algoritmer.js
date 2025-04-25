let pyramiderTilAimasjonerEl = document.querySelector(".pyramide-til-algoritme-animasjon");
let pyramide = []

function lagPyramide(start, slutt, rader) {
    for (let i = 1; i <= rader; i++) {
        let rad_liste = []
        let rad = document.createElement("div")
        rad.setAttribute("class", "pyramiderad")
        for (let j = 0; j < i; j++) {
            let tall = Math.floor(Math.random()*(slutt-start + 1)+start)
            let rute = document.createElement("div")
            rute.innerText = tall
            rute.setAttribute("class", "tallrute")
            rad_liste.push(tall)
            rad.appendChild(rute)
        }
        pyramide.push(rad_liste)
        /* for (let algoritme of pyramiderTilAimasjonerEl){
            algoritme.appendChild(rad)
        } */
        pyramiderTilAimasjonerEl.appendChild(rad)
    }
    console.log("tinger er tegnet")
}

lagPyramide(1,10,4)
