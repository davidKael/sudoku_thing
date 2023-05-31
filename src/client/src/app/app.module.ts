import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GridFieldComponent } from './components/grid-field/grid-field.component';
import { FormsModule } from '@angular/forms';
import { PlayerNameComponent } from './components/player-name/player-name.component';
@NgModule({
  declarations: [
    AppComponent,
    GridFieldComponent,
    PlayerNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
