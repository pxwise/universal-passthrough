# universal-passthrough

A utility for [angular universal](https://github.com/angular/universal) to pass server rendered DOM into the bootstrapped client app based on [this gist](https://gist.github.com/gdi2290/a5bc5b3d3dd64f88e5c660f6a2df75d6) from [@gdi2290](https://github.com/gdi2290).

###Use cases:

**ads** - if an ad bootstraps into server rendered DOM before bootstrap, the ad markup can be passed intot the same position as the client app.

**edge compute transformed markup** - DOM that has been processed after server render can be preserved in its transformed state and passed into client app.

**static content** - selectively reduce CPU and RAM use in browser for components that have already been processed server side by passing the server rendered DOM through as is.

###How to use:

Create a server version of your component and a browser version of your component and add `universalPassthrough` or `universal-passthrough` directive to your components.

The server version of your component will be the version that carries over into the client app.

The client version will be displaced and should have the same width, height and background-color as the server component to prevent FOUC when transitioning DOM state.

The example uses the [package.json browser spec](https://github.com/defunctzombie/package-browser-field-spec) pattern for splitting server and browser modules, components and services.

In client.ts, add the passthrough function to transfer DOM state.

```javascript
import { platformUniversalDynamic } from 'angular2-universal';
import { passthrough } from 'universal-passthrough';
import { MainModule } from './app.browser.module';

const platformRef = platformUniversalDynamic();
platformRef.bootstrapModule(MainModule)
  .then((mainModuleRef) => {
    passthrough(mainModuleRef);
    return mainModuleRef;
});
```

@todo still need to dynamically pass in server and browser ids into registry.
