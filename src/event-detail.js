/**
 * Details of an event
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import './shared-styles.js';

class EventDetail extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <app-route
        route="[[route]]"
        pattern="/:item"
        data="{{routeData}}"></app-route>

      <div class="card">
        <div class="circle">1</div>
        <h1>Detail [[routeData.item]]</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>
    `;
  }
}

window.customElements.define('event-detail', EventDetail);
