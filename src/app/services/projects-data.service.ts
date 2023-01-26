import { Injectable } from '@angular/core';
import { abletonData } from "../projects/ableton/abletonData";

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {


  getAbletonData(): any {
    return abletonData
  }

  constructor() { }
}
