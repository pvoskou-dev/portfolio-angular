import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "projects", loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  {path: "profile", loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  {path: "contact", loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {path: "**", component: NotFoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
