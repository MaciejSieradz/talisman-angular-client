import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from "@angular/router";
import {DeckPageComponent} from "./pages/main-page/deck-page.component";

const routes: Routes = [
  {path: 'deck/:deck-name', component: DeckPageComponent},
  { path: '', redirectTo: '/deck/all', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
