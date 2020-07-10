let bases = [];
let netherBases = [];

let userData = {
    claimMain: {
        username: "Spawn",
        X: 0,
        Z: 0,
        desc: "300x300 spawn claim"
    },
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
    claim59: {
        username: "Foolnidiot",
        X: -3682,
        Y: -1190,
        desc: "Don't mine or build"
    },
    claim61: {
        username: "Foolnidiot",
        X: -2155,
        Y: -5542,
        desc: "Don't mine or build"
    },
    claim62: {
        username: "ShadowBlazinIce",
        X: 1918,
        Y: -2031,
        desc: "Can build above"
    },
    claim63: {
        username: "HammyDaGR8",
        X: -1984,
        Y: 1698,
        desc: "Ask before building"
    },
  
};


let userNetherData = {
    claim60: {
        username: "Spawn",
        X: 0,
        Z: 0,
        desc: "150x150 spawn claim"
    },
    claim1: {
        username: "JC_C",
        X: 574,
        Y: -286,
        desc: "Don't mine or build",
    },
    claim2: {
        username: "M2H_/Birhdy/Clucken/Armageddon",
        X: 325,
        Y: 146,
        desc: "Don't mine or build",
    },
    claim3: {
        username: "birhdy/M2H_/ArmageddonElite",
        X: 2010,
        Y: -1044,
        desc: "Don't mine or build",
    },
    claim4: {
        username: "Fallen Valley",
        X: 452,
        Y: -188,
        desc: "Don't mine or build",
    },
    claim5: {
        username: "Fallen Valley",
        X: 410,
        Y: -377,
        desc: "Don't mine or build",
    },
}



for (user in userData) {
    bases.push([userData[user].X, userData[user].Y, userData[user].username, userData[user].desc])
}



for (user in userNetherData) {
    netherBases.push([userNetherData[user].X, userNetherData[user].Y, userNetherData[user].username, userNetherData[user].desc])
}

console.log(netherBases)



