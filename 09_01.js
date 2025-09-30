// let re1 = /ca[rt]/g;
// console.log("car cat sdf".match(re1));

// let re2 = /pr?op/g;
// console.log("pop prop dddd pop".match(re2));

//let re3 = /ferr[(et)y(ari)]+/g;
//console.log("ferret ferry ferrary ferrum".match(re3))

// let re4 = /\b.*ious\b/g;
// console.log("consciousness".match(re4));

// let re5 = /\s[\.,:;]+/g;
// console.log(" . , : ;".match(re5));

// let re6 = /\w{6}\w+/g
// console.log("word567 wordlong".match(re6));

// let re7 = /\b[A-DF-Za-df-z]+\b/g
// console.log("earth bed BEED".match(re7));

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}

verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr[(et)y(ari)]+/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\b.*ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/\w{7}/,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(/\b[A-DF-Za-df-z]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "bedrøvet abe", "BEET"]);


