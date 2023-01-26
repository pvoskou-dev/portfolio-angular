import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IFeatures } from 'src/app/interfaces/interfaces';
import { featuresData } from 'src/app/data/default-data';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  features: IFeatures = featuresData

  constructor(private dataService: DataService) {}

  ngOnInit(): void{
    this.features = this.dataService.getFeaturesData()

  }

}
