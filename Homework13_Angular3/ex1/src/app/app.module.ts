import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsService } from './students.service';
import { ProfileComponent } from './profile/profile.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/profile/:id', component: ProfileComponent},
  {path: '**', redirectTo: 'home'}
];


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
