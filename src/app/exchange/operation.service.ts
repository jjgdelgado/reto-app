import { Injectable } from '@angular/core';
import { ExchangeRate } from './exchange';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Currency } from './currency';

@Injectable()
export class OperationService {
  //private urlEndPoint: string = 'https://apirestbcp.azurewebsites.net/exchange';
  private urlEndPoint: string = 'http://localhost:8080/exchange';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  exchange(exchangeRate: ExchangeRate): Observable<ExchangeRate>{
    return this.http.get<ExchangeRate>(`${this.urlEndPoint}/${exchangeRate.sourceISO}/${exchangeRate.targetISO}/${exchangeRate.mount}`)
  }

  updateExchangeRate(currency: Currency) : Observable<Currency> {
    return this.http.post<Currency>(this.urlEndPoint, currency, {headers: this.httpHeaders})
  }
}
