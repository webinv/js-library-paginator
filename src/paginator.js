//! paginator.js

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.paginator = factory()
}(this, (function () { 'use strict';
    /**
     *
     * @param params
     * @returns {{current: number, numItemsPerPage: number, first: number, totalCount: number, previous: null, next: null, pagesInRange: Array, firstPageInRange: null, lastPageInRange: null, pageCount: number, last: number}}
     */
    var paginator = function (params) {
        var data = {
            range: 5,
            currentPageNumber: 1,
            numItemsPerPage: 20,
            totalCount: 0
        };

        if (typeof params === "object") {
            for (var key in params) {
                if (params.hasOwnProperty(key) && data.hasOwnProperty(key)) {
                    data[key] = params[key];
                }
            }
        }

        console.log(data);

        var results = {
            current: data.currentPageNumber,
            numItemsPerPage: data.numItemsPerPage,
            first: 1,
            totalCount: data.totalCount,
            previous: null,
            next: null,
            pagesInRange: [],
            firstPageInRange: null,
            lastPageInRange: null,
            pageCount: 0,
            last: 0
        };

        results.pageCount = Math.ceil(data.totalCount/data.numItemsPerPage);

        if (data.range > results.pageCount) {
            data.range = results.pageCount;
        }

        var delta = Math.ceil(data.range/2);

        console.log('delta', delta);

        if (results.current - delta > results.pageCount - data.range) {
            results.firstPageInRange = results.pageCount - data.range + 1;
            results.lastPageInRange = results.pageCount;
        } else {
            if (results.current - delta < 0) {
                delta = results.current;
            }

            var offset = results.current - delta;

            results.firstPageInRange = offset + 1;
            results.lastPageInRange = offset + data.range;
        }

        results.last = results.pageCount;

        if (results.current - 1 > 0) {
            results.previous = results.current - 1;
        }

        if (results.current + 1 <= results.pageCount) {
            results.next = results.current + 1;
        }

        var count = Math.abs(results.lastPageInRange-results.firstPageInRange);
        for (var i = 0; i <= count; i++) {
            results.pagesInRange.push(results.firstPageInRange + i);
        }

        return results;
    };

    return paginator;
})));