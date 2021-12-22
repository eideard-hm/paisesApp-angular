import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false;
  results: Country[] = [];

  constructor(private countryService: CountryService) { }

  buscar() {
    this.hayError = false;
    this.countryService.searchByCountry(this.termino)
      .subscribe(
        (res) => this.results = res,
        (err) => {
          this.hayError = true;
          this.results = [];
        }
      )
  }
}
