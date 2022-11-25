// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function array(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

//push() used to add an item to the end of an array
function destructivelyAppendCat(){
    cats.push('Ralph');
}
function destructivelyPrependCat() {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function  destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(){
    let copyOfCat = [...cats, "Broom"]
    return copyOfCat
}
function prependCat(){
    let prepend = [" Arnold", ...cats]
    return prepend;
}
function removeLastCat() {
    let removeLast = cats.slice(0,2)
    return removeLast;
}

function removeFirstCat() {
    let removeFirstCat = cats.slice(1)
    return removeFirstCat;
}