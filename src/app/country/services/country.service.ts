import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }


  searchByCountry(country: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${country}`;
    return this.http.get<Country[]>(url);
  }

  searchByCapital(capital: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  searchByCode(code: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url)
  }
}
