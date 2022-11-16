import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task2Component } from './task2/task2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VisualizeComponent } from './visualize/visualize.component';

@NgModule({
  declarations: [
    AppComponent,
    Task2Component,
    VisualizeComponent
  ],
  imports: [
     BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    
  ],
  providers: [
    AngularMaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
