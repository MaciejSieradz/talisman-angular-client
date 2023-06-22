import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Deck} from "../models/deck";
import {DeckStatistics} from "../models/deck-statistics";
import {EnemiesStatistics} from "../models/enemies-statistics";
import {Card} from "../models/card";
import {EnemiesInDeck} from "../models/enemies-in-deck";

const DEFAULT_PATH = "https://talisman-resource-server-production.up.railway.app/api";

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) { }

  getDecks(): Observable<Array<Deck>> {
    return this.http.get<Array<Deck>>(DEFAULT_PATH);
  }

  getDeckFromName(nameOfDeck: string): Observable<Deck> {
    return this.http.get<Deck>(DEFAULT_PATH + "/decks/" + nameOfDeck);
  }

  getEnemiesFromDeck(nameOfDeck: string) : Observable<Array<Card>> {
    return  this.http.get<Array<Card>>(DEFAULT_PATH + "/decks/" + nameOfDeck, {params: {"type": "WRÓG"}});
  }

  getBasicStatisticsFromUniqueCardsFromAllDecks(): Observable<DeckStatistics> {
    return this.http.get<DeckStatistics>(DEFAULT_PATH + "/statistics/unique");
  }

  getBasicStatisticsFromUniqueCardsFromDeck(nameOfDeck: string): Observable<DeckStatistics> {
    return this.http.get<DeckStatistics>(DEFAULT_PATH + "/statistics/unique/" + nameOfDeck);
  }

  getBasicStatisticsFromAllCardsFromAllDecks(): Observable<DeckStatistics> {
    return this.http.get<DeckStatistics>(DEFAULT_PATH + "/statistics/all");
  }

  getBasicStatisticsFromAllCardsFromDeck(nameOfDeck: string): Observable<DeckStatistics> {
    return this.http.get<DeckStatistics>(DEFAULT_PATH + "/statistics/all/" + nameOfDeck);
  }

  getEnemiesStatisticsFromDeck(nameOfDeck: string) : Observable<EnemiesStatistics> {
    return this.http.get<EnemiesStatistics>(DEFAULT_PATH + "/statistics/all/" + nameOfDeck + "/enemies");
  }

  getEnemies(nameOfDeck: string) : Observable<Array<EnemiesInDeck>> {
    return this.http.get<Array<EnemiesInDeck>>(DEFAULT_PATH + "/statistics/enemies/" + nameOfDeck);
  }
}
