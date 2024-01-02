let myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      medium: "LP"
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      medium: "CD"
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      medium: "LP"
    },
    {
      artist: "Metallica",
      title: "Ride the Lightning",
      medium: "CD"
    }
  ];

  myMusic.forEach(function(item) {
    document.getElementById("artistsOutput").innerHTML += item.artist + "<br>";
    document.getElementById("titlesOutput").innerHTML += item.title + "<br>";
    document.getElementById("mediumsOutput").innerHTML += item.medium + "<br>";
  });

myMusic.forEach((all) => {
    console.log(all.artist);
  }); 

  myMusic.forEach((all) => {
    console.log(all.title);
  }); 
  myMusic.forEach((all) => {
    console.log(all.medium);
  }); 




