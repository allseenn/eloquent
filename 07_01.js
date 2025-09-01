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

const villageState = {
  currentRobotPlace: "Post Office",
  remainingParcels: PARCELS,
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

function move(destination){
  if(roadGraph[villageState.currentRobotPlace].includes(destination)){
    villageState.remainingParcels = villageState.remainingParcels.map(parcel => {
      if(parcel.place == villageState.currentRobotPlace) return {place: destination, address: parcel.address};
      return parcel;
    }).filter(parcel => parcel.place != parcel.address);
    villageState.currentRobotPlace = destination;
  }
  console.log(villageState);
}

function randomRobot(state){
  places = roadGraph[state.currentRobotPlace]
  let direction = places[Math.floor(Math.random()*places.length)]
  return {direction};
}

function runRobot(){
  let count = 0;
  while(villageState.remainingParcels.length){
    move(randomRobot(villageState).direction);
    count++;
  }
  return count;
}

console.log(runRobot());