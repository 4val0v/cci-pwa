import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, share } from 'rxjs/operators';

import { CurrencyInfo, CurrencyListItem } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  reloadCurrencyList = new EventEmitter();

  private totalAmount = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.reloadCurrencyList
      .subscribe(() => {
        this.totalAmount.next(0);
      });
  }

  getCurrencyList() {
    return this.http.get<CurrencyListItem[]>('assets/data.json');
  }

  fetchCurrencyInfo(id: string) {
    return this.http.get<CurrencyInfo>(`https://api.coinmarketcap.com/v1/ticker/${id}/`)
      .pipe(
        map(info => info[0])
      );
  }

  get totalSum() {
    return this.totalAmount.asObservable()
      .pipe(
        share()
      );
  }

  addSumToTotal(amount: number) {
    this.totalAmount.next(this.totalAmount.value + amount);
  }
}
