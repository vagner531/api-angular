import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RankingsTableComponent } from './rankings-table/rankings-table.component';
import { RankingsService } from './rankings.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RankingsTableComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule, 
    FormsModule// importa o módulo que declara o router-outlet
  ],
  providers: [
    RankingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
