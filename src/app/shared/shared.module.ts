import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {}
