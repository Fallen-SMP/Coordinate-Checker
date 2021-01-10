let bases = [];
let netherBases = [];

let userData = {
    claimMain: {
        username: "Spawn",
        X: 0,
        Z: 0,
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



