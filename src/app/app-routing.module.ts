import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SomebodyToLoveComponent } from './somebody-to-love/somebody-to-love.component';
import { DuComponent } from './du/du.component';
import { GodzillaComponent } from './godzilla/godzilla.component';
import { ConspiratorsComponent } from './conspirators/conspirators.component';

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
  path: 'somebody-to-love/:id',
  component: SomebodyToLoveComponent,
},
{
  path: 'bet/:id',
  component: DuComponent,
},
{
  path: 'godzilla/:id',
  component: GodzillaComponent,
},
{
  path: 'conspirators/:id',
  component: ConspiratorsComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
