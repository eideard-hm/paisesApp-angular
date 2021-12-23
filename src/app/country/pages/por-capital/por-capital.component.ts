import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  results: Country[] = [];

  constructor(private countryService: CountryService) { }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.countryService.searchByCapital(this.termino)
      .subscribe({
        next: (res) => this.results = res,
        error: () => {
          this.hayError = true;
          this.results = [];
        }
      })
  }

  sugerencia(termino: string) {
    this.hayError = false;
    console.log(termino)
  }
}
