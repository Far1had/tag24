// let person = {
//     vorname: 'Anton',
//     nachname: 'Fish',
//     alter: 34,
//     familienstand: 'ledig',
//     groesse: '178cm',
//     profil: function () {
//         return this...;
// }
// };
// //gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
// document.getElementById("person").innerHTML = person.profil();


let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function () {
        return `
                <div>
                    <h1>${this.vorname} ${this.nachname}</h1>
                    <p>Alter: ${this.alter}</p>
                    <p>Familienstand: ${this.familienstand}</p>
                    <p>Größe: ${this.groesse}</p>
                    </div>
                `;
    }
};

document.getElementById("person").innerHTML = person.profil();
