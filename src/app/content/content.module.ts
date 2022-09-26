import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  declarations: [LandingpageComponent],
  imports: [CommonModule, ContentRoutingModule],
})
export class ContentModule {}
