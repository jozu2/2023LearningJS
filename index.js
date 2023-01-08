//////////FUNCTIONS//////////
//function declaration
function greet(){
    console.log("hello");
}

//function expression
const greetAgain = function(){
    console.log("hello there");
};
greet();
greet();
greetAgain();

//aruguments & parameters

const speakAi = function(daytime, user){
    console.log(`good ${daytime} ${user}`)
};
speakAi("evening", "joshua");

//returning values
const calcArea = function(radius){
    return 3.14 * radius**2;
};

const ans = calcArea(5);
console.log(ans)

//arrow functions
const calcAreaArrow = radius => 3.14 * radius**2;

const calcArrow = calcAreaArrow(5);
console.log(`area is:`, calcArrow)

//practice arrwoFUnc
const greetArrow = () =>  "hello world";
const result = greetArrow();
console.log(result)


const bill = (products, tax) => {
    let total = 0;
    for(let i =0; i <products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));

//callbacks & forEach
let people = [`kian`, `kreya`, `josu`, `kei`];

const logPerson = (name, index) => {
    console.log(`${index} - hello ${name}`)
}

people.forEach(logPerson)

//practice
const ul = document.querySelector('.people');
const users = [`kian`, `kreya`, `josu`, `kei`];

let content = '';

users.forEach((user, num) => {
    content += `<li style = "color: red">${user} is number ${num}</li> `; }
);

console.log(content);
ul.innerHTML = content;

