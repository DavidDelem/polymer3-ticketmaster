/**
 * Details of an event
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/communication-icons.js';
import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/maps-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/notification-icons.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';
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

      <app-location route="{{route}}" query-params="{{queryParams}}" on-route-changed="test">
      </app-location>

      <app-route
        route="{{route}}"
        pattern="/:detail/:item"
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

    <button class="well" on-click="_back">
<iron-icon icon="hardware:keyboard-arrow-left"></iron-icon> <p class="paragraphe paragraphe-small"> Return to search results</p>
    </button>
    <template is="dom-if" if="[[!search]]">
        <paper-card image="[[img]]">
          <div class="card-content">
            <div>
              <h3>[[details.name]]</h3>
              <div class="content-elem">
                <template is="dom-if" if="{{_typeEventExist(details.classifications)}}">
                    <iron-icon icon="icons:folder-open"></iron-icon><span>[[details.classifications.0.segment.name]] - [[details.classifications.0.genre.name]]</span>
                </template>
            </div>
            <div class="content-elem">
                <iron-icon icon="maps:place"></iron-icon><span>[[details._embedded.venues.0.city.name]] [[details._embedded.venues.0.state.name]]
                            [[details._embedded.venues.0.country.countryCode]]</span>
            </div>
            <div class="content-elem">
                <iron-icon icon="icons:event"></iron-icon><span>[[details.dates.start.localDate]] at [[details.dates.start.localTime]]</span>
              </div>
            </div>
          </div>
          <div class="card-actions">
            <div>
                <template is="dom-if" if="{{_priceRangeExist(details.priceRanges)}}">
                    Prices between [[details.priceRanges.0.min]] and [[details.priceRanges.0.max]] [[details.priceRanges.0.currency]]
                </template>
                <template is="dom-if" if="{{!_priceRangeExist(details.priceRanges)}}">
                    Price informations not availables
                </template>
            </div>
          </div>
        </paper-card>
        <div class="btn-tickets">
              <paper-button class="pink-button cafe-reserve"><a target="_blank" href="[[details.url]]"><iron-icon icon="maps:local-activity"></iron-icon> Get tickets</a></paper-button>
        </div>
    </template>
    `;
  }
    
    static get properties() { return {
    api: {
      type: Object
    },
    route: {
      type: Object
    },
    routeData: {
      type: Object
    },
    details: {
      type: Object
    },
    img: {
        type: String
    },
    search: {
        type: Boolean,
        value: false
    }
    }}
    
    ready() {
        super.ready();
    }
    
    _handleDatasApiResponse(event) {
        this.search = true;
        this.$.detailsRequest.url = this.api.baseUrl + this.api.chemins.detail;
        this.$.detailsRequest.url += this.routeData.item + ".json?apikey=" + this.api.key;
        this.$.detailsRequest.generateRequest();
    }
    
    
    _handleDatasEventResponse(event) {
        this.search = false;
        for(let i = 0; i < this.details.images.length; i++) {
            if(this.details.images[i].ratio == "16_9") {
                this.img = this.details.images[i].url;
                break;
            }
        }
    }
    _typeEventExist(classifications) {
        if(classifications
           && classifications[0].genre
           && classifications[0].segment) {
            return true;
        } else {
            return false;
        }
    }
    _priceRangeExist(priceRanges) {
        if(priceRanges
           && priceRanges[0].min
           && priceRanges[0].max
           && priceRanges[0].currency) {
            return true;
        } else {
            return false;
        }
    }
    test() {
        if(this.api && this.route.path.length > 1) {
            console.log("changed");
            console.log(this.route.path.substring(1));
            this.$.detailsRequest.url = this.api.baseUrl + this.api.chemins.detail;
            this.$.detailsRequest.url += this.route.path.substring(1) + ".json?apikey=" + this.api.key;
            this.$.detailsRequest.generateRequest();
        } else {
            console.log("deleted");
            this.details = {};
            this.img = "";
        }
    }
    _back() {
        window.history.back();
    }
    
}

window.customElements.define('event-detail', EventDetail);
