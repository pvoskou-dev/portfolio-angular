import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IProfile } from 'src/app/interfaces/interfaces';
import { profileData } from 'src/app/data/default-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private dataService: DataService) {}

  profile:IProfile = profileData;

  ngOnInit(): void {
  this.profile = this.dataService.getProfileData();

  }
}
