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
        desc: "300x300 spawn claim"
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
    
};


let userNetherData = {
    claim60: {
        username: "Spawn",
        X: 0,
        Z: 0,
        desc: "150x150 spawn claim"
    }
}


for (user in userData) {
    bases.push([userData[user].X, userData[user].Z, userData[user].username, userData[user].desc])
}



for (user in userNetherData) {
    netherBases.push([userNetherData[user].X, userNetherData[user].Z, userNetherData[user].username, userNetherData[user].desc])
}

console.log(netherBases)



