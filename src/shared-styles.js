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

      }

      .paragraphe-small {
        
      }

        .well {
            background: #e0e0e0;
            border-radius: 5px;
            padding: 0px 15px;
            margin-bottom: 20px;
            color: #848484;
border: none;
    text-align: left;
    width: 100%;
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
}

paper-button {
width: 100%;
margin: 0;
min-height: 51px;
}

paper-card {
    width: 100%;
    margin-bottom: 20px;
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

.half-button-left {
    width: calc(50% - 10px);
    margin-right: 10px;
}

.half-button-right {
    width: calc(50% - 10px);
    margign-left: 10px;
}

.button-float-right {
    float: right;
}

paper-button.pink-button {
   background-color: #d0006f;
color: #fff;
}

paper-button.blue-button {
background-color: #009cde;
color: #fff;
}

paper-button[disabled] {
opacity: 0.5;
}

.list-elem {
    color: #000;
    background: #fff;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 15px 15px;
}

.list-elem-container:first-of-type .list-elem {
    border-top: 1px solid #ddd;
}

.list-elem-container:last-of-type .list-elem {
    border-top: 1px solid #ddd;
}

.list-elem span {
width: 100%;
    display: block;
}

.infos {
color: #808080;
line-height: 1.4;
font-size: 0.9em;
margin-top: 2px;
}

paper-input {
    margin-bottom: 10px;
}

.info-search {
text-align: center;
color: #848484;
margin-top: 15px;
margin-bottom: 15px;
font-size: 0.9em;
}

.spinner-container {
width: 100%;
text-align: center;
}

paper-spinner-lite {
 --paper-spinner-color: #fff;
}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
