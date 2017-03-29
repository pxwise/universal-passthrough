import { NgModule } from '@angular/core';

import { PassthroughRegistry } from './passthrough-registry.browser';
import { UniversalPassthrough } from './passthrough.directive.browser';

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
export class UniversalPassthroughModule {}
