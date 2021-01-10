let bases = [];
let netherBases = [];

let userData = {
    claimMain: {
        username: "Spawn",
        X: 0,
        Z: 0,
        desc: "Don't build near"
    },
    claim1: {
        username: "SpokeyPandeh",
        X: 1372,
        Z: -138,
        desc: "Don't build near"
    },
    claim2: {
        username: "DavidAdams/Kamizzel/Miss_Ghostie",
        X: 221,
        Z: -732,
        desc: "Don't build near"
    },
    claim3: {
        username: "A4PC",
        X: -880,
        Z: -830,
        desc: "Don't build near"
    },
    claim4: {
        username: "miggs1011",
        X: -2900,
        Z: 3300,
        desc: "Don't build near"
    },
    claim5: {
        username: "DaMightyDumpling",
        X: 608,
        Z: 211,
        desc: "Don't build near"
    },
    claim6: {
        username: "A4PC",
        X: -4300,
        Z: -2700,
        desc: "Don't build near"
    },
    claim7: {
        username: "AmyUwU",
        X: -2136,
        Z: 2453,
        desc: "Don't build near"
    },
    claim8: {
        username: "miggs1011",
        X: -3825,
        Z: 4434,
        desc: "Don't build near"
    },
    claim9: {
        username: "Seasock/ComfortableBoi/SpiredDwarf",
        X: 2958,
        Z: -3061,
        desc: "Don't build near"
    },
    claim10: {
        username: "Vixezia/Facelessgamer231",
        X: 1748,
        Z: 1705,
        desc: "Don't build near"
    },
    claim11: {
        username: "AmyUwU",
        X: -4641,
        Z: 4032,
        desc: "Don't build near"
    },
    claim12: {
        username: "loby",
        X: -502,
        Z: -260,
        desc: "Don't build near"
    },
    claim13: {
        username: "Foming",
        X: -1452,
        Z: 229,
        desc: "Don't build near"
    },
    claim14: {
        username: "AmyUwU/Lynck",
        X: -5027,
        Z: 4029,
        desc: "Don't build near"
    },
    claim15: {
        username: "MiskyChan/NotRainyPaws",
        X: 718,
        Z: 2757,
        desc: "Don't build near"
    },
    claim16: {
        username: "TheWilburDog",
        X: -1000,
        Z: 2250,
        desc: "Ask before building"
    },
    claim17: {
        username: "DigitalRabbit/Zenix/Benster",
        X: 885,
        Z: 2820,
        desc: "Don't build near"
    },
    claim18: {
        username: "A4PC",
        X: -8200,
        Z: -5000,
        desc: "Don't build near"
    },
    claim19: {
        username: "FantasyWolfie",
        X: -182,
        Z: -686,
        desc: "Ask before building"
    },
    claim: {
        username: "Fhgui",
        X: -4270,
        Z: 1250,
        desc: "Don't build near"
    },
};


let userNetherData = {
    claim: {
        username: "Spawn",
        X: 0,
        Z: 0,
        desc: "150x150 spawn claim"
    },
}


for (user in userData) {
    bases.push([userData[user].X, userData[user].Z, userData[user].username, userData[user].desc])
}



for (user in userNetherData) {
    netherBases.push([userNetherData[user].X, userNetherData[user].Z, userNetherData[user].username, userNetherData[user].desc])
}

console.log(netherBases)



