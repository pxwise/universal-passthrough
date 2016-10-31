/**
 * UniversalPassthrough
 */

/**
 * PassthroughRegistry class definition.
 */
export class PassthroughRegistry {
  private browserElements: any = {};
  private serverElements: any = {};

  public isRegistered(id: string): boolean { return true; }
  public registerElement(id: string, el: HTMLElement): HTMLElement|any { }
  public complete(): void { }
  public detach(id: string, el: HTMLElement): void { }
  public reattach(id: string, el: HTMLElement): void { }
  private replaceBrowserElements(): void { }
}

/**
 * PassthroughRegistryFactory function.
 */
export function PassthroughRegistryFactory() {
  // @todo dyamically assemble passthrough element ids
  let browserElements = {};
  let serverElements = {};
  let replaceBrowserElements = (): void => {};

  return {
    // isRegistered(id: string): boolean => { return true; },
    // registerElement(id: string, el: HTMLElement): HTMLElement|any => { },
    // complete(): void => { },
    // detach(id: string, el: HTMLElement): void => { },
    // reattach(id: string, el: HTMLElement): void => { }
    // replaceBrowserElements(): void { }

    isRegistered: (id: string): boolean => true,
    // original does not grab correct el
    // registerElement: (id: any, el: any): any => { console.log('registerElements'); return serverElements[id] = el},
    registerElement: (id: string, el: HTMLElement): HTMLElement|any => serverElements[id] = '',
    complete(): void { },
    detach: (id: string, el: HTMLElement): void => { },
    reattach: (id: string, el: HTMLElement): void => { }
  };
}

/**
 * passthrough facade function to execute in client.ts.
 */
export function passthrough(moduleRef: any): void {
  const passthroughRegistry = moduleRef.injector.get(PassthroughRegistry)
  passthroughRegistry.complete();
}
