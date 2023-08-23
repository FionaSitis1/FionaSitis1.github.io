import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Ch1Component } from './ch1/ch1.component';
import { Ch2Component } from './ch2/ch2.component';
import { Ch3Component } from './ch3/ch3.component';
import { Ch4Component } from './ch4/ch4.component';
import { Ch5Component } from './ch5/ch5.component';
import { Ch6Component } from './ch6/ch6.component';
import { Ch7Component } from './ch7/ch7.component';
import { Ch8Component } from './ch8/ch8.component';
import { Ch9Component } from './ch9/ch9.component';
import { Ch10Component } from './ch10/ch10.component';
import { Ch11Component } from './ch11/ch11.component';
import { Ch12Component } from './ch12/ch12.component';
import { Ch13Component } from './ch13/ch13.component';
import { Ch14Component } from './ch14/ch14.component';
import { Ch15Component } from './ch15/ch15.component';
import { Ch16Component } from './ch16/ch16.component';
import { Ch17Component } from './ch17/ch17.component';
import { Ch18Component } from './ch18/ch18.component';
import { Ch19Component } from './ch19/ch19.component'

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    Ch1Component,
    Ch2Component,
    Ch3Component,
    Ch17Component,
    Ch4Component,
    Ch5Component,
    Ch6Component,
    Ch7Component,
    Ch8Component,
    Ch9Component,
    Ch10Component,
    Ch11Component,
    Ch12Component,
    Ch13Component,
    Ch14Component,
    Ch15Component,
    Ch16Component,
    Ch18Component,
    Ch19Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
