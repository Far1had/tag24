let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
  ];

  let namesForEach = [];
  edelMetallPreise.forEach(function(edelMetall) {
    namesForEach.push(edelMetall.name);
  });

  let namesMap = edelMetallPreise.map(function(edelMetall) {
    return edelMetall.name;
  });

  let pricesForEach = [];
  edelMetallPreise.forEach(function(edelMetall) {
    pricesForEach.push(edelMetall.preiseGramEuro);
  });

  let pricesMap = edelMetallPreise.map(function(edelMetall) {
    return edelMetall.preiseGramEuro;
  });

   let changesForEach = [];
  edelMetallPreise.forEach(function(edelMetall) {
    changesForEach.push(edelMetall.veraenderung);
  });

  let changesMap = edelMetallPreise.map(function(edelMetall) {
    return edelMetall.veraenderung;
  });

  let expensiveMetals = edelMetallPreise.filter(function(edelMetall) {
    return edelMetall.preiseGramEuro > 50;
  });

  // Gib alles als Tabelle in deinem HTML-Dokument aus.
  document.write("<table border='1'>");
  document.write("<tr><th>Name</th><th>Preis pro Gramm (Euro)</th><th>Veränderung</th></tr>");

  // Ausgabe der Daten in HTML-Tabelle
  for (let i = 0; i < edelMetallPreise.length; i++) {
    document.write("<tr>");
    document.write("<td>" + edelMetallPreise[i].name + "</td>");
    document.write("<td>" + edelMetallPreise[i].preiseGramEuro + "</td>");
    document.write("<td>" + edelMetallPreise[i].veraenderung + "</td>");
    document.write("</tr>");
  }

  document.write("</table>");

  console.log("namesForEach:", namesForEach);
  console.log("namesMap:", namesMap);
  console.log("pricesForEach:", pricesForEach);
  console.log("pricesMap:", pricesMap);
  console.log("changesForEach:", changesForEach);
  console.log("changesMap:", changesMap);
  console.log("expensiveMetals:", expensiveMetals);