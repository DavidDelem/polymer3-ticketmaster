/**
 * Search an event
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
//import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-list/iron-list.js';
import './shared-styles.js';

class EventSearch extends PolymerElement {
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

    <paper-input label="Keywords" value="{{keywords}}"></paper-input>
    <paper-button class="pink-button" on-click="_search"><a href="/list?keywords=[[keywords]]">Search events</a></paper-button>
    `;
  }
    
    static get properties() { return {
    api: {
      type: Object
    },
    routeData: {
      type: Object
    },
    queryParams: {
        type: Object
    },
    keywords: {
      type: String
    }
    }}
    
    ready() {
        super.ready();
    }
    
    _search() {
        this.queryParams = { keywords: this.keywords };
        console.log(this.keywords);
        this.set('route.path', '/list?keyword=' + this.keywords);
    }
}

window.customElements.define('event-search', EventSearch);
