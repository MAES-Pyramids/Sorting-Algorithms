# Prim's Algorithm
Prim's Algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. This
means it finds a subset of the edges that forms a tree that includes every node, where the total weight of all the
edges in the tree are minimized.

### Description of Prim's Algorithm:
#### The algorithm may informally be described as performing the following steps:

- Initialize a tree with a single vertex, chosen arbitrarily from the graph.
- Grow  tree by one edge: of the edges that connect the tree to vertices ( **not yet in the tree** ), then find the minimum-weight edge, and transfer it to  tree.
- Repeat step 2 (until all vertices are in the tree).

---
<p align="center">
<h1>Input Graph</h1>
  <img width="500"  src="https://www.geeksforgeeks.org/wp-content/uploads/Fig-11.jpg" />
  
<h1>Output Graph</h1>
  <img width="500"  src="https://www.geeksforgeeks.org/wp-content/uploads/MST5.jpg" />
  
</p>

---




