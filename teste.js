const Graph = require("./graph-search");

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");

// NÃO DIRECIONAL
graph.addEdge("A", "B", true);
graph.addEdge("A", "C", true);
graph.addEdge("A", "D", true);
graph.addEdge("B", "C", true);
graph.addEdge("B", "D", true);
graph.addEdge("C", "D", true);
graph.addEdge("C", "E", true);
graph.addEdge("D", "F", true);
graph.addEdge("F", "G", true);

// // DIRECIONAL
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
// graph.addEdge("C", "A");
// graph.addEdge("C", "B");
// graph.addEdge("C", "E");
// graph.addEdge("E", "F");
// graph.addEdge("C", "D");
// graph.addEdge("F", "G");

console.log("===== CONSOLES ======");
console.log("-> DFS algorithm");
const dfsExists = graph.dfs("F");
const dfsNotExists = graph.dfs("Z");
console.log({ dfsExists, dfsNotExists });
console.log("-> COLORS");
graph.consoleColors();
console.log("-> BFS algorithm");
const bfsExists = graph.bfs("F");
const bfsNotExists = graph.bfs("Z");
console.log({ bfsExists, bfsNotExists });
