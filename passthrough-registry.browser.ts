/**
 * UniversalPassthrough browser version - swap server element w/ browser element
 */

// Globals must be outside of factory scope or values are destroyed by router.
let browserElements = {};
let serverElements = {};

/**
 * PassthroughRegistry class definition.
 */
export class PassthroughRegistry {
  public serverElements: any = {};

  public isRegistered(id: string): boolean { return true }
  public replaceElement(id: string, el: HTMLElement): HTMLElement|any { }
  public complete(): void { }
  public detach(id: string, el: HTMLElement): void { }
  public reattach(id: string, el: HTMLElement): void { }
  private isElement(): boolean { return false }
}

/**
 * PassthroughRegistryFactory function.
 */
export function PassthroughRegistryFactory() {
  let isElement = (el: any): boolean => {
    return (el != null)
      && (typeof el === 'object')
      && (el.nodeType === Node.ELEMENT_NODE)
      && (typeof el.style === 'object')
      && (typeof el.ownerDocument === 'object');
  }

  return {
    isRegistered: (id: string): boolean => Boolean(browserElements[id]),
    // register browser element and replace with corresponding server element if
    // found.
    replaceElement: (browserId: string, el: HTMLElement): void => {
      if (Object.keys(serverElements).indexOf(browserId) > -1) {
        if (isElement(el) && isElement(el.parentNode) && isElement(serverElements[browserId])) {
          window.requestAnimationFrame(() => {
            el.parentNode.replaceChild(serverElements[browserId], el);
            delete serverElements[browserId];
          });
        }
      }
    },
    // register server elements, fetched as sync in client.ts before bootstrap.
    complete(serverEls: any): void {
      serverElements = serverEls;
    },
    replaceElements: (): void => {

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
 * passthrough functions to execute in client.ts.
 */
export function passthrough() {
  return {
    getServerElements: (): any => {
      let serverElements = {};
      let serverElementsArr = [].slice.call(document.querySelectorAll('[universalpassthrough]'));

      serverElementsArr.forEach((el) => {
        // has universalpassthrough attr and an id w/ suffix '-server'
        if (el.id.match(/-server?/i)) {
          let browserKey = el.id.replace('-server', '-browser');
          serverElements[browserKey] = el;
        }
      });

      return serverElements;
    },
    complete: (moduleRef: any, serverEls: any): void => {
      const passthroughRegistry = moduleRef.injector.get(PassthroughRegistry);
      passthroughRegistry.complete(serverEls);
    }
  }
}

