import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionsComponent } from './functions/functions.component';
import { AllchampionsComponent } from './allchampions/allchampions.component';

const routes: Routes = [
  { path: '', component: FunctionsComponent
 },
  { path: 'allChampions', component: AllchampionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }