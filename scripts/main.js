
/** @description - Takes 2 sets of coordinates compares them and returns the difference.
 * 
 * @param {number} claim - The claim to compare 
 * @param {number} enemyClaim  - The claim to compare against
 */

function minecraftCoords(claim, enemyClaim) {
    let [X, Z] = claim
    let [eX, eZ] = enemyClaim
    let mainX;
    let mainZ;

    if (eX === 0 && eZ === 0) return [Math.abs(X), Math.abs(Z)];
    
    
    if (X <= 0 && eX <= 0 || X >= 0 && eX >= 0) {
        mainX = Math.abs(Math.abs(X) - Math.abs(eX))
    } else if (X <= 0 && eX >= 0) {
        mainX = eX + Math.abs(X)
    } else if (X >= 0 && eX <= 0) {
        mainX = X + Math.abs(eX)
    }
    
    if (Z <= 0 && eZ <= 0 || Z >= 0 && eZ >= 0) {
        mainZ = Math.abs(Math.abs(Z) - Math.abs(eZ))
    } else if (Z <= 0 && eZ >= 0) {
        mainZ = eZ + Math.abs(Z)
    } else if (Z >= 0 && eZ <= 0) {
        mainZ = Z + Math.abs(eZ)
    }
    
    
    
    return [mainX, mainZ]
}


let positiveQuotes = [
    ["Once you choose hope, anything is possible.", "Christopher Reeve"],
    ["Maybe you have to know the darkness before you can appreciate the light.", "Madeleine L'Engle"],
    ["There are far, far better things ahead than anything we leave behind.", "C.S. Lewis"],
    ["Those who have a ‘why’ to live, can bear with almost any ‘how’.", "Viktor E. Frankl"],
    ["Even if happiness forgets you a little bit, never completely forget about it.", "Jacques Prevert"],
    ["The Way Get Started Is To Quit Talking And Begin Doing.", "Walt Disney"],
    ["Don’t Let Yesterday Take Up Too Much Of Today.", "Will Rogers"],
    ["We May Encounter Many Defeats But We Must Not Be Defeated.", "Maya Angelou"],
    ["Do What You Can With All You Have, Wherever You Are.", "Theodore Roosevelt"],
    ["Reading Is To The Mind, As Exercise Is To The Body.", "Brian Tracy"]
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
let overworldNav;
let netherNav;
let typeClaim = "overworld"





setTimeout(() => { // Set an event listener on the button
    btn = document.getElementById("check");
    overworldNav = document.getElementById("over");
    netherNav = document.getElementById("nether");

    btn.addEventListener("click", () => { display(typeClaim) });
    overworldNav.addEventListener("click", () => { theme("overworld") })
    netherNav.addEventListener("click", () => { theme("nether") })
}, 1000);




function display(claimCheck) {
    let xCoord = document.getElementById("eks");
    let zCoord = document.getElementById("zet");
    let container = document.getElementById("container");
    let claims;


    if(isInvalid(xCoord.value, zCoord.value)) return warn();
   
   
    if (claimCheck === "overworld") {
        claims = bases;
    } else if (claimCheck === "nether") {
        claims = netherBases;
    }

    if (document.getElementById("baseHolder") !== null) {
        document.getElementById("baseHolder").remove()
    }

 
    // Calculate the difference and then sort it by closest
    let difference = claims.map((element) => {
        if (element[1] === undefined) element[1] = 0;
        let remainingCoords = minecraftCoords([Number.parseInt(xCoord.value), Number.parseInt(zCoord.value)], [element[0], element[1]])
    
        return [...element, remainingCoords.reduce((total, element) => total + element , 0)]
    }).sort((a, b) => a[4] - b[4]).slice(0, 5)



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

/** 
 * @description - Change the background theme upon clicking Nether/Overworld
 * 
 * @param {string} background - To what the background image should be changed
 */

function theme(background) {
    let xCoord = document.getElementById("eks");
    let zCoord = document.getElementById("zet");
    let page = document.querySelector("body");
    let navOver = document.getElementById("over");
    let navNether = document.getElementById("nether");

    if (background === "overworld") {

        if (document.getElementById("baseHolder") !== null) {
            document.getElementById("baseHolder").remove()
        }

        page.id = "background";
        typeClaim = "overworld";
        xCoord.value = "";
        zCoord.value = "";

        navNether.classList.remove("highlighted");
        navOver.classList.add("highlighted");
        quoteLoad()

    } else if (background === "nether") {

        if (document.getElementById("baseHolder") !== null) {
            document.getElementById("baseHolder").remove()
        }

        page.id = "backgroundNether";
        typeClaim = "nether";
        xCoord.value = "";
        zCoord.value = "";

        navOver.classList.remove("highlighted");
        navNether.classList.add("highlighted");
        quoteLoad()
    }
}





