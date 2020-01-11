import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeWeekComponent } from './freeweek/freeweek.component';
import { AllchampionsComponent } from './allchampions/allchampions.component';

const routes: Routes = [
  { path: '', component: FreeWeekComponent
 },
  { path: 'allChampions', component: AllchampionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }