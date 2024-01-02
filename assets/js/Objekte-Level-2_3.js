const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
  ];

  let nameTable = document.createElement("table");
  let nameTableHeader = nameTable.createTHead();
  let nameTableRow = nameTableHeader.insertRow();
  let nameTableHeaderCell = nameTableRow.insertCell(0);
  nameTableHeaderCell.textContent = "";

  document.body.appendChild(nameTable);

  let detailsTable = document.createElement("table");
  let detailsTableHeader = detailsTable.createTHead();
  let detailsTableRow = detailsTableHeader.insertRow();
  for (let key in singers[0]) {
    let detailsTableHeaderCell = detailsTableRow.insertCell();
    detailsTableHeaderCell.textContent = key;
  }

  singers.forEach(function(singer) {
    let detailsTableRow = detailsTable.insertRow();
    for (let key in singer) {
      let detailsTableCell = detailsTableRow.insertCell();
      detailsTableCell.textContent = singer[key];
    }
  });

  document.body.appendChild(detailsTable);

  