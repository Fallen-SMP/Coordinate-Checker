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
    claim20: {
        username: "Fhgui",
        X: -4270,
        Z: 1250,
        desc: "Don't build near"
    },
    claim21: {
        username: "Portal",
        X: 2498,
        Z: 2537,
        desc: "Allowed to build near"
    },
    claim22: {
        username: "NeapolitanGoblin",
        X: 1600,
        Z: -200,
        desc: "Don't build near"
    },
    claim23: {
        username: "W6H",
        X: 749,
        Z: 2256,
        desc: "Don't build near"
    },
    claim24: {
        username: "_R4IN/SenpaiHydraulic/Carnar/wolife0113/lime2lemon/Seasock/UselessName15",
        X: -4834,
        Z: -1917,
        desc: "Don't build near"
    },
    claim25: {
        username: "Cheekynoodlez",
        X: -1069,
        Z: -3213,
        desc: "Ask before building"
    },
    claim26: {
        username: "DigitalRabbit",
        X: 1545,
        Z: 3818,
        desc: "Don't build near"
    },
    claim27: {
        username: "JC_C",
        X: -863,
        Z: -1474,
        desc: "Don't build near"
    },
    claim28: {
        username: "Carnar",
        X: 704,
        Z: 1281,
        desc: "Ask before building"
    },
    claim29: {
        username: "AmyUwU/Lynck",
        X: -4940,
        Z: 3680,
        desc: "Ask before building"
    },
    claim30: {
        username: "RoyalBionic/Brooksy8704",
        X: 6261,
        Z: -271,
        desc: "Don't build near"
    },
    claim31: {
        username: "RoyalBionic/Brooksy8704",
        X: 7059,
        Z: 584,
        desc: "Don't build near"
    },
    claim32: {
        username: "Lemonboy",
        X: 600,
        Z: 1100,
        desc: "Ask before building"
    },
    claim33: {
        username: "PhyzyYT",
        X: 3160,
        Z: 1080,
        desc: "Ask before building"
    },
    claim34: {
        username: "CheekyNoodlez",
        X: -1757,
        Z: -3558,
        desc: "Don't build near"
    },
    claim35: {
        username: "Kamizzel/Miss_Ghostie",
        X: 527,
        Z: -1021,
        desc: "Don't build near"
    },
    claim36: {
        username: "Kamizzel/Miss_Ghostie",
        X: 580,
        Z: -1220,
        desc: "Ask before building"
    },
    claim37: {
        username: "ItsWhitedonrocks",
        X: 4912,
        Z: 133,
        desc: "Ask before building"
    },
    claim38: {
        username: "Grafnt",
        X: 1010,
        Z: 1330,
        desc: "Ask before building"
    },
    claim39: {
        username: "__PQNDA__",
        X: 978,
        Z: -739,
        desc: "Ask before building"
    },
    claim40: {
        username: "PhyzyYT",
        X: -1836,
        Z: 1635,
        desc: "Ask before building"
    },
    claim41: {
        username: "PhyzyYT",
        X: -4284,
        Z: 1895,
        desc: "Ask before building"
    },
    claim42: {
        username: "PhyzyYT",
        X: -6648,
        Z: 2508,
        desc: "Don't build near"
    },
    claim43: {
        username: "Zeroes_YT",
        X: 1215,
        Z: 695,
        desc: "Don't build near"
    },
    claim44: {
        username: "TheWilburDog",
        X: -1150,
        Z: 1900,
        desc: "Don't build near"
    },
    claim45: {
        username: "Jackpat02rules",
        X: -1890,
        Z: 358,
        desc: "Don't build near"
    },
    claim46: {
        username: "miggs1011",
        X: -3600,
        Z: 4900,
        desc: "Don't build near"
    },
    claim47: {
        username: "AmyUwU/Lynck/Sharkuru",
        X: -4956,
        Z: 3805,
        desc: "Ask before building"
    },
    claim48: {
        username: "SpiredDwarf",
        X: 2214,
        Z: -2815,
        desc: "Don't build near"
    },
    claim49: {
        username: "Knapk1n",
        X: -7500,
        Z: -4800,
        desc: "Don't build near"
    },
    claim50: {
        username: "DavidAdams",
        X: 123,
        Z: -426,
        desc: "Ask before building"
    },
    claim51: {
        username: "Grafnt",
        X: 1010,
        Z: 1330,
        desc: "Ask before building"
    },
    claim52: {
        username: "FakeFrede",
        X: 9369,
        Z: 10019,
        desc: "Don't build near"
    },
    claim53: {
        username: "FakeFrede",
        X: 9485,
        Z: 10330,
        desc: "Don't build near"
    },
    claim54: {
        username: "FakeFrede",
        X: 9590,
        Z: 10180,
        desc: "Don't build near"
    },
    claim55: {
        username: "AmyUwU",
        X: -1604,
        Z: 2691,
        desc: "Don't build near"
    },
    claim56: {
        username: "02LizzyBear02",
        X: 644,
        Z: -627,
        desc: "Ask before building"
    },
    claim57: {
        username: "02LizzyBear02",
        X: 661,
        Z: -393,
        desc: "Don't build near"
    },
    claim58: {
        username: "A5tra_",
        X: 1982,
        Z: -180,
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
    claim2: {
        username: "SenpaiHydraulic",
        X: -323,
        Z: -40,
        desc: "Don't build near"
    },
    claim3: {
        username: "ItsWhitedonrocks/Alleee",
        X: 512,
        Z: 285,
        desc: "Ask before building"
    },
}


for (user in userData) {
    bases.push([userData[user].X, userData[user].Z, userData[user].username, userData[user].desc])
}



for (user in userNetherData) {
    netherBases.push([userNetherData[user].X, userNetherData[user].Z, userNetherData[user].username, userNetherData[user].desc])
}

console.log(netherBases)



