import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from '@angular/core';
import { OsdgDataService } from './services/osdg-data.service';
import { IndicatorsService } from './services/indicators.service';

export const SERVICES = [
  OsdgDataService,
  IndicatorsService,
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  }

  /**
   * Registers all providers that are declared
   * in the core module in the app.modules.ts
   * (is called in the app.module.ts)
   *
   * @static
   * @returns {ModuleWithProviders<CoreModule>}
   * @memberof CoreModule
   */
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...SERVICES],
    };
  }
}
