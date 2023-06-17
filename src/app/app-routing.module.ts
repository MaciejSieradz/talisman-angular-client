import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";

const routes: Routes = [
  {path: 'deck/:deck-name', component: MainPageComponent},
  { path: '', redirectTo: '/deck/all', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
