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
    // replace all \[ with <
    parsedIntoHTML = parsedIntoHTML.replace(/\\\[/g, '<');
    
    // replace all \[e with span
    parsedIntoHTML = parsedIntoHTML.replace(/\\e\[(?!0m)/g, 'span');
    
    // replace all the \] with >
    parsedIntoHTML = parsedIntoHTML.replace(/\\\]/g, '>');

    // replace all the \[\e[0m\] with /span
    parsedIntoHTML = parsedIntoHTML.replace(/\\e\[0m/g, '/span');
    
    // debug
    console.log('first parse: ' + parsedIntoHTML);
    
    
    /*********************
    * replace the colors *
    *********************/
    // ((0|1|4);)?((3[0-7]);)?(3|4)[0-7]m
    var re = /((4[0-7])|((0|1|4);3[0-7])|((0|1|4);3[0-7];4[0-7]))m/g;
    var marray = parsedIntoHTML.match(re);
    
    // debug
    console.log(marray);
    
    for (var color in marray) {
        var acolor = marray[color];
        var tmp = new AEC(acolor);
        
        console.log(tmp);
        var clss = tmp.getClass().join(' ');
        clss = ' class="' + clss + '" ';
        parsedIntoHTML = parsedIntoHTML.replace(acolor, clss);
    }
    
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
    
    // enter event for input box
    // its supposed to get text parse
    // then display in the display div
    $('input[name=enter-text]').keypress(function (event) {
        if (event.which === 13) {
            var pHTML = parse($(this).val())
            $('p#text').html(pHTML);
            console.log(pHTML);
            event.preventDefault();
        }
    });
    
    // click event for button
    $('button#submit').click(function () {});
});