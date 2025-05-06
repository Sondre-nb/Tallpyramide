let eksempelpyramide = [[1],
                        [3,2],
                        [4,7,1],
                        [3,1,8,5],
                        [5,2,6,2,3]]

let eksempelpyramideJulieMetodeSum =  [[0],
                                    [0,0],
                                    [0,0,0],
                                    [0,0,0,0],
                                    [5,2,6,2,3]]

function resetTallIPyramide(ID){
    // Velger hvilken pyramide den skal resete seg til
    let fasit
    if (ID != "#julie-metode-sum"){
        fasit = eksempelpyramide
    } else {
        fasit = eksempelpyramideJulieMetodeSum
    }

    let pyr = document.querySelector(ID)
    let rader = pyr.querySelectorAll(".pyramiderad")
    for (let i=0; i<rader.length;i++){
        let ruter = rader[i].querySelectorAll(".tallrute")
        for (let j=0; j<ruter.length;j++){
            ruter[j].innerHTML = fasit[i][j]
        }
    }
}

function animerPyramider(pyramideID, animasjonsliste, timeoutsListe, timeoutMs=1000){
    // Lager en liste med rutene
    let pyramideliste = []
    let pyramiden = document.querySelector(pyramideID)
    let rader = pyramiden.querySelectorAll(".pyramiderad")
    for (let rad of rader){
        pyramideliste.push(rad.querySelectorAll(".tallrute"))
    }

    // Fjerner pågående animasjoner
    for (let timeout of timeoutsListe){
        clearTimeout(timeout)
    }
    timeoutsListe.length = 0 // Tømmer listen (liste = [] fungerer ikke fordi bare referansen endres og ikke innholdet)

    resetTallIPyramide(pyramideID) // Reseter tallene i pyramiden

    // Gjør alle rutene hvite
    for (let rad of pyramideliste){
        for (let rute of rad){
            rute.style.backgroundColor = "white"
        }
    }

    // Kjører animasjonen
    for (let i = 0;i<animasjonsliste.length;i++){
        timeoutsListe.push( // Legger til animasjonene i en liste slik at de kan fjernes senere
            setTimeout(function (){
                for (let j=0; j<animasjonsliste[i].fargeruter.length;j++){
                    pyramideliste[animasjonsliste[i].fargeruter[j][0]][animasjonsliste[i].fargeruter[j][1]].style.backgroundColor = animasjonsliste[i].farge[j]
                }
                for (let j=0; j<animasjonsliste[i].tallRuter.length;j++){
                    pyramideliste[animasjonsliste[i].tallRuter[j][0]][animasjonsliste[i].tallRuter[j][1]].innerHTML = animasjonsliste[i].tall[j]
                }
            }, i*timeoutMs)
        )
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
        fargeruter:[[1,1], [1,0], [4,3], [3,2]],
        farge:["yellow", "white", "white", "white"],
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

// Lister for å kunne stoppe pågående animasjoner
let timeoutsTilRekursiv = []
let timeoutsTilJulieMetode = []
let timeoutsTilJulieMetodeSum = []
let timeoutsTilSumOppover = []

function velgAnimasjon(e) {
    let knappID = e.target.id
    if (knappID == "rekursiv-animasjon-knapp") {
        animerPyramider("#rekursivt", animasjonRekursiv, timeoutsTilRekursiv, timeoutMs=200)
    } else if (knappID == "julie-animasjon-knapp") {
        animerPyramider("#julie-metode", animasjonJulieMetoden, timeoutsTilJulieMetode)
        animerPyramider("#julie-metode-sum", animasjonJulieMetodenSum, timeoutsTilJulieMetodeSum)
    } else {
        animerPyramider("#sumOppover", animasjonerSumOppover, timeoutsTilSumOppover)
    }
}

let start_animasjon_knapper = document.querySelectorAll(".animasjonsknapp")
for (let i = 0; i < start_animasjon_knapper.length; i++) {
    start_animasjon_knapper[i].addEventListener("click", velgAnimasjon);
}