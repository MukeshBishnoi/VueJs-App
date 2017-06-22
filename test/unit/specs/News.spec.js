/*jshint esversion: 6 */

import Vue from 'vue';
import News from './../../../src/components/News.vue';
import { store } from './../../../src/store';

describe('News', () => {
    const vm = new Vue({
            template: '<div><test></test></div>',
            store,
            components: {
                'test': News
            }
        }).$mount()
  // Inspect the raw component options
    it('should check for data hook in News', () => {
        expect(typeof News.data).to.equal('function')
    })

    it('should check for header field', () => {
        const Constructor = Vue.extend(News);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.demo h3').textContent).to.equal('News');
    })

    it('should check for data value', () => {
        console.log("@@@->",vm.$el.querySelector('.demo table tbody tr').textContent.trim())
        expect(vm.$el.querySelector('.demo table tbody tr').textContent.trim())
            .to.equal('MNTP - Monotype Imaging Holdings Inc. (TYPE) Ex-Dividend Date Scheduled for March 30, 2017')
    })
});
