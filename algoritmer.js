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

lagPyramide(1,10,4)*/
function animerPyramider(pyramideID, animasjonsliste, timeoutMs=1000){
    // Lager en liste med rutene
    let pyramideliste = []
    let pyramiden = document.querySelector(pyramideID)
    let rader = pyramiden.querySelectorAll(".pyramiderad")
    for (let rad of rader){
        pyramideliste.push(rad.querySelectorAll(".tallrute"))
    }

    // Kjører animasjonen
    for (let i = 0;i<animasjonsliste.length;i++){
        setTimeout(function (){
            console.log("hei")
            for (let j=0; j<animasjonsliste[i].fargeruter.length;j++){
                pyramideliste[animasjonsliste[i].fargeruter[j][0]][animasjonsliste[i].fargeruter[j][1]].style.backgroundColor = animasjonsliste[i].farge[j]
            }
            for (let j=0; j<animasjonsliste[i].tallRuter.length;j++){
                pyramideliste[animasjonsliste[i].tallRuter[j][0]][animasjonsliste[i].tallRuter[j][1]].innerHTML = animasjonsliste[i].tall[j]
            }
        }, i*timeoutMs)
    }
}

let animasjonerSumOppover = [
    {
        fargeruter:[[3,0], [4,0], [4,1]],
        farge:["greenyellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,0], [4,0], [4,1]],
        farge:["lightgreen", "lightgreen", "white"],
        tallRuter:[[3,0]],
        tall:[8]
    },
    {
        fargeruter:[[3,1], [4,1], [4,2]],
        farge:["greenyellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,1], [4,2], [4,1]],
        farge:["lightgreen", "lightgreen", "white"],
        tallRuter:[[3,1]],
        tall:[7]
    },
    {
        fargeruter:[[3,2], [4,2], [4,3]],
        farge:["greenyellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,2],[4,2], [4,3]],
        farge:["lightgreen", "lightgreen", "white"],
        tallRuter:[[3,2]],
        tall:[14]
    },
    {
        fargeruter:[[3,3], [4,3], [4,4]],
        farge:["greenyellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,3],[4,4], [4,3]],
        farge:["lightgreen", "lightgreen", "white"],
        tallRuter:[[3,3]],
        tall:[8]
    },
    {
        fargeruter:[[2,0], [3,0], [3,1], [4,0], [4,2]],
        farge:["greenyellow", "yellow", "yellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[2,0],[3,0], [4,0], [3,1], [4,2]],
        farge:["lightblue","lightblue", "lightblue", "lightgreen", "lightgreen"],
        tallRuter:[[2,0]],
        tall:[12]
    },
    {
        fargeruter:[[2,1], [3,1], [3,2], [4,2]],
        farge:["greenyellow", "yellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[2,1], [3,2], [4,2], [3,1]],
        farge:["lightblue","lightblue", "lightblue", "white"],
        tallRuter:[[2,1]],
        tall:[21]
    },
    {
        fargeruter:[[2,2], [3,2], [3,3], [4,2], [4,4]],
        farge:["greenyellow", "yellow", "yellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[2,2],[3,2], [4,2], [3,3], [4,4]],
        farge:["lightblue","lightblue", "lightblue", "white", "white"],
        tallRuter:[[2,2]],
        tall:[15]
    },
    {
        fargeruter:[[1,0], [2,0], [2,1], [3,0], [4,0], [2,1], [3,2], [4,2]],
        farge:["greenyellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[1,0],[2,1], [3,2], [4,2], [2,0], [3,0], [4,0]],
        farge:["lightgreen", "lightgreen", "lightgreen", "lightgreen", "white", "white", "white", "white"],
        tallRuter:[[1,0]],
        tall:[24]
    },
    {
        fargeruter:[[1,1], [2,1], [3,2], [4,2], [2,2]],
        farge:["greenyellow", "yellow", "yellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[1,1],[2,1], [3,2], [4,2], [2,2]],
        farge:["lightgreen", "lightgreen", "lightgreen", "lightgreen", "white"],
        tallRuter:[[1,1]],
        tall:[23]
    },
    {
        fargeruter:[[0,0], [2,1], [3,2], [4,2], [1,0], [1,1]],
        farge:["greenyellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[0,0],[2,1], [3,2], [4,2], [1,0], [1,1]],
        farge:["lightblue", "lightblue", "lightblue", "lightblue", "lightblue", "white"],
        tallRuter:[[0,0]],
        tall:[25]
    }
]

animerPyramider("#sumOppover", animasjonerSumOppover)

let animasjonJulieMetoden = [
    {
        fargeruter: [[0,0]], 
        farge: ["greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[1,0]], 
        farge: ["greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[2,0]], 
        farge: ["greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,0]], 
        farge: ["greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,0], [3,1]], 
        farge: ["white", "greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,1], [2,0], [2,1]], 
        farge: ["white", "white", "greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,1]], 
        farge: ["greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,1], [3,2]], 
        farge: ["white", "greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,2], [2,1], [1,0], [1,1]], 
        farge: ["white", "white", "white", "greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[2,1]], 
        farge: ["greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[2,1], [2,2]], 
        farge: ["white", "greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,2]], 
        farge: ["greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,2], [3,3]], 
        farge: ["white", "greenyellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[0,0], [1,1], [2,2], [3,3]], 
        farge: ["white", "white", "white", "white"],
        tallRuter: [],
        tall: []
    }
]

let animasjonJulieMetodenSum = [
    {
        fargeruter: [[0,0], [1,0], [1,1]], 
        farge: ["greenyellow", "yellow", "yellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[1,0], [1,1], [2,0], [2,1]], 
        farge: ["greenyellow", "white", "yellow", "yellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[2,0], [2,1], [3,0], [3,1]], 
        farge: ["greenyellow", "white", "yellow", "yellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,0], [3,1], [4,0], [4,1]], 
        farge: ["greenyellow", "white", "yellow", "yellow"],
        tallRuter: [[3,0]],
        tall: [8]
    },
    {
        fargeruter: [[3,0], [3,1], [4,0], [4,2]], 
        farge: ["white", "greenyellow", "white", "yellow"],
        tallRuter: [[3,1]],
        tall: [7]
    },
    {
        fargeruter: [[3,1], [2,0], [2,1], [4,1], [4,2], [3,1], [3,2]], 
        farge: ["white", "white", "greenyellow", "white", "white", "yellow", "yellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,1], [3,2], [4,1], [4,2]], 
        farge: ["greenyellow", "white", "yellow", "yellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,1], [3,2], [4,1], [4,3]], 
        farge: ["white", "greenyellow", "white", "yellow"],
        tallRuter: [[3,2]],
        tall: [14]
    },
    {
        fargeruter: [[3,2], [2,1], [1,0], [1,1], [4,2], [4,3], [2,2]], 
        farge: ["white", "yellow", "white", "greenyellow", "white", "white", "yellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[2,1], [2,2], [3,1], [3,2]], 
        farge: ["greenyellow", "white", "yellow", "yellow"],
        tallRuter: [[2,1]],
        tall: [21]
    },
    {
        fargeruter: [[2,1], [2,2], [3,1], [3,3]], 
        farge: ["white", "greenyellow", "white", "yellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,2], [3,3], [4,2], [4,3]], 
        farge: ["greenyellow", "white", "yellow", "yellow"],
        tallRuter: [],
        tall: []
    },
    {
        fargeruter: [[3,2], [3,3], [4,2], [4,4]], 
        farge: ["white", "greenyellow", "white", "yellow"],
        tallRuter: [[3,3]],
        tall: [8]
    },
    {
        fargeruter: [[0,0], [1,1], [2,2], [3,3], [4,3], [4,4]], 
        farge: ["white", "white", "white", "white", "white", "white"],
        tallRuter: [],
        tall: []
    }
]

let animasjonRekursiv = [
    {
        fargeruter:[[0,0], [1,0]],
        farge:["lightblue", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[2,0]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,0]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,0]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,1], [4,0]],
        farge:["yellow", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,1], [3,0], [4,1]],
        farge:["yellow", "white", "yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,1]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,2], [4,1]],
        farge:["yellow", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[2,1], [4,2], [3,1], [2,0]],
        farge:["yellow", "white", "white", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,1]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,1]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,2], [4,1]],
        farge:["yellow", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,2], [4,2], [3,1]],
        farge:["yellow", "white", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,2]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,3], [4,2]],
        farge:["yellow", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[1,1], [1,0], [4,3], [3,2], [1,2], [1,0]],
        farge:["yellow", "white", "white", "white", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[2,1]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,1]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,1]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,2], [4,1]],
        farge:["yellow", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,2], [4,2], [3,1],],
        farge:["yellow", "white", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,2]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,3], [4,2]],
        farge:["yellow", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[2,2], [4,3], [3,2], [2, 1]],
        farge:["yellow", "white", "white", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,2]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,2]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,3], [4,2]],
        farge:["yellow", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[3,3], [4,3], [3,2]],
        farge:["yellow", "white", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,3]],
        farge:["yellow"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[4,4], [4,3]],
        farge:["yellow", "white"],
        tallRuter:[],
        tall:[]
    },
    {
        fargeruter:[[1,1], [2,2], [3,3], [4,4], [1, 0], [2, 1], [3, 2], [4, 2]],
        farge:["white", "white", "white", "white", "lightblue", "lightblue", "lightblue", "lightblue"],
        tallRuter:[],
        tall:[]
    }
];

animerPyramider("#julie-metode", animasjonJulieMetoden)
animerPyramider("#julie-metode-sum", animasjonJulieMetodenSum)
animerPyramider("#rekursivt", animasjonRekursiv, timeoutMs=200)
