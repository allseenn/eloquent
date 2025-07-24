const SCRIPTS = require('./scripts.js');

// function countChar(script){
//     let count = 0;
//         script.ranges.forEach(range => {
//             count += (range[1] - range[0]);
//     });
//     return count;
// }


// res = SCRIPTS.reduce((max, i) => {
//     return max < countChar(i)?countChar(i):max;
// }, 0);

// console.log(res);

// console.log(countChar(SCRIPTS.reduce((a, b) => {
//     aChar = countChar(a);
//     bChar = countChar(b);
//     if(aChar > bChar) return a;
//     else return b;
// })));

// let max = null;
// for(let script of SCRIPTS){
//     if(max == null || countChar(script) > countChar(max)) 
//         max = script;
// }

// console.log(countChar(max));

// console.log(
//     (SCRIPTS.reduce((acc,b) => {
//         return acc+b.year
//     },0))/SCRIPTS.length
// );

// 1. метод
const {sum, count} = SCRIPTS.reduce((acc,b) => {
    if(b.living == true) {
        acc.sum+=b.year
        acc.count++
    }
    return acc
},{sum: 0, count: 0})
console.log(Math.round(sum/count));
// 2. метод
function average(array){
    return array.reduce((a,b) => a+b)/array.length;
}

console.log(Math.round(average(SCRIPTS.filter(s=> s.living).map(s=>s.year))));

// console.log(
// (SCRIPTS.reduce((acc,b) => {
//     if(b.living == false) return acc+b.year
//     else return acc
// },0))/SCRIPTS.length
// );

console.log(SCRIPTS.filter(i => i.living).map(i => i.year=0));



const emoji = "😊";

console.log(emoji.length); // ❗ 2, а не 1
console.log(emoji.charCodeAt(0)); // d83d (старший суррогат)
console.log(emoji.charCodeAt(1)); // de0a (младший суррогат)
console.log(emoji.codePointAt(0)); // полноценный суррогат
console.log(emoji[0]);  // � (неправильный символ)

