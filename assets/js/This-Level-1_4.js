function fahrrad() {
    console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

fahrrad();
obj1.fahrrad();
obj2.fahrrad();  
