import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

// Angular Material
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  menuListOrder = ["INÍCIO", "CADASTRAR", "ENCONTRE UM AMIGO", "SOBRE NÓS", "CONTATOS"];
  
  public menuStatus = signal(false);
  public toggleIcon: string = 'menu';
  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth; 
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event: any): void {
    this.innerWidth = window.innerWidth;
  }

  menuOpen() {
    if (this.menuStatus()) {
      this.menuStatus.set(false);
      this.toggleIcon = 'menu';
      
    } else {
      this.menuStatus.set(true);
      this.toggleIcon = 'close';
    }


  }
}
