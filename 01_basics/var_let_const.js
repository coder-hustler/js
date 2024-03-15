// var has GLOBAL scope, whereas let, const have LOCAL scope
// var: re-declaration and updation allowed
// let: updation allowed
// const: must be initialized at declaration, updation not allowed
var a;
var a;

let b;
const c = 1;

console.log(a, a);
console.log(b);
console.table([a,a]);