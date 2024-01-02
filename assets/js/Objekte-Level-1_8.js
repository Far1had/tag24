let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];
console.log(studentData);
console.log(studentData[0].name);
console.log(studentData[0].coop);
console.log(studentData[0].emails);
console.log(studentData[1].name);
console.log(studentData[1].coop);
console.log(studentData[1].emails);

console.log();
studentData.forEach(function(student, index) {
    console.log(index + ": \"" + student.address.city + "\"");
});
console.log("length:", studentData.length);