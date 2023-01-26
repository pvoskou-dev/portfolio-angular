import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() projectsList = [{image: '', name: '', type: '' }]

  constructor() { }

  ngOnInit(): void {
  }

}
