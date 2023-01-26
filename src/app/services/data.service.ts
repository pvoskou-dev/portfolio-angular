import { contactData, featuresData, profileData, projectsData, projectsIntroductionData, welcomeImages, welcomeText } from '../data/default-data';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }



getWelcomeText(){
  return welcomeText;
}
getWelcomeImages(){
  return welcomeImages
}
getFeaturesData(){
  return featuresData
}
getProjectsIntroductionData(){
  return projectsIntroductionData
}
getProjectsListData(){
  return projectsData;
}
getProfileData(){
  return profileData
}

getContactData(){
  return contactData
}

}
