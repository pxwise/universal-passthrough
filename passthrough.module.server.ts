import { NgModule } from '@angular/core';
import { PassthroughRegistry } from './passthrough-registry.server';
import { UniversalPassthrough } from './passthrough.directive.server';

@NgModule({
  providers: [
    PassthroughRegistry
  ],
  declarations: [
    UniversalPassthrough
  ],
  exports: [
    UniversalPassthrough
  ]
})
export class UniversalPassthroughModule { }
