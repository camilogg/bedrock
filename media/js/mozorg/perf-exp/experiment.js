/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var cop = new Mozilla.TrafficCop({
        id: 'experiment-about-page-performance',
        variations: {
            'v=a': 16,
            'v=b': 12,
            'v=c': 12,
            'v=d': 12,
            'v=e': 12,
            'v=f': 12,
            'v=g': 12,
            'v=h': 12
        }
    });

    cop.init();

})();
