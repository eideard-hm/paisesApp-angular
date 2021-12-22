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
}
