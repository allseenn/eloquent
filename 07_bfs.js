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

    // Инициализируем для всех узлов
    for (let node in graph) {
        visited[node] = false;
        distances[node] = -1;
        parents[node] = null;
    }

    queue.push(start);
    visited[start] = true;
    distances[start] = 0;

    while (queue.length > 0) {
        const current_node = queue.shift();
        const neighbors = graph[current_node];

        for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
                distances[neighbor] = distances[current_node] + 1;
                parents[neighbor] = current_node;
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
result = bfs(graph, "Alice's House");


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