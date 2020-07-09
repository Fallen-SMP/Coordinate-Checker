/*

PREPARATION SECTION - LOAD/ADD FILES

*/



let bases = [];

let userData = {
     claim1: {
        username: "Fallen Valley",
        X: 715,
        Y: -1000,
        desc: "Don't mine or build"
    },
    claim2: {
        username: "Nightvare",
        X: 277,
        Y: 1915,
        desc: "Don't mine or build"
    },
    claim3: {
        username: "Fallen Valley",
        X: 2942,
        Y: -981,
        desc: "Don't mine or build"
    },
    claim4: {
        username: "MoreThanLonely",
        X: 92,
        Y: 2764,
        desc: "Don't mine or build"
    },
    claim5: {
        username: "_R4IN",
        X: -118,
        Y: 502,
        desc: "Don't mine or build"
    },
    claim6: {
        username: "Fallen Valley",
        X: 3138,
        Y: -1477,
        desc: "Don't mine or build"
    },
    claim7: {
        username: "Kamizzel/AmyUwU",
        X: -1263,
        Y: 735,
        desc: "Don't mine or build"
    },
    claim8: {
        username: "GoEatSomeRice",
        X: 1750,
        Y: 650,
        desc: "Ask before building"
    },
    claim9: {
        username: "Lt_Lee",
        X: -790,
        Y: -182,
        desc: "Don't mine or build"
    },
    claim10: {
        username: "Fallen Valley",
        X: 3685,
        Y: -1920,
        desc: "Don't mine or build"
    },
    claim11: {
        username: "chewibles",
        X: 2333,
        Y: -1153,
        desc: "Don't mine or build"
    },
    claim12: {
        username: "Koolforrest/VoidReaper",
        X: -1803,
        Y: 4727,
        desc: "Don't mine or build"
    },
    claim13: {
        username: "TyTube",
        X: 3774,
        Y: 206,
        desc: "Don't mine or build"
    },
    claim14: {
        username: "C4",
        X: 78,
        Y: -7779,
        desc: "Don't mine or build"
    },
    claim15: {
        username: "Noname4297",
        X: -365,
        Y: -1405,
        desc: "Don't mine or build"
    },
    claim16: {
        username: "Nightvare",
        X: 1344,
        Y: 3874,
        desc: "Don't mine or build"
    },
    claim17: {
        username: "Noname4297",
        X: 30,
        Y: -5000,
        desc: "Ask before building"
    },
    claim18: {
        username: "JayChachi",
        X: -521,
        Y: 6075,
        desc: "Ask before building"
    },
    claim19: {
        username: "Chaos_YT",
        X: 6239,
        Y: -5757,
        desc: "Ask before building"
    },
    claim20: {
        username: "ItJamie",
        X: -1816,
        Y: -2707,
        desc: "Don't mine or build"
    },
    claim21: {
        username: "Kamizzel/AmyUwU",
        X: -1266,
        Y: 2142,
        desc: "Don't mine or build"
    },
    claim22: {
        username: "Zom108",
        X: -633,
        Y: -2700,
        desc: "Don't mine or build"
    },
    claim23: {
        username: "Lynck",
        X: -1283,
        Y: 181,
        desc: "Allowed to build near"
    },
    claim24: {
        username: "Koolforrest/VoidReaper",
        X: -1280,
        Y: 7044,
        desc: "Don't mine or build"
    },
    claim25: {
        username: "260_",
        X: 3055,
        Y: 5733,
        desc: "Don't mine or build"
    },
    claim26: {
        username: "MattxPlays/Tiffany",
        X: 0,
        Y: -3567,
        desc: "Ask before building"
    },
    claim27: {
        username: "Jedwint/Goatiepie/fhgui",
        X: 546,
        Y: 1176,
        desc: "Ask before building"
    },
    claim28: {
        username: "JaxOntheGamez",
        X: 3529,
        Y: 1259,
        desc: "Ask before building"
    },
    claim29: {
        username: "Fl1cZy",
        X: -536,
        Y: -1061,
        desc: "Ask before building"
    },
    claim30: {
        username: "SpokeyPandeh",
        X: 2545,
        Y: -843,
        desc: "Don't mine or build"
    },
    claim31: {
        username: "Gamecrazybro",
        X: -1567,
        Y: -2192,
        desc: "Don't mine or build"
    },
    claim32: {
        username: "Fweehaw",
        X: 17,
        Y: 1025,
        desc: "Don't mine or build"
    },
    claim33: {
        username: "OhAbdo_",
        X: -273,
        Y: 1569,
        desc: "Don't mine or build"
    },
    claim34: {
        username: "The_Guitar_Dood",
        X: 3323,
        Y: -3816,
        desc: "Don't mine or build"
    },
    claim35: {
        username: "CaptainKaedan",
        X: 3453,
        Y: -4229,
        desc: "Don't mine or build"
    },
    claim36: {
        username: "KweenxKikii",
        X: 806,
        Y: -2100,
        desc: "Don't mine or build"
    },
    claim37: {
        username: "UncoJacob",
        X: -2550,
        Y: -150,
        desc: "Don't mine or build"
    },
    claim38: {
        username: "Mastercrossbow",
        X: -2887,
        Y: -1233,
        desc: "Don't mine or build"
    },
    claim39: {
        username: "LackKing",
        X: 2099,
        Y: -1491,
        desc: "Don't mine or build"
    },
    claim40: {
        username: "Nulkzy/Lunkzy/Wolfgirl",
        X: 379,
        Y: -2243,
        desc: "Don't mine or build"
    },
    claim41: {
        username: "Nightowl08",
        X: 889,
        Y: -907,
        desc: "Don't mine or build"
    },
    claim42: {
        username: "Nightowl08",
        X: 54,
        Y: 1645,
        desc: "Don't mine or build"
    },
    claim43: {
        username: "FakeFrede",
        X: 3275,
        Y: 360,
        desc: "Don't mine or build"
    },
    claim44: {
        username: "FakeFrede",
        X: 3200,
        Y: -250,
        desc: "Don't mine or build"
    },
    claim45: {
        username: "senp41",
        X: -1580,
        Y: -5730,
        desc: "Don't mine or build"
    },
    claim46: {
        username: "Coldrix_",
        X: 2854,
        Y: -2806,
        desc: "Don't mine or build"
    },
    claim47: {
        username: "DaMightyDumpling/Yesnobody",
        X: 1676,
        Y: 5633,
        desc: "Don't mine or build"
    },
    claim48: {
        username: "DavidAdams",
        X: 3193,
        Y: -1605,
        desc: "Don't mine or build"
    },
    claim49: {
        username: "JC_C",
        X: 4020,
        Y: -3044,
        desc: "Don't mine or build"
    },
    claim50: {
        username: "YungHeffy",
        X: -2621,
        Y: 685,
        desc: "Don't mine or build"
    },
    claim51: {
        username: "namestom",
        X: -3654,
        Y: -3302,
        desc: "Don't mine or build"
    },
    claim52: {
        username: "flame_bomb",
        X: -1390,
        Y: -5530,
        desc: "Don't mine or build"
    },
    claim53: {
        username: "Dreamz0103",
        X: -4000,
        Y: -750,
        desc: "Don't mine or build"
    },
    claim54: {
        username: "ArmaggeddonElite",
        X: 1825,
        Y: -147,
        desc: "Don't mine or build"
    },
    claim55: {
        username: "AustiinGamez",
        X: 742,
        Y: -286,
        desc: "Allowed to build"
    },
    claim56: {
        username: "Linaxox",
        X: 957,
        Y: 724,
        desc: "Ask before building"
    },
    claim57: {
        username: "M1_",
        X: 5600,
        Y: -170,
        desc: "Don't mine or build"
    },
    claim58: {
        username: "GoldReaper97",
        X: 1808,
        Y: -612,
        desc: "Don't mine or build"
    },
  
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


let positiveQuotes = [
    ["Once you choose hope, anything is possible.", "Christopher Reeve"],
    ["Maybe you have to know the darkness before you can appreciate the light.", "Madeleine L'Engle"],
    ["There are far, far better things ahead than anything we leave behind.", "C.S. Lewis"],
    ["Those who have a ‘why’ to live, can bear with almost any ‘how’.", "Viktor E. Frankl"],
    ["Even if happiness forgets you a little bit, never completely forget about it.", "Jacques Prevert"]
]


/*

FUNCTIONING SECTION - CALCULATE/DISPLAY

*/

window.addEventListener("load", quoteLoad)


/**
 * @description - On loading the page fill the white space (where bases will go)
 * with a random quote until the clients try getting coordinates
 * 
 */

function quoteLoad() {
    let container = document.getElementById("container");
    let quoteHolder = document.createElement("div");
    let quote = document.createElement("p");
    let author = document.createElement("p");
    let [quoteText, authorText] = positiveQuotes[Math.floor(Math.random() * positiveQuotes.length)];

    quoteHolder.id = "baseHolder";
    quote.id = "positiveQuote";
    author.id = "quoteAuthor";
    quote.textContent = `"${quoteText}"`;
    author.textContent = "- " + authorText;

    quoteHolder.append(quote);
    quoteHolder.append(author);
    container.append(quoteHolder);
}
























let btn;

setTimeout(() => { // Set an event listener on the button
    btn = document.getElementById("check");
    btn.addEventListener("click", display);
}, 1000);


function display() {
    let xCoord = document.getElementById("eks").value;
    let zCoord = document.getElementById("zet").value;
    let container = document.getElementById("container");

  
    // 
    if (document.getElementById("baseHolder") !== null) {
        document.getElementById("baseHolder").remove()
    }


    // Calculate the difference and then sort it by closest
    let difference = bases.map((element) => {
        let remainingCoords = minecraftCoords([Number.parseInt(xCoord), Number.parseInt(zCoord)], [element[0], element[1]])
        console.log(remainingCoords)

        return [...element, remainingCoords.reduce((total, element) => total + element , 0)]
    }).sort((a, b) => a[4] - b[4]).slice(0, 5)
        console.log(difference)


    let topfive = document.createElement("div");
    let topheading = document.createElement("h1");

    topheading.textContent = "Closest Bases:"
    topfive.append(topheading)
    topfive.id = "baseHolder"

    for (let i = 0; i < difference.length; i++) {
        let claimContainer = document.createElement("div");
        let head = document.createElement("h2");
        let coords = document.createElement("p");
        let desc = document.createElement("p")

        head.textContent = `Claimed By: ${difference[i][2]} (${difference[i][4]} blocks away)`;
        coords.textContent = `X: ${difference[i][0]}, Z: ${difference[i][1]}`;
        desc.textContent = `Build near: ${difference[i][3]}`

        claimContainer.className = "bases"
        claimContainer.append(head);
        claimContainer.append(coords);
        claimContainer.append(desc);
        topfive.append(claimContainer)
    }
  container.append(topfive)
}





