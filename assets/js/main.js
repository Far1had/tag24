let person = {
    name: "Farhad",
    alter: 51,
    sagNameAlter: function() {
    alert("Mein Name ist " + this.name + " und ich bin " + this.alter + " Jahre alt.");
    }
  };
  
  console.log("Name: " + person.name);
  console.log("Alter: " + person.alter);
  
  person.sagNameAlter();
  