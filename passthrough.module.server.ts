import { NgModule } from '@angular/core';
import { PassthroughRegistry, PassthroughRegistryFactory } from './passthrough-registry.server';
import { UniversalPassthrough } from './passthrough.directive.server';

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
