import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreeWeekComponent } from './freeweek/freeweek.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AllchampionsComponent } from './allchampions/allchampions.component';
import { SpectatorComponent } from './spectator/spectator.component';

@NgModule({
  declarations: [
    AppComponent,
    FreeWeekComponent,
    AllchampionsComponent,
    SpectatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
