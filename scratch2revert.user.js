// ==UserScript==
// @name         Scratch 2.0 Revert
// @namespace    https://kyleplo.com/
// @version      0.2
// @description  Change some things in Scratch 3.0 to make it more like 2.0.
// @author       kyleplo
// @match        https://scratch.mit.edu/projects/*
// @grant        none
// @updateURL    https://kyleplo.com/scratch2revert.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Code copied from Theme3 userscript - thanks @NitroCipher
    var style = document.createElement('style');
    var styleAppend;
    var categories = ["null", "motion", "looks", "sounds", "events", "control", "sensing", "operators", "data", "list", "pen", "more"];
        var colors = ["null", "null", "null", "null", "#ffab19", "#e6bf00", "null", "null", "null", "null", "null", "null"];
    categories.forEach(styleColor);
    style.innerHTML = `
    .gui_editor-wrapper_nDYcj {
     order: 2;
    }
    .sprite-selector_sprite-selector_2KgCX {
     order: 2;
    }
    .injectionDiv {
     zoom: 0.9;
     overflow: hidden!important
    }
    .blocklyWidgetDiv, .blocklyDropDownDiv {
     zoom: 0.9;
    }
    text.blocklyText {
     font-size: 18px;
    }
    .question_question-container_OuJwy {
     padding: 0.1rem;
    }
    line,
    g[data-shapes] > path.blocklyBlockBackground {
        stroke: #000000;
        stroke-opacity: 0.2;
    }
    .blocklyDropDownDiv,
    div.goog-menuitem,
    g[data-argument-type~="dropdown"] > .blocklyBlockBackground,
    path[data-argument-type] {
        fill: #000000;
        fill-opacity: 0.1;
        stroke: #000000;
        stroke-opacity: 0.2;
    }` + styleAppend;

    document.body.appendChild(style);

    function styleColor(item, index){
        if (colors[index] !== "null"){
            styleAppend = styleAppend + `g[data-category="`+item+`" i] > path.blocklyBlockBackground {fill: `+colors[index]+`;}`;
            styleAppend = styleAppend + `.scratchCategoryMenu:nth-child(`+(item+1)+`) .scratchCategoryItemBubble {background-color: `+colors[index]+`!important}`;
        }
        if (index == 4){ //I have no idea why index 4 is broken
            styleAppend = styleAppend + `g[data-category="`+item+`" i] > path.blocklyBlockBackground {fill: `+colors[4]+`;}`;
            styleAppend = styleAppend + `.scratchCategoryMenu:nth-child(`+(item+1)+`) .scratchCategoryItemBubble {background-color: `+colors[4]+`!important}`;
        }
    }
    // End copied code
})();
