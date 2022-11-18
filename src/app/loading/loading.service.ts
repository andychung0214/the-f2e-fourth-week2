import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = new Subject<boolean>();

  constructor() { }

  setIsLoading(value: boolean) {
    this.isLoading.next(value);
  }

  getIsLoading() {
    return this.isLoading.asObservable();
  }
}
