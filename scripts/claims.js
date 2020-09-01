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
        X: -1280,
        Y: -5250,
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
        desc: "Allowed to build near"
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
    claim64: {
        username: "senp41",
        X: -1794,
        Y: -5008,
        desc: "Don't mine or build"
    },
    claim65: {
        username: "Grenaderboy909",
        X: 3293,
        Y: -3400,
        desc: "Don't mine or build"
    },
    claim66: {
        username: "Jonothepanda",
        X: -1000,
        Y: 1800,
        desc: "Don't mine or build"
    },
    claim67: {
        username: "LackKings",
        X: 1797,
        Y: -1517,
        desc: "Don't mine or build"
    },
    claim68: {
        username: "CaptainRoyaltyy",
        X: -5313,
        Y: 755,
        desc: "450x450 Radius"
    },
    claim69: {
        username: "Cr0tchKicker",
        X: 133,
        Y: 1228,
        desc: "Allowed to build near"
    },
    claim70: {
        username: "ermmie",
        X: 2214,
        Y: -1626,
        desc: "Lackings only (prefers none)"
    },
    claim71: {
        username: "CaptainRoyaltyy",
        X: -5313,
        Y: 755,
        desc: "Don't mine or build"
    },
    claim72: {
        username: "ArmageddonElite",
        X: 1430,
        Y: 99,
        desc: "Allowed to build near"
    },
    claim73: {
        username: "DigitalRabbit",
        X: 3101,
        Y: 5307,
        desc: "Ask before building"
    },
    claim74: {
        username: "heartsoflior",
        X: 1874,
        Y: -3225,
        desc: "Ask before building"
    },
    claim76: {
        username: "JellyArt",
        X: -2734,
        Y: -2990,
        desc: "Don't mine or build"
    },
    claim77: {
        username: "LizzyBear02",
        X: -1097,
        Y: 4586,
        desc: "Ask before building"
    },
    claim78: {
        username: "Rueben",
        X: 697,
        Y: 484,
        desc: "Allowed to build near"
    },
    claim79: {
        username: "CaramelStache",
        X: 3393,
        Y: -905,
        desc: "Ask before building"
    },
    claim80: {
        username: "tampon_",
        X: -2763,
        Y: 6470,
        desc: "Ask before building"
    },
    claim81: {
        username: "Ejosr/AustinMG29",
        X: -688,
        Y: 286,
        desc: "Don't mine or build"
    },
    claim82: {
        username: "SirClucken/ShadowBlazinIce/Coldrix_",
        X: 2465,
        Y: -1915,
        desc: "Don't mine or build"
    },
    claim83: {
        username: "AustinMG29/Ejosr",
        X: -800,
        Y: 2194,
        desc: "Don't mine or build"
    },
    claim84: {
        username: "LSkilz",
        X: 1142,
        Y: -327,
        desc: "Don't mine or build"
    },
    claim85: {
        username: "Jestur",
        X: 3960,
        Y: -1020,
        desc: "Ask before building"
    },
    claim86: {
        username: "Finvi",
        X: -590,
        Y: -832,
        desc: "Don't mine or build"
    },
    claim87: {
        username: "birhdy/RadLikeSlime",
        X: 3135,
        Y: -2097,
        desc: "Don't mine or build"
    },
    claim88: {
        username: "Rueben",
        X: 1712,
        Y: 3171,
        desc: "Don't mine or build"
    },
    claim89: {
        username: "LonnonjamesD",
        X: 3080,
        Y: 2326,
        desc: "Ask before building"
    },
    claim90: {
        username: "dabidokun",
        X: -1622,
        Y: -3073,
        desc: "Ask before building"
    },
    claim91: {
        username: "Zenix",
        X: 1742,
        Y: -3451,
        desc: "Don't mine or build"
    },
    claim92: {
        username: "birhdy",
        X: 2709,
        Y: -5020,
        desc: "Don't mine or build"
    },
    claim93: {
        username: "LonnonjamesD",
        X: 2258,
        Y: 1769,
        desc: "Don't mine or build"
    },
    claim94: {
        username: "Jackpat02rules",
        X: -2832,
        Y: -628,
        desc: "Ask before building"
    },
    claim95: {
        username: "Captain_Carnar",
        X: -3000,
        Y: -4000,
        desc: "Ask before building"
    },
    claim96: {
        username: "Smallbear_99",
        X: 1240,
        Y: 3079,
        desc: "Don't mine or build"
    },
    claim97: {
        username: "ArmaggeddonElite",
        X: -30,
        Y: -7191,
        desc: "Don't mine or build"
    },
    claim98: {
        username: "_Stam",
        X: -272,
        Y: 622,
        desc: "Ask before building"
    },
    claim99: {
        username: "NuggetsXVR",
        X: 1253,
        Y: 7348,
        desc: "Ask before building"
    },
    claim100: {
        username: "birhdy",
        X: 4470,
        Y: -1088,
        desc: "Don't mine or build"
    },
    claim101: {
        username: "SeenHell",
        X: -395,
        Y: -595,
        desc: "Ask before building"
    },
    claim102: {
        username: "CentrinoTM",
        X: 644,
        Y: 935,
        desc: "Ask before building"
    },
    claim103: {
        username: "CentrinoTM",
        X: 711,
        Y: 1032,
        desc: "Don't mine or build"
    },
    claim104: {
        username: "Kamizzel",
        X: 4371,
        Y: 8745,
        desc: "Don't mine or build"
    },
    claim105: {
        username: "Kamizzel/Yesnobody",
        X: -14674,
        Y: 4660,
        desc: "Don't mine or build"
    },
    claim106: {
        username: "SimplyXen",
        X: -2663,
        Y: 1876,
        desc: "Don't mine or build"
    },
    claim107: {
        username: "birhdy",
        X: -9007,
        Y: 6783,
        desc: "Don't mine or build"
    },
    claim108: {
        username: "_Zenix_",
        X: 160,
        Y: -995,
        desc: "Don't mine or build"
    },
    claim109: {
        username: "Renowns",
        X: -11701,
        Y: 13988,
        desc: "Don't mine or build"
    },
    claim110: {
        username: "heartsoflior",
        X: -100000,
        Y: 0,
        desc: "Ask before building"
    },
    claim111: {
        username: "__PQNDA__",
        X: 2249,
        Y: -118,
        desc: "Ask before building"
    },
    claim112: {
        username: "ArmaggeddonElite",
        X: 95,
        Y: -7291,
        desc: "Don't mine or build"
    },
    claim113: {
        username: "meltdown_mp4",
        X: 9493,
        Y: 2970,
        desc: "Ask before building"
    },
    claim114: {
        username: "Vixezio",
        X: -1900,
        Y: -1770,
        desc: "Don't mine or build"
    },
    claim115: {
        username: "animeshows (seenhell)",
        X: -1154,
        Y: -148,
        desc: "Ask before building"
    },
    claim116: {
        username: "_Stam",
        X: 1900,
        Y: -1200,
        desc: "Don't mine or build"
    },
    claim117: {
        username: "gekumi",
        X: 1750,
        Y: 2322,
        desc: "Don't mine or build"
    },
    claim118: {
        username: "_Stam/Bozl/Lskilz/ArmaggeddonElite",
        X: -1126,
        Y: -4549,
        desc: "Don't mine or build"
    },
    claim119: {
        username: "birhdy",
        X: 2556,
        Y: -3593,
        desc: "Don't mine or build"
    },
    claim120: {
        username: "Jadergamer53",
        X: -770,
        Y: 503,
        desc: "Don't mine or build"
    },
    claim121: {
        username: "WetRat_",
        X: -219,
        Y: -175,
        desc: "Don't mine or build"
    },
    claim122: {
        username: "newcastleocean",
        X: 886,
        Y: 149,
        desc: "Ask before building"
    },
    claim123: {
        username: "UselessName15/Jadergamer53",
        X: 4901,
        Y: -5014,
        desc: "Don't mine or build"
    },
    claim124: {
        username: "Renowns",
        X: -2170,
        Y: 700,
        desc: "Don't mine or build"
    },
    claim125: {
        username: "UselessName15/Jadergamer53",
        X: 1347,
        Y: -7091,
        desc: "Don't mine or build"
    },
    claim126: {
        username: "birhdy",
        X: -21624,
        Y: 2224,
        desc: "Don't mine or build"
    },
    claim127: {
        username: "BuildmongerPlays",
        X: 451,
        Y: -462,
        desc: "Ask before building"
    },
    claim128: {
        username: "xLivy",
        X: 3563,
        Y: -9904,
        desc: "Don't mine or build"
    },
    claim129: {
        username: "SkeppysMuffin14",
        X: -408,
        Y: -1273,
        desc: "Ask before building"
    },
    claim130: {
        username: "MoreThanLonely",
        X: -1032,
        Y: 218,
        desc: "Don't mine or build"
    },
    claim130: {
        username: "Altura",
        X: 2488,
        Y: 2151,
        desc: "Ask before building"
    },
    claim131: {
        username: "Grenaderboy909/CentrinoTM",
        X: -300,
        Y: 4600,
        desc: "Don't mine or build"
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
    claim6: {
        username: "JC_C/RadLikeSlime",
        X: 43,
        Y: -186,
        desc: "Allowed to build near",
    },
    claim7: {
        username: "ijcerdas",
        X: 1943,
        Y: -301,
        desc: "Don't mine or build"
    },
    claim8: {
        username: "Coldrix_/MasterCrossbow",
        X: 599,
        Y: 749,
        desc: "Don't mine or build"
    },
}


for (user in userData) {
    bases.push([userData[user].X, userData[user].Y, userData[user].username, userData[user].desc])
}



for (user in userNetherData) {
    netherBases.push([userNetherData[user].X, userNetherData[user].Y, userNetherData[user].username, userNetherData[user].desc])
}

console.log(netherBases)



