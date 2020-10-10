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
    }
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
    bases.push([userData[user].X, userData[user].Y, userData[user].username, userData[user].desc])
}



for (user in userNetherData) {
    netherBases.push([userNetherData[user].X, userNetherData[user].Y, userNetherData[user].username, userNetherData[user].desc])
}

console.log(netherBases)



