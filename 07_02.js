const compareRobot = require('./07_01.js').compareRobot;
const findRoute = require('./07_00.js').findRoute;
const roadGraph = require('./07_00.js').roadGraph;
// Task 2
function myRobot({place, parcels}, route) { // состояние деструктурируется в place и parcels, маршрут пустой массив
  if (route.length == 0) { // если маршрут пустой список, 
    let parcel; // то берем первую посылку из списка
    let shortestLength = Infinity;
    for(let i=0; i < parcels.length; i++){
      let currentLength = findRoute(roadGraph, place, parcels[i].place).length;
      if(currentLength < shortestLength){
        shortestLength = currentLength;
        parcel = parcels[i];
      }
    }
    // идем к посылке или к адресату?
    if (parcel.place != place) { // если положение посылки не равно положению робота
      route = findRoute(roadGraph, place, parcel.place); // то находим маршрут от робота до места посылки
    } else {
      route = findRoute(roadGraph, place, parcel.address); // иначе находим маршрут от робота до места назначения
    }
  } // и возвращаем направление и память, где направление - первый элемент маршрута, 
  return {direction: route[0], memory: route.slice(1)}; // а память - маршрут без первого элемента
}

function myRobot2({place, parcels}, route) {
  if (route.length == 0) {
    let route2Parcel;
    let route2Address;
    let route1; 
    let route2;
    let shortest2Parcel = Infinity;
    let shortest2Address = Infinity;
    
    // Находим ближайшую посылку
    for(let i = 0; i < parcels.length; i++) {
      route2Parcel = findRoute(roadGraph, place, parcels[i].place);
      route2Address = findRoute(roadGraph, place, parcels[i].address);
      if (parcels[i].place != place){
        if(route2Parcel.length < shortest2Parcel) {
          shortest2Parcel = route2Parcel.length;
          parcel = parcels[i];
          route = route2Parcel;
        }
      }
      else {
        if(route2Address.length < shortest2Address) {
          shortest2Address = route2Address.length;
          parcel = parcels[i];
          route = route2Address;
        }
      }
    }
    if(route1 < route2 && route1 != 0) route = route1;
    else if (route2 < route2 && route2 != 0) route = route2;
  }
  return {direction: route[0], memory: route.slice(1)};
}


function lazyRobot({place, parcels}, route) {
  if (route.length == 0) {
    // Describe a route for every parcel
    let routes = parcels.map(parcel => {
      if (parcel.place != place) {
        return {route: findRoute(roadGraph, place, parcel.place),
                pickUp: true};
      } else {
        return {route: findRoute(roadGraph, place, parcel.address),
                pickUp: false};
      }
    });

    // This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.
    function score({route, pickUp}) {
      return (pickUp ? 0.5 : 0) - route.length;
    }
    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
  }

  return {direction: route[0], memory: route.slice(1)};
}

function lazyRobot2({place, parcels}, route) {
  if (route.length == 0) {
    // Describe a route for every parcel
    let routes = parcels.map(parcel => {
      if (parcel.place != place) {
        return {route: findRoute(roadGraph, place, parcel.place),
                pickUp: true};
      } else {
        return {route: findRoute(roadGraph, place, parcel.address),
                pickUp: false};
      }
    });

    // This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.
    function score({route, pickUp}) {
      return (pickUp ? 1 : 0) - route.length;
    }
    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
  }

  return {direction: route[0], memory: route.slice(1)};
}

compareRobot(lazyRobot, [], lazyRobot2, [])
