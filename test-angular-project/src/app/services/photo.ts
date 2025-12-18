import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Photo {
  private _photoUrlSubject = new BehaviorSubject<string | ArrayBuffer | null>(
     null
  );

  photoUrl$ = this._photoUrlSubject.asObservable();

  set photoUrl(url: string | ArrayBuffer | null){
    this._photoUrlSubject.next(url);
  }

  get photoUrl() {
    return this._photoUrlSubject.getValue();
  }
}
