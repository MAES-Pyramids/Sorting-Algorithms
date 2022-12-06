# Insertion Sort Algorithm
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

### Characteristics of Insertion Sort:
- This algorithm is one of the simplest algorithm with simple implementation
- Basically, Insertion sort is efficient for small data values
- Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.

---
<p align="center">
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png" />
  
  ### To sort an array of size N in ascending order: 

- Iterate from arr[1] to arr[N] over the array. 
- Compare the current element (key) to its predecessor. 
- If the key element is smaller than its predecessor, compare it to the elements before.
  then move the greater elements one position up to make space for the swapped element.
</p>




