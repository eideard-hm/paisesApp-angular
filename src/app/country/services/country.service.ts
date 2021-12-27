import { Country } from './../interfaces/country.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,population,flags');
  }

  searchByCountry(country: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${country}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByCapital(capital: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByCode(code: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url);
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
