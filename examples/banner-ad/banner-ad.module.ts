/**
 * banner-ad module.
 */
import { NgModule } from '@angular/core';
import { UniversalPassthroughModule, UniversalPassthrough } from 'universal-passthrough';

@NgModule({
  imports: [
    UniversalPassthroughModule
  ],
  exports: [
    UniversalPassthrough
  ]
})
export class BannerAdModule {}
