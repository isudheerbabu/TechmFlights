import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Flights } from './flights.interface';

@Injectable({
  providedIn: 'root'
})
export class FlightResultsService {
private apiData = new BehaviorSubject<any>(null);
public apiData$ = this.apiData.asObservable();
  endpoint = 'http://localhost:3000/flights';
  fullData: any;
  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // getResults() {
  //  return this.http.get(this.endpoint).pipe(
  //     retry(1),
  //     catchError(this.processError)
  //     );
  // }

  getFilterResults(params?) {
    let query = new URLSearchParams();
    // tslint:disable-next-line:no-string-literal
    if (params['fromCity']) {
      query.append('fromCity', params.fromCity);
    }
    if (params['toCity']) {
      query.append('toCity', params.toCity);
    }
    return this.http.get(`${this.endpoint}?${query.toString()}`).pipe(
      map((result: Flights[]) => {
        this.fullData = result;
        this.apiData.next(this.fullData);
        return result;
      })
    );
  }
  setData(data) {
    this.apiData.next(data);
    }

  processError(err) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\n Message: ${err.message}`;
    }
    return throwError(message);
  }

}
