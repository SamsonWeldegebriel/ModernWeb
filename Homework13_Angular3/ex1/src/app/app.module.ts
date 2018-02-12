import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  // {path: 'home', component: AppComponent},
  {path: 'students', component: StudentsComponent},
  {path: '**', redirectTo: 'home'}
];


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
