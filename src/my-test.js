/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-slider/paper-slider.js';

class MyTest extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">3</div>
        <h1>View Test</h1>
        <br>
        <h1>Componente Apaper Input</h1>
        <paper-input always-float-label label="Floating label"></paper-input>
        <br>
        <h1>Componente Paper Slider</h1>
        <paper-slider value="50" secondary-progress="85"></paper-slider>
      </div>
    `;
  }
}

window.customElements.define('my-test', MyTest);
