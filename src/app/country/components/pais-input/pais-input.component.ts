import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  @Output() onEnter = new EventEmitter<string>();

  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }

}
