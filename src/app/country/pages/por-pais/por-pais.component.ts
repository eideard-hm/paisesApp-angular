import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  results: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private countryService: CountryService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.countryService.searchByCountry(this.termino).subscribe({
      next: (res) => (this.results = res),
      error: () => {
        this.hayError = true;
        this.results = [];
      },
    });
  }

  sugerencia(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.countryService.searchByCountry(termino).subscribe({
      next: (countries) => (this.paisesSugeridos = countries.slice(0, 5)),
      error: () => (this.paisesSugeridos = []),
    });
  }

  buscarSugerido(termino:string){
     this.buscar(termino);
  }
}
