/*jshint esversion: 6 */

import Vue from 'vue';
import Message from './../../../src/components/Message.vue';

describe('Message', () => {
  // Inspect the raw component options
  it('should check for data hook in message', () => {
    expect(typeof Message.data).to.equal('function')
  });

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct header message', () => {
    expect(typeof Message.data).to.equal('function')
    const defaultData = Message.data();
    expect(defaultData.heading).to.equal('VueJs APP')
  })

  it('should render stock platform message', () => {
    const Constructor = Vue.extend(Message);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.msg h5').textContent)
      .to.equal('NASDAQ Stock Trading Platform');
  });

});
