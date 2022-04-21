class Graph {
  constructor() {
    this.vertices = [];
    this.adjacent = {};
    this.edges = 0;

    this.blackVertex = [];
    this.grayVertex = [];
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjacent[v] = [];
  }

  consoleColors() {
    console.log(this.grayVertex);
    console.log(this.blackVertex);
    // console.log(this.adjacent);
  }

  addEdge(v, w, birectional = false) {
    this.adjacent[v].push(w);
    birectional && this.adjacent[w].push(v);
    this.edges++;
  }

  bfs(goal, root = this.vertices[0]) {
    let adj = this.adjacent;

    const queue = [];
    queue.push(root);

    const discovered = [];
    discovered[root] = true;

    const edges = [];
    edges[root] = 0;

    const predecessors = [];
    predecessors[root] = null;

    const buildPath = (goal, root, predecessors) => {
      const stack = [];
      stack.push(goal);

      let u = predecessors[goal];

      while (u != root) {
        stack.push(u);
        u = predecessors[u];
      }

      stack.push(root);

      let path = stack.reverse().join("-");

      return path;
    };

    while (queue.length) {
      // remove o primeiro elemento do array e retorna ele (comportamento padrão de filas)
      let v = queue.shift();

      if (v === goal) {
        return {
          distance: edges[goal],
          path: buildPath(goal, root, predecessors),
        };
      }

      for (let i = 0; i < adj[v].length; i++) {
        if (!discovered[adj[v][i]]) {
          discovered[adj[v][i]] = true;
          queue.push(adj[v][i]);
          edges[adj[v][i]] = edges[v] + 1;
          predecessors[adj[v][i]] = v;
        }
      }
    }

    return false;
  }

  // Goal: o que estou buscando
  // V: vértice de onde parte o algorítimo
  dfs(goal, v = this.vertices[0], discovered = []) {
    let adj = this.adjacent;

    // descoberto
    discovered[v] = true;
    // se v = "joao", por exemplo, então
    // discovered terá criada dinamicamente um índice
    // chamado joão, e atribuirá o valor true a ele

    this.grayVertex[v] = "CINZA";

    for (let i = 0; i < adj[v].length; i++) {
      let w = adj[v][i];

      if (!discovered[w]) {
        this.dfs(goal, w, discovered);
      }
      this.blackVertex[v] = "PRETO";
    }
    return discovered[goal] || false;
  }
}

module.exports = Graph;
