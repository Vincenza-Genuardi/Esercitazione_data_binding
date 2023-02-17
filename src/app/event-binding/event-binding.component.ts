import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  testo: string = "Questo è il risultato del terzo data binding"
  italic: string = "stile-italic"

  OnCambiaTesto(){
    this.testo = "testo modificato"
  }

  OnCambiaStile(){
    this.italic = ""
  }
}
