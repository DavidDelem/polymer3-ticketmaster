/**
 * Details of an event
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
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
        url=""
        handle-as="json"
        on-response="_handleDatasEventResponse"
        last-response="{{details}}"></iron-ajax>
<a href="/">
    <div class="well">
<iron-icon icon="hardware:keyboard-arrow-left"></iron-icon> <p class="paragraphe paragraphe-small"> Return to search results</p>
    </div></a>
    <paper-card image="[[img]]">
      <div class="card-content">
        <div class="cafe-header">
          <h3>[[details.name]]</h3>
          <div class="content-elem">
            <iron-icon icon="icons:folder-open"></iron-icon><span>[[classification]] - [[genre]]</span>
</div>
<div class="content-elem">
            <iron-icon icon="icons:event"></iron-icon><span>[[details.dates.start.localDate]] at [[details.dates.start.localTime]]</span>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <div>
            Prices between [[minPrice]] and [[maxPrice]] [[currency]]
        </div>
      </div>
    </paper-card>
    <div class="btn-tickets">
          <paper-button class="pink-button cafe-reserve"><a target="_blank" href="[[details.url]]"><iron-icon icon="maps:local-activity"></iron-icon> Get tickets</a></paper-button>
    </div>
    `;
  }
    
    static get properties() { return {
    api: {
      type: Object
    },
    routeData: {
      type: Object
    },
    details: {
      type: Object
    },
    genre: {
      type: String
    },
    classification: {
      type: String
    },
    minPrice: {
      type: String
    },
    maxPrice: {
      type: String
    },
    currency: {
      type: String
    },
    img: {
        type: String
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
    
    
    _handleDatasEventResponse(event) {
        for(let i = 0; i < this.details.images.length; i++) {
            if(this.details.images[i].ratio == "16_9") {
                this.img = this.details.images[i].url;
                break;
            }
        }
        this.genre = this.details.classifications[0].genre.name;
        this.classification = this.details.classifications[0].segment.name;
        this.minPrice = this.details.priceRanges[0].min;
        this.maxPrice = this.details.priceRanges[0].max;
        this.currency = this.details.priceRanges[0].currency;
    }
    
}

window.customElements.define('event-detail', EventDetail);
/* 
sales

date heure
pricerange
classification -> segment genre
*/
