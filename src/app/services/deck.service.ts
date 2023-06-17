import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Deck} from "../models/deck";
import {DeckStatistics} from "../models/deck-statistics";

const DEFAULT_PATH = "talisman-resource-server-production.up.railway.app/api";

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) { }

  getDecks(): Observable<Array<Deck>> {
    return this.http.get<Array<Deck>>(DEFAULT_PATH);
  }

  getDeckFromName(nameOfDeck: string): Observable<Deck> {
    return this.http.get<Deck>(DEFAULT_PATH + "/" + nameOfDeck);
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

}
