import { Component, HostListener } from '@angular/core';

// Comopnents
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth; 
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event: any): void {
    this.innerWidth = window.innerWidth;
  }
}
