/**
 * Details of an event
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/communication-icons.js';
import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/maps-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/notification-icons.js';
import '@polymer/iron-ajax/iron-ajax.js';
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

    <iron-ajax auto url="ticketmaster-api.json" handle-as="json"
        last-response="{{api}}"
        on-response="_handleDatasApiResponse"></iron-ajax>

    <iron-ajax 
        id="detailsRequest" 
        method="GET"
        url="https://app.ticketmaster.com/discovery/v2/events/G5vVZfUnIKxw8.json?apikey=zLZ9MOeps4OGQhuhAHYPXPtKCVtsO5gX"
        handle-as="json"
        last-response="{{details}}"></iron-ajax>

    <paper-card image="https://s1.ticketm.net/dam/a/443/c27ce107-a884-4ebe-be08-2d192a775443_635551_TABLET_LANDSCAPE_16_9.jpg">
      <div class="card-content">
        <div class="cafe-header">Cafe Basilico
          <div class="cafe-location cafe-light">
            <iron-icon icon="communication:location-on"></iron-icon>
{{details.name}}
            <span>250ft</span>
          </div>
        </div>
        <p>$・Italian, Cafe</p>
        <p class="cafe-light">Small plates, salads &amp; sandwiches in an intimate setting.</p>
      </div>
      <div class="card-actions">
        <div class="horizontal justified">
          <paper-icon-button icon="icons:event"></paper-icon-button>
          <paper-button>5:30PM</paper-button>
          <paper-button>7:30PM</paper-button>
          <paper-button>9:00PM</paper-button>
          <paper-button class="cafe-reserve">Reserve</paper-button>
        </div>
      </div>
    </paper-card>
    <!--  <div class="card">
        <div class="circle">1</div>
        <h1>Detail [[routeData.item]]</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>-->
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
        this.$.detailsRequest.url = this.api.baseUrl + this.api.chemins.detail;
        this.$.detailsRequest.url += this.routeData.item + ".json?apikey=" + this.api.key;
        this.$.detailsRequest.generateRequest();
    }
    
}

window.customElements.define('event-detail', EventDetail);
/* 
name
link url
image
sales

date heure
pricerange
classification -> segment genre
*/
