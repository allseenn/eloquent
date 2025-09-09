const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  
  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  
  return graph;
}

const graph = buildGraph(roads);

const bfs = (graph, start) => {
    const queue = [];
    const visited = {}; // Используем объект вместо массива
    const distances = {};
    const parents = {};

    // Для каждого узла графа выставляем начальные (пустые) значения во всех ключевых объектах
    for (let node in graph) {
        visited[node] = false; // вершина еще не посещена
        distances[node] = -1; // расстояние не известно
        parents[node] = null; // родителей еще нет
    }
    // Инициализация очереди
    queue.push(start); // добавляем в очередь старторвый узел
    visited[start] = true; // помечаем данный узел посещенным
    distances[start] = 0; // выставляем нулевое расстояние, т.к. текущей узел у нас в месте старта
    // цикл прохода по очереди
    while (queue.length > 0) { 
        const current_node = queue.shift(); // удаляем давно стоящий узел из очереди и кладем его в текущий узел 
        const neighbors = graph[current_node]; // получаем всех соседей текущего узла
        // обходим всех соседей текущего узла
        for (const neighbor of neighbors) {
            if (!visited[neighbor]) { // при условии что соседа еще не посещали
                queue.push(neighbor); // помещаем текущего соседа в очередь
                visited[neighbor] = true; // помечаем соседа посещенным
                distances[neighbor] = distances[current_node] + 1; // увеличиваем расстояние соседа на 1
                parents[neighbor] = current_node; // устанавливаем текущему соседу родителем текущей узел
            }
        }
    }

    return {
        visited_nodes: Object.keys(visited).filter(node => visited[node]),
        distances,
        parents
    };
}

// Используем существующий узёл графа в качестве стартового
result = bfs(graph, "Cabin");


function reconstructPath(parents, target) {
    const path = [];
    let current = target;
    
    // Двигаемся от целевой точки к началу через родителей
    while (current !== null) {
        path.push(current);
        current = parents[current];
    }
    
    // Разворачиваем путь, чтобы получить правильный порядок
    return path.reverse();
}

// const result = Object.create(null);

// result.parents = {
//   "Alice's House": null,
//   "Bob's House": "Alice's House",
//   Cabin: "Alice's House",
//   'Post Office': "Alice's House",
//   'Town Hall': "Bob's House",
//   "Daria's House": 'Town Hall',
//   "Ernie's House": "Daria's House",
//   "Grete's House": 'Shop',
//   Farm: 'Marketplace',
//   Shop: 'Town Hall',
//   Marketplace: 'Post Office'
// }
console.log(result);
console.log(reconstructPath(result.parents, "Grete's House"));