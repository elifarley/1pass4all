/**
 * 1pass4all's mobile version(no installation)
 */

var onePassForAll_mobile = {
    WRAPPER_ID: "_1pass4all_wrapper",

    /** Main function */
    main: function() {
        this._wrapper = document.getElementById(this.WRAPPER_ID);
        this._panel = passCreator.createPasswordPanel(this._wrapper, this.settings);
    },

    settings: {
        panelCss: "margin: 0px auto; width: 100%;" +
            "padding: 4px 0px; background-color: #FFF;",
        labelCss: "float: left; text-align: left; margin-left: 6px;" +
            "padding: 2px 8px;" +
            "font: bold 1em arial,verdana,sans-serif",
        fldCss: "overflow: hidden;",
        inputCss: "width: 100%; border: none;" +
            "margin: 3px 2px; padding: 2px",
        buttonCss: "background: #999; color: #FFFFFF; font-size: 1.2em;" +
            "margin-top: 8px; padding: 2px 0; border: 1px solid silver;" +
            "-moz-border-radius: 5px; -webkit-border-radius: 5px;" +
            "border-radius: 5px; -khtml-border-radius: 5px",
        inputRegionStyle: {border: "1px solid silver",
            '-moz-border-radius': "10px", '-webkit-border-radius': "10px",
            'border-radius': "10px", '-khtml-border-radius': "10px",
            'background-color': "#FFF"},
        fldSepStyle: {'border-bottom': "1px solid silver"},
        advancedDivStyle: {width: "100%"},
        cmdDivStyle: {width: "100%", margin: "2px auto"},
        genBtnStyle: {width: "100%"},
        clearBtnStyle: {display: "none"},
        resultDivStyle: {width: "100%", display: "none"},
        genpassStyle: {background: "transparent", color: "red",
            border: "0", 'font-weight': "bold"},
        errorDivStyle: {margin: "0 auto", width: "60%", font: "normal 10pt arial",
            color: "red", display: "none"}
    }
};

if (window.test && debug) {
    log("in unit test");
} else {
    onePassForAll_mobile.main();
}
