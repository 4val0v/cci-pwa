import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { CurrencyInfo, CurrencyListItem } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) { }

  getCurrencyList() {
    return this.http.get<CurrencyListItem[]>('assets/data.json');
  }

  fetchCurrencyInfo(id: string) {
    return this.http.get<CurrencyInfo>(`https://api.coinmarketcap.com/v1/ticker/${id}/`)
      .pipe(
        map(info => info[0])
      );
  }
}
