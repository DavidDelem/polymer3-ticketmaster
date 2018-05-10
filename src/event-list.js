/**
 * Details of an event
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class EventList extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>


    <iron-ajax auto url="ticketmaster-api.json" handle-as="json"
        last-response="{{api}}"
        on-response="_handleDatasApiResponse"></iron-ajax>

      <div class="card">
        <div class="circle">1</div>
        <h1>List</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>
    `;
  }
    
        static get properties() { return {
    api: {
      type: Object
    },
    routeData: {
      type: Object
    }
    }}
    
    ready() {
        super.ready();
    }
    
    _handleDatasApiResponse(event) {

    }
}

window.customElements.define('event-list', EventList);
