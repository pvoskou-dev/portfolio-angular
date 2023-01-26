import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile = window.innerWidth <= 600;
  isOpen = false

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.closeMenu();
    console.log(this.isMobile)
    this.dataService.getWelcomeText()
    this.dataService.getWelcomeImages()
    this.dataService.getFeaturesData()
  }

  openMenu() {
    console.log('open');
  this.isOpen = true;

  }
  closeMenu() {
    console.log('Close');
    this.isOpen = false
  }

}
