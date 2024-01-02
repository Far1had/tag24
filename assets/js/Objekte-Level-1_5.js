let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};


// Geheimnisse
console.log(unserLager.schrank["Obere Schublade"].Ordner2);

// Cola
console.log(unserLager.schrank["Untere Schublade"]);

// Hefter
console.log(unserLager.schreibtisch.schublade);
