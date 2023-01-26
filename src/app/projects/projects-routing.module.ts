import { RouterModule, Routes } from '@angular/router';

import { AbletonComponent } from './ableton/ableton.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'ableton', component: AbletonComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
