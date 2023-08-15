import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SomebodyToLoveComponent } from './somebody-to-love/somebody-to-love.component';
import { DuComponent } from './du/du.component';

const routes: Routes = [   {
  path: '',
  redirectTo: 'main',
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
