import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefresherService {
  private refreshList = new EventEmitter();

  constructor() { }

  refreshCurrencyList() {
    return this.refreshList;
  }
}
