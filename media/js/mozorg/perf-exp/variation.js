/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var variation = document.querySelector('.mzp-c-hero.t-mission').getAttribute('data-variant');

    function setDelay() {
        var delay = {
            backgrounds: null,
            images: null,
            text: null,
            ui: null
        };

        switch(variation) {
        case 'b':
            delay.backgrounds = 0;
            delay.ui = 0;
            delay.text = 0;
            delay.images = 0;
            break;
        case 'c':
            delay.backgrounds = 500;
            delay.ui = 750;
            delay.text = 1000;
            delay.images = 1000;
            break;
        case 'd':
            delay.backgrounds = 1000;
            delay.ui = 1500;
            delay.text = 2000;
            delay.images = 2000;
            break;
        case 'e':
            delay.backgrounds = 1500;
            delay.ui = 2250;
            delay.text = 3000;
            delay.images = 3000;
            break;
        case 'f':
            delay.backgrounds = 2000;
            delay.ui = 3000;
            delay.text = 4000;
            delay.images = 4000;
            break;
        case 'g':
            delay.backgrounds = 2500;
            delay.ui = 3750;
            delay.text = 5000;
            delay.images = 5000;
            break;
        case 'h':
            delay.backgrounds = 3000;
            delay.ui = 4500;
            delay.text = 6000;
            delay.images = 6000;
            break;
        default:
            delay.backgrounds = 0;
            delay.ui = 0;
            delay.text = 0;
            delay.images = 0;
        }

        return delay;
    }


    var delay = setDelay();

    setTimeout(function() {
        document.querySelector('body').classList.remove('backgrounds-invisible');
    }, delay.backgrounds);

    setTimeout(function() {
        document.querySelector('body').classList.remove('ui-invisible');
    }, delay.ui);

    setTimeout(function() {
        document.querySelector('body').classList.remove('text-invisible');
    }, delay.text);

    setTimeout(function() {
        // Lazyload images
        Mozilla.LazyLoad.init();
        document.querySelector('body').classList.remove('images-invisible');
    }, delay.images);

    window.dataLayer.push({
        'data-ex-name': 'about_page_performance',
        'data-ex-variant': 'v_' + variation
    });

})();
