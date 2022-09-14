// Question 1
var ages=['3,9,23.64,2,28,93'];

console.log(ages[ages.length -1] - ages[0])

console.log(ages.push (43))

console.log(ages [ages.length-1] - ages [0])

console.log(ages) 

let total = 0
for ( let i= 0; i < ages.length, i++) {
    const age= ages[i]
      total= total + age
}

console.log(total/ages.length)

let total= 0
for (let i = 0; i < ages.length; i++) {
    const ages = ages[i]
    total = (total + ages)
}

console.log(total/ages.length)



//Question 2:
 const names ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let total = 0
 for (let index = 0; index < names.length; index++) {
    const letters = array[index];
    console.log(names)
    const numberOfLetters = names.length
    console.log(names.length)
    total = total + letters

    names.forEach(name => {
        const numberOfLetters = names.length
        total = total + numberOfLetters
    });
    
 }
 const averageletters = total/names.length
console.log("averageLetters". averageLetters)
console.log(letters)

console.log(allNames)
console.log(names.join)



//Question 3: 

array(array.length - 1)
console.log(myArray[myArray.length])


//Question 4
array(0)


// Question 5:

let nameLengths= [];
nameLengths.push('Sam','Tommy','Tim','Sally','Buck','Bob');
 
console.log(lenghts);

let sum = nameLengths.reduce(function(accumulator,currentVaule){
    return accumulator + currentValue;
});
console.log(sum);

for( let i=0; i < names.Length; i++){
    console.log(nameLengths.);
}

// Question 6

let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];

for ( let i=0; i < nameLenghts; i++) {
    console.log(nameLenghts [i]); 
}

// Question 7

function myWord (){
    for (let i = n < 3;)
    console.log(n);


}

myWord();

function n ( "hello") {
    console.log('hello');
}


// Question 8

function fullName(firstName, lastName) {
    return firstName.contact(' ', lastName);
}


console.log("arrayOfNumbers". arrayOfNumbers)



//Question 9

function greaterThan(numbers) {
    let sum = 0
    for (let i = 0; < numbers.length;i++) {
        sum = sum + numbers [i]
    }
    if (sum > 100) return true
}

console.log(greaterThan(100, 10))

// Question 10

function (arrayOfNumbers)
let total = 0
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const letters = array[index];
    console.log(arrayOfNumbers)

// Question 11
function isOneBiggerThanTwo( arr1, arr2) {
const arr1 = [1,2,3]
const arr2 = [4,5,6]
let total1: = 0
for ( let i = 0; i < arr1.length; i++) {
    total= (total + arr1[i])
}
const average1 = total1/arr1.length
console.log( average1) 

const arr2 =[4,5,6]
let total2: = 0
for ( let i = 0; i < arr2.length; i++) {
    total= (total + arr2[i])
}
const average2 = total1/arr2.length

console.log(average2)

If ( average1 > average2) console.log(true)

}

console.log([1,2,3], [4,5,6])


// Question 12

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        console.log("Yes, I think I will have a drink today.");
    } else {
        console.log("I am broke and it's hot, i'm not having a drink.");
    }
}
console.log(willBuyDrink(true, 10.50));


// Question 13
// 13.) Create a function of my own, write what it does and why you created it:
function monsterHunterIsAGreatGame(x) {
    if (x === true) {
        return "One of my favorites and by far a classic video game."
    } else {
        return "That game is just not for me, honestly."
    }
}
console.log(monsterHunterIsAGreatGame(true)); 