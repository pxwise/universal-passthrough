import { NgModule } from '@angular/core';
import { PassthroughRegistry, PassthroughRegistryFactory } from './passthrough-registry.browser';
import { UniversalPassthrough } from './passthrough.directive.browser';

@NgModule({
  providers: [
    { provide: PassthroughRegistry, useFactory: PassthroughRegistryFactory }
  ],
  declarations: [
    UniversalPassthrough
  ],
  exports: [
    UniversalPassthrough
  ]
})
export class UniversalPassthroughModule {}
