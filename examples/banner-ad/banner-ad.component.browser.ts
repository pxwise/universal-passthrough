/**
 * If you see kittens, your content failed to pass from server to client.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'banner-ad',
  template: `
  <div universalPassthrough id="top-banner-ad-browser" class="top-banner" >
    <div class="large-leaderboard-ad">
      <img src='http://placekitten.com/970/90' width='970' hieght='90' />
    </div>
  </div>
`,
  styles: [
    '.top-banner { position: relative; background-color: #E7E7E7; padding: 5px 0px; min-height: 101px; }',
    '.large-leaderboard-ad { width: 100%; display: inilne-block; margin: 0 auto; }',
    '.ad-img { display: block; margin: 0px auto; }'
  ]
})
export class BannerAd {}
