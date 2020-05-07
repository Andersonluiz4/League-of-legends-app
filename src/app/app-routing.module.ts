import { ChatroutesComponent } from './chatroutes/chatroutes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeWeekComponent } from './freeweek/freeweek.component';
import { AllchampionsComponent } from './allchampions/allchampions.component';
import { SpectatorComponent } from './spectator/spectator.component';

const routes: Routes = [
  { path: '', component: FreeWeekComponent
 },
 { path: 'spectate', component: SpectatorComponent
 },
 { path: 'chat', component: ChatroutesComponent
 },
  { path: 'allchampions', component: AllchampionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
