import { NgModule } from '@angular/core';
import { PassthroughRegistry, PassthroughRegistryFactory } from './';

@NgModule({
  providers: [
    { provide: PassthroughRegistry, useFactory: PassthroughRegistryFactory }
  ]
})
export class UniversalPassthroughModule {}
