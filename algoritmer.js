/* let pyramiderTilAimasjonerEl = document.querySelector(".pyramide-til-algoritme-animasjon");
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
        } 
        pyramiderTilAimasjonerEl.appendChild(rad)
    }
    console.log("tinger er tegnet")
}

lagPyramide(1,10,4)

*/






let animasjonJulieMetoden = [
    {
        fargeruter: [[0,0]], 
        farge: ["greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[1,0]], 
        farger: ["greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[2,0]], 
        farger: ["greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,0]], 
        farger: ["greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,0], [3,1]], 
        farger: ["white", "greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,1], [2,0], [2,1]], 
        farger: ["white", "white", "greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,1]], 
        farger: ["greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,1], [3,2]], 
        farger: ["white", "greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,2], [2,1], [1,0], [1,1]], 
        farger: ["white", "white", "white", "greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[2,1]], 
        farger: ["greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[2,1], [2,2]], 
        farger: ["white", "greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,2]], 
        farger: ["greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,2], [3,3]], 
        farger: ["white", "greenyellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[0,0], [1,1], [2,2], [3,3]], 
        farger: ["white", "white", "white", "white"],
        tallruter: [],
        tall: []
    }
]

let animasjonJulieMetodenSum = [
    {
        fargeruter: [[0,0], [1,0], [1,1]], 
        farge: ["greenyellow", "yellow", "yellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[1,0], [1,1], [2,0], [2,1]], 
        farger: ["greenyellow", "white", "yellow", "yellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[2,0], [2,1], [3,0], [3,1]], 
        farger: ["greenyellow", "white", "yellow", "yellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,0], [3,1], [4,0], [4,1]], 
        farger: ["greenyellow", "white", "yellow", "yellow"],
        tallruter: [[3,0]],
        tall: [8]
    },
    {
        ruter: [[3,0], [3,1], [4,0], [4,2]], 
        farger: ["white", "greenyellow", "white", "yellow"],
        tallruter: [[3,1]],
        tall: [7]
    },
    {
        ruter: [[3,1], [2,0], [2,1], [4,1], [4,2], [3,1], [3,2]], 
        farger: ["white", "white", "greenyellow", "white", "white", "yellow", "yellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,1], [3,2], [4,1], [4,2]], 
        farger: ["greenyellow", "white", "yellow", "yellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,1], [3,2], [4,1], [4,3]], 
        farger: ["white", "greenyellow", "white", "yellow"],
        tallruter: [[3,2]],
        tall: [14]
    },
    {
        ruter: [[3,2], [2,1], [1,0], [1,1], [4,2], [4,3], [2,2]], 
        farger: ["white", "yellow", "white", "greenyellow", "white", "white", "yellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[2,1], [2,2], [3,1], [3,2]], 
        farger: ["greenyellow", "white", "yellow", "yellow"],
        tallruter: [[2,1]],
        tall: [21]
    },
    {
        ruter: [[2,1], [2,2], [3,1], [3,3]], 
        farger: ["white", "greenyellow", "white", "yellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,2], [3,3], [4,2], [4,3]], 
        farger: ["greenyellow", "white", "yellow", "yellow"],
        tallruter: [],
        tall: []
    },
    {
        ruter: [[3,2], [3,3], [4,2], [4,4]], 
        farger: ["white", "greenyellow", "white", "yellow"],
        tallruter: [[3,3]],
        tall: [8]
    },
    {
        ruter: [[0,0], [1,1], [2,2], [3,3], [4,3], [4,4]], 
        farger: ["white", "white", "white", "white", "white", "white"],
        tallruter: [],
        tall: []
    }
]
