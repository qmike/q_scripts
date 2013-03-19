/**
 * q_scripts.js
 *
 * q_scripts.js is a Michał "QMike" Machnikowski useful script libraries
 * * Q_CrossBrowser is a browser name and version detector, add's to <html> tag a class
 *
 * Copyright 2012-2013 Michał "QMike" Machnikowski
 *
 * ------------------------------------------------
 *  author:  Michał "QMike" Machnikowski
 *  version: 0.1.3
 *  url:     http://www.qmike.pl/
 *  source:  http://github.com/qmike/q_scripts/
 */

/*global QS,navigator,document,window*/
(function (document, window) {
    "use strict";
    window.QS = window.QS || {};
    
    QS.CrossBrowser = function () {
        var q_userAgent = navigator.userAgent,
            q_appVersion = parseFloat(q_userAgent),
            q_classPush,
            q_appVoffset;

        if ((q_appVoffset = q_userAgent.indexOf("Opera")) !== -1) { // Opera
            q_appVersion = q_userAgent.substring(q_appVoffset + 6);
            if ((q_appVoffset = q_userAgent.indexOf("Version")) !== -1) {
                q_appVersion = q_userAgent.substring(q_appVoffset + 8);
            }
            q_classPush = 'browserOpera browserOpera_' + parseInt(q_appVersion, 10);
        } else if ((q_appVoffset = q_userAgent.indexOf("MSIE")) !== -1) { // MSIE
            q_appVersion = q_userAgent.substring(q_appVoffset + 5);
            q_classPush = 'browserIE browserIE_' + parseInt(q_appVersion, 10);
        } else if ((q_appVoffset = q_userAgent.indexOf("Chrome")) !== -1) { // Chrome
            q_appVersion = q_userAgent.substring(q_appVoffset + 7);
            q_classPush = 'browserChrome browserChrome_' + parseInt(q_appVersion, 10);
        } else if ((q_appVoffset = q_userAgent.indexOf("Safari")) !== -1) { // Safari
            q_appVersion = q_userAgent.substring(q_appVoffset + 7);
            if ((q_appVoffset = q_userAgent.indexOf("Version")) !== -1) {
                q_appVersion = q_userAgent.substring(q_appVoffset + 8);
            }
            q_classPush = 'browserSafari browserSafari_' + parseInt(q_appVersion, 10);
        } else if ((q_appVoffset = q_userAgent.indexOf("Firefox")) !== -1) { // Firefox
            q_appVersion = q_userAgent.substring(q_appVoffset + 8);
            q_classPush = 'browserFF browserFF_' + parseInt(q_appVersion, 10);
        }

        document.documentElement.className = q_classPush; // Add to <html> class
    };
    
    QS.CrossBrowser();
}(document, window));