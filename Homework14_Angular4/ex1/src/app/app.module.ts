import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostformComponent } from './postform.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PostformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
