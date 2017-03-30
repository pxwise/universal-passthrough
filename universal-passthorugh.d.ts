declare module "universal-passthrough" {
  export class UniversalPassthroughModule { }

  export class UniversalPassthrough { }

  export class PassthroughRegistry {
    public static init(): void
    public isRegistered(id: string): boolean
    public replaceElement(browserId: string, el: HTMLElement): void
    public detach(id: string, el: HTMLElement): void
    public reattach(id: string, el: HTMLElement): void
  }
}