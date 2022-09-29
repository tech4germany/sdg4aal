import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContentRoutingModule } from './content-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LandingpageComponent],
  imports: [CommonModule, ContentRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule, FlexLayoutModule],
})
export class ContentModule {}
