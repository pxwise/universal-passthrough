/**
 * UniversalPassthrough server version, no-op.
 */

/**
 * PassthroughRegistry class definition.
 */
export class PassthroughRegistry {
  public serverElements: any = {};

  public isRegistered(id: string): boolean { return true }
  public replaceElement(id: string, el: HTMLElement): void { }
  public complete(): void { }
  public detach(id: string, el: HTMLElement): void { }
  public reattach(id: string, el: HTMLElement): void { }
  private isElement(): boolean { return false }
}

/**
 * PassthroughRegistryFactory function.
 */
export function PassthroughRegistryFactory() {
  let browserElements = {};
  let serverElements = {};
  let isElement = (): boolean => false;

  return {
    isRegistered: (id: string): boolean => true,
    replaceElement: (id: string, el: HTMLElement): void => { },
    complete(serverEls: any): void { },
    detach: (id: string, el: HTMLElement): void => { },
    reattach: (id: string, el: HTMLElement): void => { }
  };
}

/**
 * passthrough functions to execute in client.ts.
 */
export function passthrough() {
  return {
    getServerElements: (): any => { },
    complete: (moduleRef: any, serverEls: any): void => { }
  }
}
