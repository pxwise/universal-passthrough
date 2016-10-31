import { Directive, Attribute, ElementRef, ChangeDetectorRef } from '@angular/core';

import { PassthroughRegistry } from './';

@Directive({
  selector: '[universalPassthrough],[universal-passthrough]'
})
export class UniversalPassthrough {
  constructor(
    @Attribute('id') public id: string,
    public passthroughRegistry: PassthroughRegistry,
    public elementRef: ElementRef,
    public cdRef: ChangeDetectorRef) {

    if (this.passthroughRegistry.isRegistered(id)) {
      this.passthroughRegistry.reattach(id, this.elementRef.nativeElement);
    } else {
      this.passthroughRegistry.registerElement(id, this.elementRef.nativeElement);
    }
    cdRef.detach();
  }

  ngOnDestroy() {
    this.passthroughRegistry.detach(this.id, this.elementRef.nativeElement);
  }
}
