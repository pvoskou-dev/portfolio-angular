import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IProject } from 'src/app/interfaces/interfaces';
import { projectsData } from 'src/app/data/default-data';

@Component({
  selector: 'app-projects-display',
  templateUrl: './projects-display.component.html',
  styleUrls: ['./projects-display.component.css'],
})
export class ProjectsDisplayComponent implements OnInit {
  projects: IProject[] = projectsData;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.projects = this.dataService.getProjectsListData();
  }
}
