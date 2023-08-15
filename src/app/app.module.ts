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
import { MainComponent } from './main/main.component'
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RlqHeaderComponent } from './rlq-header/rlq-header.component';
import { SomebodyToLoveComponent } from './somebody-to-love/somebody-to-love.component';
import { DuComponent } from './du/du.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    MainComponent,
    RlqHeaderComponent,
    SomebodyToLoveComponent,
    DuComponent
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
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
