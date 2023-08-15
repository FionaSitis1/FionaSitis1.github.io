import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SomebodyToLoveComponent } from './somebody-to-love/somebody-to-love.component';
import { DuComponent } from './du/du.component';

const routes: Routes = [   {
  path: '',
  redirectTo: 'ch1',
  pathMatch: 'full'
},
{
  path: 'main',
  component: MainComponent,
},
{
  path: 'somebody-to-love',
  component: SomebodyToLoveComponent,
},
{
  path: '赌',
  component: DuComponent,
},
{
  path: 'ch1',
  component: Ch1Component,
},    
{
  path: 'ch2',
  component: Ch2Component,
},
{
  path: 'ch3',
  component: Ch3Component,
},
{
  path: 'ch4',
  component: Ch4Component,
},{
  path: 'ch5',
  component: Ch5Component,
},{
  path: 'ch6',
  component: Ch6Component,
},{
  path: 'ch7',
  component: Ch7Component,
},{
  path: 'ch8',
  component: Ch8Component,
},{
  path: 'ch9',
  component: Ch9Component,
},{
  path: 'ch10',
  component: Ch10Component,
},{
  path: 'ch11',
  component: Ch11Component,
},{
  path: 'ch12',
  component: Ch12Component,
},{
  path: 'ch13',
  component: Ch13Component,
},{
  path: 'ch14',
  component: Ch14Component,
},{
  path: 'ch15',
  component: Ch15Component,
},{
  path: 'ch16',
  component: Ch16Component,
},{
  path: 'ch17',
  component: Ch17Component,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
