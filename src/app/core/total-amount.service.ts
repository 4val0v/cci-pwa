import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

import { RefresherService } from './refresher.service';

@Injectable({
  providedIn: 'root'
})
export class TotalAmountService {
  private totalAmountSubject = new BehaviorSubject<number>(0);

  constructor(private refresher: RefresherService) {
    this.resetTotalAmount$();
  }

  get totalAmount() {
    return this.totalAmountSubject.asObservable()
      .pipe(
        share()
      );
  }

  addAmountToTotal(amount: number) {
    this.totalAmountSubject.next(this.totalAmountSubject.value + amount);
  }

  private resetTotalAmount$() {
    this.refresher.refreshCurrencyList()
      .subscribe(() => {
        this.totalAmountSubject.next(0);
      });
  }
}
