// https://sydalwedaie.medium.com/eloquent-js-project-robot-explained-part-1-3861e92bd140
const ROADS = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
]

const roadGraph = buildGraph(ROADS)

// const PARCELS = generateParcels(15);
const PARCELS = [
  { place: "Daria's House", address: "Post Office" },
  { place: "Bob's House", address: "Ernie's House" },
  { place: "Post Office", address: "Alice's House" },
  { place: "Ernie's House", address: "Farm" },
  { place: "Alice's House", address: "Shop" },
]

// const villageState = {
//   currentRobotPlace: "Post Office",
//   remainingParcels: PARCELS,
//   move(destination){
//   if(roadGraph[this.currentRobotPlace].includes(destination)){
//     this.remainingParcels = this.remainingParcels.map(parcel => {
//       if(parcel.place == this.currentRobotPlace) return {place: destination, address: parcel.address};
//       return parcel;
//     }).filter(parcel => parcel.place != parcel.address);
//     this.currentRobotPlace = destination;
//   }
//   console.log(villageState);
// }
// }

class VillageState {
  constructor(place, parcels){
    this.currentRobotPlace = place,
    this.remainingParcels = parcels
  }
  static random(amount = 5){
    const parcels = [];
    const places = Object.keys(roadGraph);
    for (let i = 0; i < amount; i++) {
      let place = places[Math.floor(Math.random()*places.length)];
      let address = places[Math.floor(Math.random()*places.length)];
      if(place!=address) parcels.push({place, address})
      else i--;
    }
    console.log();
    return new VillageState(places[Math.floor(Math.random()*places.length)], parcels)
  }
  move(destination){
    if(roadGraph[this.currentRobotPlace].includes(destination)){
      this.remainingParcels = this.remainingParcels.map(parcel => {
        if(parcel.place == this.currentRobotPlace) return {place: destination, address: parcel.address};
        return parcel;
      }).filter(parcel => parcel.place != parcel.address);
      this.currentRobotPlace = destination;
    } else return this;
    console.log(this);
    return new VillageState(destination, this.remainingParcels)
  }
}

function buildGraph(edges){
    graph = Object.create(null);
    edges.forEach(element => {
        let [start, end] = element.split("-");
        if(!graph[start]) graph[start] = []
        graph[start].push(end);
        if(!graph[end]) graph[end] = []
        graph[end].push(start);
    });
    return graph;
} 

function generateParcels(amount = 5){
  const parcels = [];
  const places = Object.keys(roadGraph);
  for (let i = 0; i < amount; i++) {
    let place = places[Math.floor(Math.random()*places.length)];
    let address = places[Math.floor(Math.random()*places.length)];
    if(place!=address) parcels.push({place, address})
    else i--;
  }
  console.log();
  return parcels
}



function randomRobot(state){
  places = roadGraph[state.currentRobotPlace]
  let direction = places[Math.floor(Math.random()*places.length)]
  return {direction};
}

function runRobot0(){
  let count = 0;
  while(villageState.remainingParcels.length){
    move(randomRobot(villageState).direction);
    count++;
  }
  return count;
}

function routeRobot(state, memory){
  if (memory.length == 0) {
    memory = memory;
  }
  return {direction: memory[0], memory: memory.splice(1)};
}

function runRobot(state, robot, memory){
  let count = 0;
  while(state.remainingParcels.length){
    let action = robot(state, memory)
    state = state.move(action.direction);
    memory = action.memory
    count++;
    console.log(`${count} Moved to ${action.direction}`);
  }
  return count;
}

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
]

//const first = new VillageState("Post Office", PARCELS)
//runRobot(first, routeRobot, mailRoute)
//runRobot(VillageState.random(), randomRobot)
runRobot(VillageState.random(), routeRobot, mailRoute)



