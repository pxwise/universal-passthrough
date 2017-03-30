/**
 * UniversalPassthrough server version, no-op.
 */

export class PassthroughRegistry {
  /**
   * Initialize the registry with the server elements
   */
  public static init(): void { }

  /**
   * Check if the browser element is already registered
   */
  public isRegistered(id: string): boolean { return true; }

  /**
   * Register the browser element
   * Replace it with corresponding server element if found
   */
  public replaceElement(browserId: string, el: HTMLElement): void { }

  /**
   * Removes the element from DOM
   */
  public detach(id: string, el: HTMLElement): void { }

  /**
   * Adds the element to DOM
   */
  public reattach(id: string, el: HTMLElement): void { }
}
