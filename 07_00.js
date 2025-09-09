// массив маршрутов посылок
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

// функция построения графа: один адрес ко многим разрешенным адресатам
function buildGraph(edges) { // построитьГраф(маршруты)
  let graph = Object.create(null); // объект граф = чистый объект
  function addEdge(from, to) { // функция добавитьТочку(из, в)
    if (from in graph) { // если из уже в графе
      graph[from].push(to); // то добавить в массив поля со значение "из" объекта граф элемент со значением "в"
    } else { // иначе
      graph[from] = [to]; // создать массив с одним элементом со значением "в"  в поле объекта со значением "из" 
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) { // пробежаться по картежу (из, в) разделенных по "-" в объекте маршруты   
    addEdge(from, to); // добавить с помощью функции построитьГраф точки из-в
    addEdge(to, from); // добавить с помощью функции построитьГраф точки в-из
  }
  return graph;
}
// объект один ко многим
const roadGraph = buildGraph(roads);
// класс текущего состояния посылок по адресам
class VillageState {
  constructor(place, parcels) { // конструктор принимает (положение робота, коллекцию посылок)
    this.place = place; // положение робота
    this.parcels = parcels; // коллекция недоставленных посылок
  }
  static random(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = Object.keys(roadGraph)[Math.floor(Math.random() * Object.keys(roadGraph).length)];
    let place;
    do {
      place = Object.keys(roadGraph)[Math.floor(Math.random() * Object.keys(roadGraph).length)];
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
}
  move(destination) { // метод перемещения принимает положение робота
    if (!roadGraph[this.place].includes(destination)) { // если текущее положение робота не имеет точки назначения, то
      return this; // вернуть текущее состояние деревни целиком
    } else {
      let parcels = this.parcels.map(p => { // новый массив посылок, который мы вернем в новое состояние деревни, 
                // размапим текущий массив посылок, где рассматриваемая посылка это p
        if (p.place != this.place) return p; // если рассматриваемая посылка не равна текущему положению робота то вернем ее неизменной
        return {place: destination, address: p.address}; // иначе, мы меняем текущее место посылки на переданное в метод move(dest)
      }).filter(p => p.place != p.address); // удаляем доставленные посылки, т.е. оставляем только те, чье положение не равно назначению 
      return new VillageState(destination, parcels); // возвращаем новое состояние деревни, где положение робота меняется на назначение
// из прошлого состояние и измененную коллекцию посылок
    }
  }
}
// Первое состояние деревни (Положение робота, [Коллекция посылок {положение посылки, местоназначения}])
let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);
let next = first.move("Alice's House"); // Второе состояние = Перемещение робота к дому Алисы
console.log(next.place); // Второе.положение робота у дома Алисы
// → Alice's House
console.log(next.parcels); // Коллекция недоставленных посылок на втором шаге
// → []
console.log(first.place); // Первое.положение робота у Почты
// → Post Office

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`${turn} Moved to ${action.direction}`);
  }
}

// console.log(roadGraph)

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

// runRobot(VillageState.random(), randomRobot);

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  console.log(state.parcels);
  return {direction: memory[0], memory: memory.slice(1)};
}

//runRobot(VillageState.random(15), routeRobot, mailRoute);

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

console.log(findRoute(roadGraph, "Cabin", "Grete's House"));

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}
