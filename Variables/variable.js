let year = 1967;
let newYear = year + 10;
console.log(newYear);


let capCity = "Springfield";
let state = "Illinois";
let population = "115,888";

console.log(capCity + ",  " + state + ",  " + population);

const lastName = "Davidson";
const firstName = "Mike";
let phone = "317-555-7777";  
let address = " 1153 east 56th";

console.log(`${firstName} ${lastName} Phone:${phone} Address:${address} `);


let years = ['1910', '1920', '1930', '1940', '1950'];
console.log(years[2]);
let names = ['bob', 'steve', 'billy', 'laura', 'shelly'];
console.log(names[1], years[2]);
let fruit = ['banana', 'apple', 'kiwi', 'strawberry'];
console.log(years[4], fruit[3], names[1])



// different arrangement
//let year = 1967;
//let newYear = year + 10;
//let capCity = "Springfield";
//let state = "Illinois";
//let population = "115,888";
//const lastName = "Davidson";
//const firstName = "Mike";
//let phone = "317-555-7777";  
//let address = " 1153 east 56th";
//let years = ['1910', '1920', '1930', '1940', '1950'];
//let names = ['bob', 'steve', 'billy', 'laura', 'shelly'];
//let fruit = ['banana', 'apple', 'kiwi', 'strawberry'];

console.log(newYear);
console.log(capCity + ",  " + state + ",  " + population);
console.log(`${firstName} ${lastName} Phone:${phone} Address:${address} `);
console.log(years[2]);
console.log(names[1], years[2]);
console.log(years[4], fruit[3], names[1])

function cityState(capital, newstate){
    let capState = capital + " " + newstate;
    return capState
}
console.log(cityState("Indaianapolis", "Indiana"))