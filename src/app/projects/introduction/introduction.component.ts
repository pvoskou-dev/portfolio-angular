import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IProjectsIntroduction } from 'src/app/interfaces/interfaces';
import { projectsIntroductionData } from 'src/app/data/default-data';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  projectsIntroduction: IProjectsIntroduction = projectsIntroductionData

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.projectsIntroduction = this.dataService.getProjectsIntroductionData()

  }

}
