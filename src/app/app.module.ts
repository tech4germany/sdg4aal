import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentModule } from './content/content.module';
import { ThemeModule } from './theme/theme.module';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    ContentModule,
    AppRoutingModule,
    ThemeModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
