# Merge Sort Algorithm
The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm.
In this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner.

### Merge Sort Working Process:
Think of it as a recursive algorithm continuously splits the array in half until it cannot be further divided.
This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion.
If the array has multiple elements, split the array into halves and recursively invoke the merge sort on each of the halves.
Finally, when both halves are sorted, the merge operation is applied.
Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one.

---
#### The following diagram shows the complete merge sort process for an example array {38, 27, 43, 3, 9, 82, 10}:
<p align="center">
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220722205737/MergeSortTutorial.png" />

If we take a closer look at the diagram, we can see that the array is recursively divided into two halves till the size becomes 1. <br>
Once the size becomes 1, the merge processes come into action and start merging arrays back till the complete array is merged.
</p>
