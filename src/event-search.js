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
    <paper-input label="Keywords" value="{{keywords}}"></paper-input>
    <paper-button class="pink-button"><a href="/list?keywords={{keywords}}">Search events</a></paper-button>
    `;
  }
    
    static get properties() { return {
    api: {
      type: Object
    },
    routeData: {
      type: Object
    },
    keywords: {
      type: String
    }
    }}
    
    ready() {
        super.ready();
    }
}

window.customElements.define('event-search', EventSearch);
