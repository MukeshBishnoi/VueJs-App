/*jshint esversion: 6 */

import Vue from 'vue';
import WatchList from './../../../src/components/WatchList.vue';
import { store } from './../../../src/store';

describe('WatchList', () => {
    const vm = new Vue({
        template: '<div><test></test></div>',
        store,
        components: {
            'test': WatchList
        }
    }).$mount();

    it('should check for data hook in watchList', () => {
        expect(typeof WatchList.data).to.equal('function');
    });

    it('should check for header field', () => {
        const Constructor = Vue.extend(WatchList);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.demo h3').textContent).to.equal('Watch List');
    });

    it('should check for column value', () => {
        expect(vm.$el.querySelector('.demo table thead tr th').textContent.trim()).to.equal('Symbol');
    });

    it('should check for data value', () => {
        expect(vm.$el.querySelector('.demo table tbody tr td').textContent.trim()).to.equal('MNTP');
    });
});
