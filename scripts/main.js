/*

PREPARATION SECTION - LOAD/ADD FILES

*/



let bases = [];

let userData = {
     __Test: {
        username: "Fallen Valley",
        X: 715,
        Y: -1000,
        desc: "Build near? => Don't mine or build",
    },
    __Test2: {
        username: "Nightvare",
        X: 277,
        Y: 1915,
        desc: "Build Near? => Don't mine or build",
    },
    __Test3: {
        username: "Fallen Valley",
        X: 2942,
        Y: -981,
        desc: "Build Near? => Don't mine or build",
    },
    __Test4: {
        username: "MoreThanLonely",
        X: 92,
        Y: 2764,
        desc: "Build Near? => Don't mine or build",
    },
    __Test5: {
        username: "_R4IN",
        X: -118,
        Y: 502,
        desc: "Build Near? => Don't mine or build",
    }
};


for (user in userData) {
    bases.push([userData[user].X, userData[user].Y, userData[user].username, userData[user].desc])
}


/** @description - Takes 2 sets of coordinates compares them and returns the difference.
 * 
 * @param {number} claim - The claim to compare 
 * @param {number} enemyClaim  - The claim to compare against
 */

function minecraftCoords(claim, enemyClaim) {
    let [X, Y] = claim
    let [eX, eY] = enemyClaim
    let mainX;
    let mainY;
    
    if (X < 0 && eX < 0 || X > 0 && eX > 0) {
        mainX = Math.abs(Math.abs(X) - Math.abs(eX))
    } else if (X < 0 && eX > 0) {
        mainX = eX + Math.abs(X)
    } else if (X > 0 && eX < 0) {
        mainX = X + Math.abs(eX)
    }
    
    if (Y < 0 && eY < 0 || Y > 0 && eY > 0) {
        mainY = Math.abs(Math.abs(Y) - Math.abs(eY))
    } else if (Y < 0 && eY > 0) {
        mainY = eY + Math.abs(Y)
    } else if (Y > 0 && eY < 0) {
        mainY = Y + Math.abs(eY)
    }
    
    
    
    return [mainX, mainY]
}



/*

FUNCTIONING SECTION - CALCULATE/DISPLAY

*/
let btn;

setTimeout(() => {
    btn = document.getElementById("check");
    btn.addEventListener("click", display);
}, 1000);


function display() {
    let xCoord = document.getElementById("eks").value;
    let zCoord = document.getElementById("zet").value;
    let topfive = document.createElement("div");
    let container = document.getElementById("container");


    // Temp Comment - Calculate the difference and then sort it by closest
    let difference = bases.map((element) => {
        let remainingCoords = minecraftCoords([Number.parseInt(xCoord), Number.parseInt(zCoord)], [element[0], element[1]])
        console.log(remainingCoords)

        return [...element, remainingCoords.reduce((total, element) => total + element , 0)]
    }).sort((a, b) => a[4] - b[4]).slice(0, 5)
        console.log(difference)

    for (let i = 0; i < difference.length; i++) {
        let claimContainer = document.createElement("div");
        let head = document.createElement("h1");
        let coords = document.createElement("p");
        let desc = document.createElement("p")

        head.textContent = `Claimed By: ${difference[i][2]} (${difference[i][4]} blocks away)`;
        coords.textContent = `X: ${difference[i][0]}, Y: ${difference[i][1]}`;
        desc.textContent = difference[i][3]

        claimContainer.className = "bases"
        claimContainer.append(head);
        claimContainer.append(coords);
        claimContainer.append(desc);
        container.append(claimContainer)
    }
  
}





