/*jshint esversion: 6 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        Columns: ['symbol', 'last','change','open','high','low','vol','headCnt'],
        //Stock data
        Data: [
            { symbol: 'MNTP', last: 25.40, change: 0.395, open: 25.24, high: 25.57, low: 25.69, vol: 19569.25, headCnt: 42},
            { symbol: 'ORCL', last: 18.65, change: 0.586, open: 18.25, high: 18.11, low: 18.48, vol: 45886.55, headCnt: 53},
            { symbol: 'LVS', last: 74.40, change: 0.245, open: 25.24, high: 25.59, low: 25.42, vol: 87198.25, headCnt: 13},
            { symbol: 'MRVL', last: 85.40, change: 0.896, open: 37.24, high: 54.77, low: 87.57, vol: 45464.25, headCnt: 57},
            { symbol: 'YHOO', last: 62.40, change: 0.345, open: 36.24, high: 85.23, low: 56.63, vol: 21153.25, headCnt: 97},
            { symbol: 'EBAY', last: 55.40, change: 0.485, open: 12.24, high: 87.57, low: 66.69, vol: 19569.25, headCnt: 34}
        ],
        // News feed data
        newsData: [
            { newsfeed: 'MNTP - Monotype Imaging Holdings Inc. (TYPE) Ex-Dividend Date Scheduled for March 30, 2017'},
            { newsfeed: 'ORCL - Ex-Dividend Reminder: Torchmark, Realty Income and Monotype Imaging Holdings'},
            { newsfeed: 'LVS - Ex-Dividend Reminder: CSRA, MercadoLibre and Monotype Imaging Holding'},
            { newsfeed: 'MRVL - Monotype Imaging Holdings Inc. (TYPE) Ex-Dividend Date Scheduled for December 28, 2016'},
            { newsfeed: 'YHOO - Ex-Dividend Reminder: Monotype Imaging Holdings, Cabot Microelectronics and Pegasystems'},
            { newsfeed: 'EBAY - The Zacks Analyst Blog highlights: Theravance Biopharma, Krispy Kreme Doughnuts, Silicon Graphics International and Monotype Imaging Holdings'}
        ]
    }
});