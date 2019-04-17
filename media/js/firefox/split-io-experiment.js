/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {

    var html = document.getElementsByTagName('html')[0];
    var authKey = html.getAttribute('data-split-io-id');

    if (!authKey) {
        return;
    }

    var factory = window.splitio({
        core: {
            authorizationKey: authKey,
            key: Math.random() // unique identifier for your user
        }
    });

    var client = factory.client();

    var attributes = {
        browser : /\sFirefox/.test(navigator.userAgent) ? 'firefox': 'non-firefox',
        locale : html.getAttribute('lang')
    };

    function trackDownloadClick() {
        var downloadButtonLinks = document.querySelectorAll('#download-button-desktop-release .download-link');

        for(var i = 0; i < downloadButtonLinks.length; i++) {
            downloadButtonLinks[i].addEventListener('click', function(e) {
                if (e.currentTarget.href) {
                    e.preventDefault();

                    var url = e.currentTarget.href;

                    sendEvent('user', 'download-button-click');

                    client.destroy().then(function() {
                        client = null;
                        window.location.href = url;
                    });
                }
            }, false);
        }
    }

    function sendEvent(eventName, eventValue) {
        return client.track(eventName, eventValue);
    }

    client.on(client.Event.SDK_READY, function() {
        var treatment = client.getTreatment('headline_copy_experiment', attributes);

        if (treatment === 'custom-headline') {
            // insert on code here
            document.querySelector('.mzp-c-hero-title').innerHTML = 'Download Firefox';
            trackDownloadClick();

        } else if (treatment === 'control-headline') {
            // insert off code here
            trackDownloadClick();
        }
    });
})();
