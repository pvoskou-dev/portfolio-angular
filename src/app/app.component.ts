import { Component, ElementRef, OnInit } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isMobile = window.innerWidth <= 600;
  isOpen = false;

  navbar = document.getElementById('nav-bar-mobile');

  constructor(private el: ElementRef, private dataService: DataService) {}

  ngOnInit(): void {
    this.closeMenu();
    console.log(this.isMobile);
    this.dataService.getWelcomeText();
    this.dataService.getWelcomeImages();
    this.dataService.getFeaturesData();
  }

  openMenu() {
    console.log('open');
    this.isOpen = true;
  }
  closeMenu() {
    console.log('Close');
    this.isOpen = false;
  }
}
