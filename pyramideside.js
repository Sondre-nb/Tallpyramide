let plasseringer;
let høyesteVerdi2 = 0;

function finnRute(plass, rad, verdi, plassering){
    // console.log(plassering)
    if (rad < tomPyramide.length - 1) {
        finnRute(plass, rad+1, verdi + tomPyramide[rad][plass], plassering.concat([plass]))
        finnRute(plass+1, rad+1, verdi + tomPyramide[rad][plass], plassering.concat([plass+1]))
    } else {
        if (verdi + tomPyramide[rad][plass] > høyesteVerdi2) {
            høyesteVerdi2 = verdi + tomPyramide[rad][plass]
            plasseringer = plassering
        }
    }
}

let høyesteVerdi3 = 0;

function sjekkVerdi2(verdi, plassering) {
    //console.log("j", plassering)
    if (verdi > høyesteVerdi3) {
        høyesteVerdi3 = verdi
        plasseringer = plassering
    }
}

function finnRute2(plass, rad, verdi, plassering){
    if (rad < tomPyramide.length - 1) {
        if (tomSumPyramide[rad+1][plass] != 0 && tomSumPyramide[rad+1][plass+1] != 0) {
            if (tomSumPyramide[rad+1][plass] > tomSumPyramide[rad+1][plass+1]) {
                tomSumPyramide[rad][plass] = tomPyramide[rad][plass] + tomSumPyramide[rad+1][plass]
                //console.log([plass].concat(tomPlassPyramide[rad+1][plass]))
                tomPlassPyramide[rad][plass] = [plass].concat(tomPlassPyramide[rad+1][plass])
                sjekkVerdi2(verdi + tomSumPyramide[rad+1][plass] + tomPyramide[rad][plass], plassering.concat(tomPlassPyramide[rad+1][plass]))
            } else {
                tomSumPyramide[rad][plass] = tomPyramide[rad][plass] + tomSumPyramide[rad+1][plass+1]
                //console.log([plass].concat(tomPlassPyramide[rad+1][plass+1]))
                tomPlassPyramide[rad][plass] = [plass].concat(tomPlassPyramide[rad+1][plass+1])
                sjekkVerdi2(verdi + tomSumPyramide[rad+1][plass+1] + tomPyramide[rad][plass], plassering.concat(tomPlassPyramide[rad+1][plass+1]))
            }
        } else {
            finnRute2(plass, rad+1, verdi + tomPyramide[rad][plass], plassering.concat([plass]))
            finnRute2(plass+1, rad+1, verdi + tomPyramide[rad][plass], plassering.concat([plass + 1]))
        }
    } else {
        sjekkVerdi2(verdi + tomPyramide[rad][plass], plassering)
    }
}

let tomPyramide = []
let tomSumPyramide = []
let tomPlassPyramide = []
let pyramideEl = document.querySelector("#pyramide")

function lagPyramide(start, slutt, rader) {
    for (let i = 1; i <= rader; i++) {
        let rad_liste = []
        let rad_plass_liste = []
        let rad_sum_liste = []
        let rad = document.createElement("div")
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
        tomPlassPyramide.push(rad_plass_liste)
        tomSumPyramide.push(rad_sum_liste)
        tomPyramide.push(rad_liste)
        pyramideEl.appendChild(rad)
    }
}

function fargelegg(plasseringer) {
    let rader = document.querySelectorAll("#pyramide > div")
    for (let i = 0; i < tomPyramide.length; i++) {
        let ruter = rader[i].querySelectorAll("div")
        ruter[plasseringer[i]].setAttribute("class", "tallrute riktigrute")
    }
}

lagPyramide(1,10,10)

console.log(tomPyramide)
console.log(tomSumPyramide)
console.log(tomPlassPyramide)

finnRute2(0,0,0,[0])

console.log(plasseringer)
console.log(høyesteVerdi3)
console.log(tomPlassPyramide)

fargelegg(plasseringer)