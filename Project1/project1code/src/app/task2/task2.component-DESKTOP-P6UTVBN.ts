
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SortingService } from '../service/sorting/sorting.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
// Time in miliseconds and take 10,000 large values for calculation
export class Task2Component implements OnInit {
  buttonName = 'Calculate'
  time = 0
  alogDisable = true
  sortedArray = []
  arrayInput: Number[] = []
  popup = false
  randomFlag = false

  constructor(private router: Router, private sorting: SortingService) { }

  algo = [
    { key: 1, value: 'Bubble' },
    { key: 2, value: 'Quick' },
    { key: 3, value: 'Merge' },
    { key: 4, value: 'Insertion' },
    { key: 5, value: 'Selection' },
    { key: 6, value: 'Heap' },
    { key: 7, value: 'Quick 3 Median' }]
  ngOnInit(): void {
  }

  // [Validators.pattern('^[\d,\s]+$'),Validators.required,]
  arrayForm = new FormGroup({
    array: new FormControl('',),
    lengthrandomArray: new FormControl(''),
    algorithm: new FormControl('')
  })
  visual() {
    this.router.navigate(['/visual'])
  }
  randomArray() {
    this.randomFlag = true
    this.arrayForm.controls['array'].disable()
  }
  onsubmit() {
    this.popup = true
    if (this.randomFlag == true) {
      this.arrayInput = Array.from({ length: Number(this.arrayForm.value.lengthrandomArray) }, () => Math.floor(Math.random() * Number(this.arrayForm.value.lengthrandomArray)));
    }
    else {
      this.arrayInput = this.arrayForm.value.array.split(/[', ']+/).map(Number)
    }
    if (this.arrayInput.length > 1) {
      if (this.arrayForm.value.algorithm == 1) {
        var start = performance.now()
        this.sortedArray = this.sorting.bubbleSort(this.arrayInput);
        var end = performance.now()
        this.time = (end - start) /1000
      } else if (this.arrayForm.value.algorithm == 2) {
        var start = performance.now()
        this.sortedArray = this.sorting.quickSort(this.arrayInput,0,this.arrayInput.length-1);
        var end = performance.now()
        this.time = (end - start)/1000
      }
      else if (this.arrayForm.value.algorithm == 3) {
        var start = performance.now()
        this.sortedArray = this.sorting.mergeSort(this.arrayInput);
        var end = performance.now()
        this.time = (end - start)/1000
      } else if (this.arrayForm.value.algorithm == 4) {
        var start = performance.now()
        this.sortedArray = this.sorting.insertionSort(this.arrayInput);
        var end = performance.now()
        this.time = (end - start)/1000
      } else if (this.arrayForm.value.algorithm == 5) {
        var start = performance.now()
        this.sortedArray = this.sorting.selectionSort(this.arrayInput);
        var end = performance.now()
        this.time = (end - start)/1000
      } else if (this.arrayForm.value.algorithm == 6) {
        var start = performance.now()
        this.sortedArray = this.sorting.heapSort(this.arrayInput);
        var end = performance.now()
        this.time = (end - start)/1000
      }else if (this.arrayForm.value.algorithm == 7) {
        var start = performance.now()
        this.sortedArray = this.sorting.threeMedianQuickSort(this.arrayInput,0,this.arrayInput.length-1);
        var end = performance.now()
        this.time = (end - start)/1000
      }
    }

  }
  reset() {
    this.arrayForm.reset()
    this.randomFlag = false
    this.arrayForm.controls['array'].enable()
    this.sortedArray = []
    this.arrayInput = []
    this.time = 0
  }

}
