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
        last-response="{{api}}"
        on-response="_handleDatasApiResponse"></iron-ajax>

    <iron-ajax 
        id="listRequest" 
        method="GET"
        url=""
        handle-as="json"
        on-response="_handleDatasListResponse"
        last-response="{{events}}"></iron-ajax>

    <a href="/">
        <div class="well">
    <iron-icon icon="hardware:keyboard-arrow-left"></iron-icon> <p class="paragraphe paragraphe-small"> Return to search</p>
        </div></a>

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
    }}
    ready() {
        super.ready();
        console.log(this.queryParams);
    }
    
    _handleDatasApiResponse(event) {
        console.log("toto");
        this.$.listRequest.url = this.api.baseUrl + this.api.chemins.list + ".json?apikey=" + this.api.key + "&keyword=" + this.queryParams.keywords;
        this.$.listRequest.generateRequest();
            console.log("toto");
    }
    
    _handleDatasListResponse(event) {
            console.log(this.events);
    }
}

window.customElements.define('event-list', EventList);
