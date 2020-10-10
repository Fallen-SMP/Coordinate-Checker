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
        username: "Kweenxkikii",
        X: -381,
        Z: 1194,
        desc: "Don't build near"
    },
    claim2: {
        username: "Popdey",
        X: 967,
        Z: 331,
        desc: "Don't build near"
    },
    claim3: {
        username: "FakeFrede",
        X: 3600,
        Z: 1900,
        desc: "Don't build near"
    },
    claim4: {
        username: "Emorgancy",
        X: -2188,
        Z: -287,
        desc: "Don't build near"
    },
    claim5: {
        username: "Gamecrazybro/NewtStock/C4",
        X: 170,
        Z: -780,
        desc: "Don't build near"
    },
    claim6: {
        username: "DigitalRabbit",
        X: -2182,
        Z: -1003,
        desc: "Don't build near"
    },
    claim7: {
        username: "_Portal_",
        X: 463,
        Z: 187,
        desc: "Don't build near"
    },
    claim8: {
        username: "Fallen Kingdom",
        X: 1662,
        Z: -7748,
        desc: "Don't build near"
    },
    claim9: {
        username: "KweenxKikii",
        X: 731,
        Z: 4033,
        desc: "Don't build near"
    },
    claim10: {
        username: "ChronoCrafter1",
        X: -1102,
        Z: -1522,
        desc: "Don't build near"
    },
    claim11: {
        username: "Carnar",
        X: -1931,
        Z: -490,
        desc: "Don't build near"
    },
    claim12: {
        username: "Homie Base",
        X: 4968,
        Z: 42,
        desc: "Don't build near"
    },
    claim13: {
        username: "Emorgancy/BreadCrumble/DigitalRabbit/Tampon_",
        X: -1835,
        Z: -1522,
        desc: "Don't build near"
    },
    claim14: {
        username: "Seizamaru",
        X: -8544,
        Z: 756,
        desc: "Don't build near"
    },
    claim15: {
        username: "JayChachi",
        X: 565,
        Z: -1105,
        desc: "Don't build near"
    },
    claim16: {
        username: "Ejosr",
        X: -257,
        Z: 4452,
        desc: "Don't build near"
    },
    claim17: {
        username: "chewibles",
        X: 2227,
        Z: -2839,
        desc: "Don't build near"
    },
    claim18: {
        username: "poptop7491",
        X: 650,
        Z: 87,
        desc: "Don't build near"
    },
    claim19: {
        username: "liorliorliorlior",
        X: -930,
        Z: 2949,
        desc: "Don't build near"
    },
    claim20: {
        username: "provokedspecky",
        X: 64,
        Z: 437,
        desc: "Don't build near"
    },
    claim: {
        username: "bam1217",
        X: 2465,
        Z: 4614,
        desc: "Don't build near"
    },
    claim: {
        username: "SimplyXen",
        X: -5439,
        Z: 2228,
        desc: "Ask before building"
    },
    claim: {
        username: "ArmaggeddonElite",
        X: 1903,
        Z: -8985,
        desc: "Don't build near"
    },
    claim: {
        username: "Homie House",
        X: 4921,
        Z: 611,
        desc: "Don't build near"
    },
    claim: {
        username: "chrisxd_",
        X: 4944,
        Z: 514,
        desc: "Don't build near"
    },
    claim: {
        username: "_Stam",
        X: -720,
        Z: 1300,
        desc: "Ask first"
    },
    claim: {
        username: "UselessName15",
        X: -7601,
        Z: -3648,
        desc: "Don't build near"
    },
    claim: {
        username: "FlicZyy",
        X: 730,
        Z: 75,
        desc: "Ask before building"
    },
    // claim: {
    //     username: "",
    //     X: ,
    //     Z: ,
    //     desc: ""
    // },
    
};


let userNetherData = {
    claim60: {
        username: "Spawn",
        X: 0,
        Z: 0,
        desc: "150x150 spawn claim"
    },
    claim1: {
        username: "Koolforrest442/JC_C",
        X: 375,
        Z: 75,
        desc: "Ask for permission"
    }
    claim2: {
        username: "ArmaggeddonElite",
        X: 289,
        Z: -1091,
        desc: "Don't build near"
    }
}


for (user in userData) {
    bases.push([userData[user].X, userData[user].Z, userData[user].username, userData[user].desc])
}



for (user in userNetherData) {
    netherBases.push([userNetherData[user].X, userNetherData[user].Z, userNetherData[user].username, userNetherData[user].desc])
}

console.log(netherBases)



