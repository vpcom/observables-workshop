import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, delay, tap } from "rxjs/operators";
import { Country } from '../model.types';

@Injectable({
  providedIn: 'root'
})
export class JapanService {

  japanDataUrl: string = '/assets/japan.json';

  constructor(private http: HttpClient) { }

  public getCountry(callerName): Observable<Country> {
    return this.http.get<any[]>(this.japanDataUrl)
      .pipe(
        map(json => json['data']),
        delay(1500),
        tap(data => console.log(`${callerName} fetching country: `, data)),
        catchError(error => {
          console.warn('Error from JapanService.getCountry', error);
          return throwError(error);
        }
      )
    );
  }
}
