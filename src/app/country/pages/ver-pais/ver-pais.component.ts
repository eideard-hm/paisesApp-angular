import { Country } from './../../interfaces/country.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  country!: Country;

  constructor(
    private activitedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activitedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchByCode(id)),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country[0]));
  }
}
