import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }
  bubbleSort(Array) {
    let len = Array.length;
    for (let i = 0; i < len; i++) { //you can also use "for in", so you don't need the variable "len"
        for (let j = 0; j < len; j++) {
            if (Array[j] > Array[j + 1]) {
                let tmp = Array[j];
                Array[j] = Array[j + 1];
                Array[j + 1] = tmp;
            }
        }
    }
    return Array;
};

insertionSort(arr) {
  let n = arr.length;
      for (let i = 1; i < n; i++) {
          // Select the first element in unsorted 
          let current = arr[i];
          // The last element of our sorted subarray
          let j = i-1; 
          while ((j > -1) && (current < arr[j])) {
              arr[j+1] = arr[j];
              j--;
          }
          arr[j+1] = current;
      }
  return arr;
} 

selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
      let minimum = i; //  storing the index of minimum index value
      for (var j = i + 1; j < arr.length; j++) {
          if (arr[minimum] > arr[ j ]) {
              minimum = j; // updating the j of minimum index value
          }
      }
      if (i !== minimum) {
          let temp = arr[ i ];
          arr[ i ] = arr[minimum];
          arr[minimum] = temp;
      }
  }
  return arr
}

// Heap Sort

heapSort(arr)
	{
		var n = arr.length;

		// Build heap (rearrange array)
		for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
			this.heapify(arr, n, i);

		// One by one extract an element from heap
		for (var i = n - 1; i > 0; i--) {
			// Move current root to end
			var temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp;

			// call max heapify on the reduced heap
			this.heapify(arr, i, 0);
		}
    return arr
	}

	// To heapify a subtree rooted with node i which is
	// an index in arr[]. n is size of heap
	heapify(arr, n, i)
	{
		var largest = i; // Initialize largest as root
		var l = 2 * i + 1; // left = 2*i + 1
		var r = 2 * i + 2; // right = 2*i + 2

		// left child is greater than root node
		if (l < n && arr[l] > arr[largest])
			largest = l;

		// right child is greater than largest uptill now
		if (r < n && arr[r] > arr[largest])
			largest = r;

		// If largest is not root
		if (largest != i) {
			var swap = arr[i];
			arr[i] = arr[largest];
			arr[largest] = swap;

			// Recursively heapify
			this.heapify(arr, n, largest);
		}
   return arr 
	}

  /*Merge Sort */
 mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return this.merge(this.mergeSort(left),this.mergeSort(right))
}
 merge(left, right) {
 let result = Array();
 let l_Index = 0;
 let r_Index = 0;
 while (l_Index < left.length && r_Index < right.length) {
   if (left[l_Index] < right[r_Index]) {
      result.push(left[l_Index]);
      l_Index++;
   } else {
      result.push(right[r_Index]);
      r_Index++;
   }
 }
 return result.concat(left.slice(l_Index)).concat(right.slice(r_Index));
}
// Quick sort
quickSort(arr,l,h)
{
    if(l<h)
    {
        var pivot=this.partiton(arr,l,h);
        this.quickSort(arr,l,pivot-1);
        this.quickSort(arr,pivot+1,h)
    }
    return arr;
}
partiton(arr,low,high){
  var pivot=arr[high];
  var i=low-1;
  for(let j=low;j<high;j++)
  {
      if(arr[j]<pivot)
      {
          i++;
          var temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
      }
  }
  var t=arr[i+1];
  arr[i+1]=arr[high]
  arr[high]=t;
  return (i+1);
  
}
 /*Three median*/
 threeMedianQuickSort(arr, low, high){
  if (low < high) {
      var Pivot = this.threeMedianPartion(arr, low, high)
      this.threeMedianQuickSort(arr, low, Pivot)
      this.threeMedianQuickSort(arr, Pivot + 1, high)
  }
  return arr
}


threeMedianPartion(arr,low,high){
  var left=arr[low];
  var right=arr[high-1]
  var len=high-low;
  var middle=0;
  if(len%2==0){
      middle=arr[(len/2)-1];
  }
  else 
  {
      middle=arr[Math.floor(len/2)];
  }
  var pivot=this.generatedMedian(left,right,middle)
  var index=arr.indexOf(pivot);
  arr[index]=arr[low]
  arr[low]=pivot
  var i=low+1
  for(let j=low;j<=high;j++)
      {
          if(arr[j]<pivot)
          {
              var temp=arr[j];
              arr[j]=arr[i];
              arr[i]=temp;
              i++;
          }
      }
      var t=arr[low];
      arr[low]=arr[i-1]
      arr[i-1]=t;
      return i-1;

}

generatedMedian(left,right,middle){
  if(((left-right)*(middle-left))>=0) return left;
  else if(((right-left)*(middle-right))>=0) return right;
  else return middle;

}
}
