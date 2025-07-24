function countChar(script){
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