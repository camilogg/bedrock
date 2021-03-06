/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(Mozilla) {
    'use strict';

    var isFirefox = /\sFirefox/.test(navigator.userAgent);

    if (window.site.platform !== 'windows' && !isFirefox) {
        return;
    }

    var cole = new Mozilla.TrafficCop({
        id: 'experiment-firefox-new-pre-download',
        variations: {
            'xv=pre-dl&v=a': 88,
            'xv=pre-dl&v=b': 3,
            'xv=pre-dl&v=c': 3,
            'xv=pre-dl&v=d': 3,
            'xv=pre-dl&v=e': 3
        }
    });

    cole.init();

})(window.Mozilla);
