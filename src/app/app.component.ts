import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `Meu<router-outlet></router-outlet>Caramelo`
})
export class AppComponent {
}
