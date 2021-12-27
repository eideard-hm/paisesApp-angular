import { CountryService } from './../../services/country.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getClassCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (this.regionActiva === region) return;

    this.regionActiva = region;
    this.countries = [];

    this.countryService
      .searchByRegion(region)
      .subscribe((country) => (this.countries = country));
  }
}
