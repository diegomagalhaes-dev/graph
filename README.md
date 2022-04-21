# Algoritmos de busca em Grafos

## Geral
* Classe construtora **`Graph`** <br>
    * Vértices representados como **array**.
    * As **adjacências** de cada ***vértice*** está representada dentro de um Objeto no qual cada chave representa um **vértice** e tem como _valor_ um array dos seus vértices adjacentes.
    * Os nós (ligação entre vértices) são contabilizados dentro de uma variável ***edges***.
* Um método **addVertex**, para adicionar os vértices do gráfo.
* Um método **addEdge**, para definir o conjunto **Z** de vértices ligados a um vértice **V**. 

## Depth-First Search (profundidade)
* Armazeno os valores encontrados em um array **discovered**, para definir o que ainda será chamado na recursão.
## Breadth-First Search (largura)

## Para rodar
```
# em plataforma node
$ node teste.js
```
