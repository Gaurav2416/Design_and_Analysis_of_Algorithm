import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
export interface PeriodicElement {
  small: number;
  algorithm: string;
  avg: number;
  large: number;
}
@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})

export class VisualizeComponent implements OnInit {
  labelPlot = ['Quick', 'Merge', 'Heap', 'Insertion', 'Selection', 'Bubble','3 Median']
  myLineChart
  data = {
    labels: this.labelPlot,
    datasets: [{
      label: 'Small N= 500',
      data: [0.00019,0.0010,0.001,0.0022,0.0030,0.0036,0.0017],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },{
      label: 'Average N=1000',
      data: [0.00009,0.0009,0.0015,0.0023,0.0021,0.0051,0.0017],
      fill: false,
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1
    },{
      label: 'Large N=10,000',
      data: [0.00089,0.0125,0.004,0.0341,0.0927,0.291,0.0601],
      fill: false,
      borderColor: 'rgb(255, 205, 86)',
      tension: 0.1
    }]
  } 
  
   ELEMENT_DATA: PeriodicElement[] = [
    {algorithm: 'Bubble', small: 0.0036, avg: 0.0051, large:0.291},
    {algorithm: 'Insertion', small:0.0022, avg: 0.0023, large:0.0341},
    {algorithm: 'Selection', small:0.0030, avg: 0.0021, large:0.0927},
    {algorithm: 'Heap', small:0.001, avg: 0.0015, large:0.004},
    {algorithm: 'Merge', small:0.0010, avg: 0.0009, large:0.0125},
    {algorithm: 'Quick', small:0.00019, avg: 0.00009, large:0.00089},
    {algorithm: 'Three Median Quick', small:0.0017, avg: 0.0027, large:0.0601}
  ];
  displayedColumns: string[] = ['algorithm', 'small', 'avg', 'large'];
  dataSource = this.ELEMENT_DATA;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.visualofsort()
  }
  visualofsort() {
    this.myLineChart = new Chart('ctx', {
      type: 'line',
      data: this.data,
      options: {
        plugins:{
            title: {
              display: true,
              text: 'Performance of Algorithm with respect to Input size',
              padding: {
                top: 10,
                bottom: 30
            }
            }
        },
        scales: {
            y: {
                stacked: true,
                beginAtZero: true,
                title:{
                  display:true,
                  text:'Time(Seconds)'
                }
            },
            x: {
              stacked: true,
              beginAtZero: true,
              title:{
                display:true,
                text:'Algorithm'
              }
          }
        }
    }
  });
  }
 returnHomePage(){
  this.router.navigate(['/'])
 } 
 allData(){
  this.data = {
    labels: this.labelPlot,
    datasets: [{
      label: 'Small N= 500',
      data: [0.00019,0.0010,0.001,0.0022,0.0030,0.0036,0.0017],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },{
      label: 'Average N=1000',
      data: [0.00009,0.0009,0.0015,0.0023,0.0021,0.0051,0.0017],
      fill: false,
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1
    },{
      label: 'Large N=10,000',
      data: [0.00089,0.0125,0.004,0.0341,0.0927,0.291,0.0601],
      fill: false,
      borderColor: 'rgb(255, 205, 86)',
      tension: 0.1
    }]
  } 
 this.myLineChart.destroy()
  this.visualofsort()
 }
 averageData(){
  this.data = {
    labels: this.labelPlot,
    datasets: [{
      label: 'Average N=1000',
      data: [0.00009,0.0009,0.0015,0.0023,0.0021,0.0051,0.0017],
      fill: false,
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1
    }]
  } 

  this.myLineChart.destroy()
  this.visualofsort()

 }
 smallData(){
  this.data = {
    labels: this.labelPlot,
    datasets: [{
      label: 'Small N= 500',
      data: [0.00019,0.0010,0.001,0.0022,0.0030,0.0036,0.0017],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  } 
  this.myLineChart.destroy()
  this.visualofsort()
 }
 largeData(){
  this.data = {
    labels: this.labelPlot,
    datasets: [{
      label: 'Large N=10,000',
      data: [0.00089,0.0125,0.004,0.0341,0.0927,0.291,0.0601],
      fill: false,
      borderColor: 'rgb(255, 205, 86)',
      tension: 0.1
    }]
  } 
  this.myLineChart.destroy()
  this.visualofsort()
 }
}
