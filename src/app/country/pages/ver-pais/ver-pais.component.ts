import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activitedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.activitedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchByCode(id))
      )
      .subscribe(country => console.log(country))
  }

}
