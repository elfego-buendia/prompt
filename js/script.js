/*global $, console*/

var DEF_USR = "sjobs";
var DEF_FUL = "~/Development";
var DEF_SHT = "Development";

// \[\e[0;32m\]josem\[\e[0m\] ::: \[\e[0;32m\]>\[\e[0m\]
function parse(txt) {
    'use strict';
    var parsedIntoHTML = txt;
    
    /*************************
    * replace with html tags *
    *************************/
    // replace all \[ with <span
    parsedIntoHTML = parsedIntoHTML.replace(/\\\[(?!\\e\[0m)/g, '<span ');
    
    // replace all \[e
    parsedIntoHTML = parsedIntoHTML.replace(/\\e\[(?!0m)/g, 'class="');
    
    // replace all x;xxm with color
    //parsedIntoHTML = parsedIntoHTML.replace(/(0|1);\d{2}m/g, 'color"');
    
    // replace all the \]
    parsedIntoHTML = parsedIntoHTML.replace(/\\\]/g, '>');
    
    // replace all the \[\e[0m\]
    parsedIntoHTML = parsedIntoHTML.replace(/\\\[\\e\[0m/g, '</span');
    
    
    /*********************
    * replace the colors *
    *********************/
    // ((0|1|4);)?((3[0-7]);)?(3|4)[0-7]m
    var re = /((4[0-7])|((0|1|4);3[0-7])|((0|1|4);3[0-7];4[0-7]))m/g;
    var marray = parsedIntoHTML.match(re);
    for (var color in marray) {
        var acolor = marray[color];
        var tmp = new AEC(acolor);
        parsedIntoHTML = parsedIntoHTML.replace(acolor, tmp.getClass().join(' ')+'"');
    }
    /*
    console.log(marray);
    var testaec = new AEC(marray[0]);
    console.log(testaec.getClass());
    */
    
    /********************
    * replace constants *
    ********************/
    // replace user
    parsedIntoHTML = parsedIntoHTML.replace(/\\u/g, DEF_USR);
    
    // replace host
    parsedIntoHTML = parsedIntoHTML.replace(/\\w/g, DEF_FUL);
    
    // replace host - short
    parsedIntoHTML = parsedIntoHTML.replace(/\\W/g, DEF_SHT);
    
    return parsedIntoHTML;
}


$(document).ready(function () {
    'use strict';
    /*
    $('input[name=enter-text]').on('input', function() {
        //$('p#text').text(this.value);
        $('p#text').html(this.value);
    });
    */
    
    // enter event for input box
    // its supposed to get text parse
    // then display in the display div
    $('input[name=enter-text]').keypress(function (event) {
        if (event.which === 13) {
            var pHTML = parse($(this).val())
            $('p#text').html(pHTML);
            event.preventDefault();
        }
    });
    
    // click event for button
    $('button#submit').click(function () {
    });
});