import { Component, OnInit } from '@angular/core';
import { IWelcomeImages, IWelcomeText } from 'src/app/interfaces/interfaces';
import { welcomeImages, welcomeText } from 'src/app/data/default-data';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeText: IWelcomeText = welcomeText;
  welcomeImages: IWelcomeImages [] = welcomeImages;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.welcomeText = this.dataService.getWelcomeText()
    this.welcomeImages = this.dataService.getWelcomeImages()

  }

}
