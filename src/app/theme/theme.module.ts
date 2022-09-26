import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar';


const MAT_UI = [
  MatToolbarModule
]



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, ...MAT_UI],
  exports: [HeaderComponent, FooterComponent, ...MAT_UI],
})
export class ThemeModule {}
