let unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

// zugriff auf "Nala" und "Droopy" 
let katzenName = unsereHaustiere[0].names[1];
let hundeName = unsereHaustiere[1].names[2];

console.log("Name der Katze: " + katzenName);
console.log("Name des Hundes: " + hundeName);

// liste Hundenamen .
let hundenamen = unsereHaustiere[1].names.join(", ");
console.log("Alle Hundenamen: " + hundenamen);

// Hundenamen ändern.
unsereHaustiere[1].names = ["Waldi", "Rex", "Bello"];

let aktualisierteHundenamen = unsereHaustiere[1].names.join(", ");
console.log("Aktualisierte Hundenamen: " + aktualisierteHundenamen);






