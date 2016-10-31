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
  // @todo getElementById returning null, route related?
  let browserElements = {
    'top-banner-ad-browser': document.getElementById('top-banner-ad-browser')
  };
  // getElementById works on next tick, not sure why, route related?
  setTimeout(() => {
    browserElements['top-banner-ad-browser'] = document.getElementById('top-banner-ad-browser')
  }, 0);
  let serverElements = {};

  let replaceBrowserElements = (): void => {
    Object.keys(serverElements).forEach(id => {
      let browserEl = browserElements[id];
      let serverEl = serverElements[id];
      browserEl.parentNode.replaceChild(serverEl, browserEl);
    });
  };

  return {
    isRegistered: (id: string): boolean => Boolean(serverElements[id]),
    // original does not grab correct el
    // registerElement: (id: any, el: any): any => { console.log('registerElements'); return serverElements[id] = el},
    registerElement: (id: string, el: HTMLElement): HTMLElement|any => serverElements[id] = document.getElementById('top-banner-ad-server'),
    complete(): void {
      // setTimeout to hop off this tick, prevent FOUC
      // @todo see if fixed upstream when this fix lands https://github.com/angular/angular/issues/12162
      window.setTimeout(() => {
        window.requestAnimationFrame(replaceBrowserElements);
      }, 0);
    },
    detach: (id: string, el: HTMLElement): void => {
      let serverEl = serverElements[id];
      el.removeChild(serverEl);
    },
    reattach: (id: string, el: HTMLElement): void => {
      let serverEl = serverElements[id];
      el.appendChild(serverEl);
    }
  };
}

/**
 * passthrough facade function to execute in client.ts.
 */
export function passthrough(moduleRef: any): void {
  const passthroughRegistry = moduleRef.injector.get(PassthroughRegistry)
  passthroughRegistry.complete();
}
