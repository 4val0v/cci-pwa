import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RefresherService {
  private refreshListSubject = new Subject();

  refresh() {
    return this.refreshListSubject.asObservable()
      .pipe(
        share()
      );
  }

  startRefresh() {
    return this.refreshListSubject.next();
  }
}
