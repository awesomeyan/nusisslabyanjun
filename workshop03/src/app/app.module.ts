import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StarWarsService} from './starwars.service';
import {StarWarsStorageService} from './starwars.storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, FormsModule, HttpClientModule
  ],
  providers: [StarWarsService,StarWarsStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
