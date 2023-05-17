import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = signal('Jefry')
  lastName = signal('Sánchez')
  fullName = computed(() => `${this.name()}  ${this.lastName()}`)

  setName() {
    this.name.set('change')
  }
}
