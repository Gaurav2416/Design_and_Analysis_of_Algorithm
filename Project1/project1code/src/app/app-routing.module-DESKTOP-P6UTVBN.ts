import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task2Component } from './task2/task2.component';
import { VisualizeComponent } from './visualize/visualize.component';

const routes: Routes = [
  {path:'', component: Task2Component},
  {path:'visual',component: VisualizeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
