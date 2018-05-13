/**
 * Details of an event
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
//import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/iron-ajax/iron-ajax.js';
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

      <app-location route="{{route}}" query-params="{{queryParams}}">
      </app-location>

      <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

    <iron-ajax auto url="ticketmaster-api.json" handle-as="json"
        last-response="{{api}}" on_response="_setPagination"></iron-ajax>

    <iron-ajax 
        id="listRequest" 
        method="GET"
        url=""
        handle-as="json"
        on-response="_handleDatasListResponse"
        last-response="{{events}}"></iron-ajax>
    <div class="search">
     <paper-input label="Keywords" value="{{keyword}}"></paper-input>
        <paper-button class="half-button-left blue-button" on-click="_reset">Reset</paper-button>
        <paper-button class="half-button-right pink-button" on-click="_search">Search</paper-button>
    </div>
    <div class="info-search">
        <template is="dom-if" if="{{_isPagesInfosAvailables(events.page)}}">
            <span>[[events.page.totalElements]] results, page [[_currentPage(events.page.number)]] of [[events.page.totalPages]]</span>
        </template>
    </div>
    <iron-list items="[[events._embedded.events]]">
        <template>

    <a href="/detail/[[item.id]]">
            <div class="list-elem-container">
                      <div class="list-elem">
                        <span class="span-elem">[[item.name]]</span>
                        <span class="span-elem infos">[[item.dates.start.localDate]]<br>[[item._embedded.venues.0.city.name]], [[item._embedded.venues.0.state.name]],
                        [[item._embedded.venues.0.country.countryCode]]</span>
                      </div>
            </div>

    </a>
        </template>
    </iron-list>
    <div class="info-search">
        <template is="dom-if" if="{{_isPagesInfosAvailables(events.page)}}">
            <span>[[events.page.totalElements]] results, page [[_currentPage(events.page.number)]] of [[events.page.totalPages]]</span>
        </template>
    </div>
    <div class="btn-pages">
        <template is="dom-if" if="{{_isPagesInfosAvailables(events.page)}}">
            <paper-button class="half-button-left pink-button" on-click="_previous">Previous</paper-button>
            <paper-button class="half-button-right pink-button" on-click="_next">next</paper-button>
        </template>
    </div>
    `;
  }
    
    static get properties() { return {
    api: {
      type: Object
    },
    queryParams: {
      type: Object
    },
    events: {
      type: Object
    },
    keyword: {
      type: String
    }
    }}
    ready() {
        super.ready();
    }
    
    _previous() {
        if(this.events.page.number > 0) {
            this.$.listRequest.url = this.api.baseUrl + this.api.chemins.list + ".json?apikey=" + this.api.key + "&page=" + (this.events.page.number - 1) + "&keyword=" + this.keyword;
            this.$.listRequest.generateRequest();
        }
    }
    
    _next() {
        if(this.events.page.number < this.events.page.totalPages - 1) {
            this.$.listRequest.url = this.api.baseUrl + this.api.chemins.list + ".json?apikey=" + this.api.key + "&page=" + (this.events.page.number + 1) + "&keyword=" + this.keyword;
            this.$.listRequest.generateRequest();
        }
    }
    
    _reset() {
        this.keyword = "";
        this.events = {};
    }
    
    _search() {
        if(this.api != undefined) {
            this.$.listRequest.url = this.api.baseUrl + this.api.chemins.list + ".json?apikey=" + this.api.key + "&keyword=" + this.keyword;
            this.$.listRequest.generateRequest();
        }
    }
    
    _isPagesInfosAvailables(page) {
        if(page) {
            return true;
        } else {
            return false;
        }
    }
    _currentPage(page) {
        return page + 1;
    }
    
}

window.customElements.define('event-list', EventList);
