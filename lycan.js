const JOURNAL = require('./journal.js');

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

let events = journalEvents(JOURNAL);
let max = -1;
let min = 1;
let maxEvent;
let minEvent;
let current;
for (let event of events) {
    current = phi(tableFor(event, JOURNAL));
    if(current > max){
        maxEvent = event;
        max = current;
    }
    else if(current < min){
        minEvent = event;
        min = current;
    }
}

console.log(`${maxEvent}: ${phi(tableFor(maxEvent, JOURNAL))} + ${minEvent}: ${phi(tableFor(minEvent, JOURNAL))}`);

for(let entry of JOURNAL){
    if (entry.events.includes(maxEvent) && !entry.events.includes(minEvent)){
        entry.events.push(`${maxEvent} ${minEvent}`);
    }
}

console.log(phi(tableFor(`${maxEvent} ${minEvent}`, JOURNAL)));
