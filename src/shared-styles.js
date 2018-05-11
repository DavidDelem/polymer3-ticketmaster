/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      .paragraphe {
        margin-top: 8px;
margin-bottom: 8px;
      }

      .paragraphe-small {
        
      }

        .well {
            background: #e0e0e0;
            border-radius: 5px;
            padding: 0 15px;
            margin-bottom: 20px;
            color: #848484;
cursor: pointer;
    transition: all .3s ease-out;
        }
.card-content .content-elem {
    margin-top: 10px;
}
.card-content  iron-icon {
    position: relative;
    top: -1px;
    margin-right: 8px;
}

.card-actions > div {
    padding-left: 2px;
    padding-top: 8px;
    padding-bottom: 8px;
}

.btn-tickets {
margin-top: 25px;
}

.btn-tickets paper-button {
width: 100%;
margin: 0;
}

.btn-tickets paper-button iron-icon {
margin-right: 4px;
position: relative;
top: -1px;
}

h3 {
margin: 0;
}

a {
    text-decoration: none;
}

paper-button a {
    color: #fff;
    text-decoration: none;
padding-left: 5px;
padding-right: 5px;
}

        .well:hover {
    background: #d2d2d2;
    transition: all .3s ease-out;
}

.well > * {
display: inline-block;
}

paper-button.pink-button {
   background-color: #d0006f;
color: #fff;
}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
