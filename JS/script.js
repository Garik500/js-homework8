"use strict"
//1. Ունենք զանգված, որի մեջ կան 10 ուզերների տվյալներ հետևյալ հատկություններով՝ անուն, ազգանուն, էլ․փոստ, հասցե, տարիք օր՝ 19 02 1988, սեռ, աշխատավարձ։
function getAge(birthDay) {
    var today = new Date();
    var birthDate = new Date(birthDay);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};
const users = [
    {
        name:`Tom`,
        lastName: `Smith`,
        mail:`tomsmith@mail.ru`,
        country:`USA`,
        ageday :getAge(`1970 05 18`),
        gender:`male`,
        salery:`1000`
    },
    {
        name:`Samvel`,
        lastName: `Petrosyan`,
        mail:`sampet@mail.ru`,
        country:`Russia`,
        ageday: getAge(`2000 06 19`),
        gender:`male`,
        salery:`1200`
    },
    {
        name:`Arman`,
        lastName: `Margaryan`,
        mail:`armmargh@mail.ru`,
        country:`Armenia`,
        ageday: getAge(`1995 04 19`),
        gender:`male`,
        salery:`500`
    },
    {
        name:`Diana`,
        lastName: `Hovhannisyan`,
        mail:`dianahov@mail.ru`,
        country:`Ukrain`,
        ageday: getAge(`2001 08 01`),
        gender:`female`,
        salery:`700`
    },
    {
        name:`Aram`,
        lastName: `Karapetyan`,
        mail:`aramkarapet@mail.ru`,
        country:`Armenia`,
        ageday: getAge(`1992 07 12`),
        gender:`male`,
        salery:`80`
    },
    {
        name:`Gevorg`,
        lastName: `Barseghyan`,
        mail:`gevbars@mail.ru`,
        country:`Georgia`,
        ageday: getAge(`2006 11 10`),
        gender:`male`,
        salery:`400`
    },
    {
        name:`Armine`,
        lastName: `Petrosyan`,
        mail:`arminepet@mail.ru`,
        country:`Armenia`,
        ageday: getAge(`2008 05 11`),
        gender:`female`,
        salery:`90`
    },
    {
        name:`Mikael`,
        lastName: `Beglaryan`,
        mail:`mikbeg@mail.ru`,
        country:`Armenia`,
        ageday: getAge(`1991 05 18`),
        gender:`male`,
        salery:`600`
    },
    {
        name:`Vardan`,
        lastName: `Mamikonyan`,
        mail:`vardan.mamikonyan451@mail.ru`,
        country:`Armenia`,
        ageday: getAge(`2006 08 27`),
        gender:`male`,
        salery:`2500`
    },
    {
        name:`Sasun`,
        lastName: `Karapetyan`,
        mail:`saskarapet@mail.ru`,
        country:`India`,
        ageday: getAge(`2001 06 18`),
        gender:`male`,
        salery:`300`
    },
];

//1. Առանձնացնել տղաներին։
let result = users.filter(function(person){
    return person.gender === `male`
}).map(function(person){
    return person.name
});
console.log(result);

//2. Առանձնացնել աղջիկներին։
let result1 = users.filter(function(person){
    return person.gender === `female`
}).map(function(person){
    return person.name
});
console.log(result1);

//3. Առանձնացնել նրանց՝ ում աշխատավարձը բարձր է 100-ից։
let highSalery = users.filter(function(person){
    return person.salery > 100
}).map(function(person) {
    return person.name 
})
console.log(highSalery);

//4. Առանձնացնել չափահասներին որոնք Հայաստանից են։
let filteredObject = users.filter(function(person){
    return person.ageday > 18 && person.country === `Armenia`
}).map(function(person){
    return person.name
})
console.log(filteredObject);

//5. Վերադասավորել ըստ տարիքի, աճման կարգով։
let sortedByAge = users.sort((a, b) => a.ageday - b.ageday).map(function(person) {
    return person.name
});
console.log(sortedByAge);

//6. Վերադասավորել ըստ աշխատավարձի, աճման կարգով։
let sortBySalery = users.sort((a, b) => a.salery - b.salery).map(function(person){
    return person.name
});
console.log(sortBySalery);

//7. Վերադասավորել ըստ անվան, այբենական կարգով։
let sort111 = users.map((e) => e.name);
let sortedAlphabet = sort111.sort();
console.log(sortedAlphabet);