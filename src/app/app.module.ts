import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { DeckPageComponent } from './pages/main-page/deck-page.component';
import {HttpClientModule} from "@angular/common/http";
import {NgChartsModule} from "ng2-charts";
import { DeckBaseStatisticsPieChartComponent } from './shared/deck-base-statistics-pie-chart/deck-base-statistics-pie-chart.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DeckBaseStatisticsBarChartComponent } from './shared/deck-base-statistics-bar-chart/deck-base-statistics-bar-chart.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DeckPageComponent,
    DeckBaseStatisticsPieChartComponent,
    DeckBaseStatisticsBarChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
