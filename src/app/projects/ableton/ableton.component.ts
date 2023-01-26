import { Component, OnInit } from "@angular/core";

import { DomSanitizer } from "@angular/platform-browser";
import { IAbleton } from "./abeltonInterface";
import { ProjectsDataService } from "src/app/services/projects-data.service";
import { abletonData } from "./abletonData";

@Component({
  selector: "app-ableton",
  templateUrl: "./ableton.component.html",
  styleUrls: ["./ableton.component.css"],
})
export class AbletonComponent implements OnInit {
  abletonContent: IAbleton = abletonData;

  constructor(
    private projectsDataService: ProjectsDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.abletonContent = this.projectsDataService.getAbletonData();
  }

  getVideoUrl1() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.abletonContent.videos.video1
    );
  }
  getVideoUrl2() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.abletonContent.videos.video2
    );
  }
}
