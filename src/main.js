/*jshint esversion: 6 */

import Vue from 'vue';
import App from './App';
// Store for state
import { store } from './store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
});
