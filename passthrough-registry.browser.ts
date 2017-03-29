/**
 * UniversalPassthrough browser version - swap server element w/ browser element
 */
import { Injectable } from '@angular/core';

@Injectable()
export class PassthroughRegistry {
  private static serverElements = new Map<string, HTMLElement>();
  private static browserElements = new Map<string, HTMLElement>();

  /**
   * Collenct the server elements
   */
  private static getServerElements(): Map<string, HTMLElement> {
    let serverElements = new Map<string, HTMLElement>();
    let serverElementsArr: HTMLElement[] = [].slice
      .call(document.querySelectorAll('[universalpassthrough]'));

    serverElementsArr.forEach(el => {
      // has universalpassthrough attr and an id w/ suffix '-server'
      if (el.id.match(/-server?/i)) {
        let browserKey = el.id.replace('-server', '-browser');
        serverElements.set(browserKey, el);
      }
    });

    return serverElements;
  }

  /**
   * Initialize the registry with the server elements
   */
  public static init(): void {
    PassthroughRegistry.serverElements = PassthroughRegistry.getServerElements();
  }

  /**
   * Check if the browser element is already registered
   */
  public isRegistered(id: string): boolean {
    return PassthroughRegistry.browserElements.has(id);
  }

  /**
   * Register the browser element
   * Replace it with corresponding server element if found
   */
  public replaceElement(browserId: string, el: HTMLElement): void {
    if (PassthroughRegistry.serverElements.has(browserId)) {
      const serverEl = PassthroughRegistry.serverElements.get(browserId) as HTMLElement;

      if (this.isElement(el) && this.isElement(el.parentNode) && this.isElement(serverEl)) {
        window.requestAnimationFrame(() => {
          const browserElement = serverEl.cloneNode(true) as HTMLElement;

          (el.parentNode as HTMLElement).replaceChild(browserElement, el);
          PassthroughRegistry.serverElements.delete(browserId);
        });
      }
    }
  }

  /**
   * Removes the element from DOM
   */
  public detach(id: string, el: HTMLElement): void {
    const serverEl = PassthroughRegistry.serverElements.get(id) as Node;
    el.removeChild(serverEl);
  }

  /**
   * Adds the element to DOM
   */
  public reattach(id: string, el: HTMLElement): void {
    let serverEl = PassthroughRegistry.serverElements.get(id) as Node;
    el.appendChild(serverEl);
  }

  private isElement(el: any): el is HTMLElement {
    return (el != null)
      && (typeof el === 'object')
      && (el.nodeType === Node.ELEMENT_NODE)
      && (typeof el.style === 'object')
      && (typeof el.ownerDocument === 'object');
  }
}
