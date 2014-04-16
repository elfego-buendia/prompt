/*global AEC*/

var DEF_USR = "elfego";             // \u - user
var DEF_FPN = "~/Development";      // \w - full working directory
var DEF_SPN = "Development";        // \W - short working directory
var DEF_HST = "Macbook-Pro";        // \h - hostname
var DEF_DAT = "Sun Nov 1";          // \d - date
var DEF_JBS = "1";                  // \j - current shell jobs
var DEF_SHN = "bash";               // \s - name of shell
var DEF_T24 = "20:06:52";           // \t - time 24h, HH:MM:SS
var DEF_T12 = "08:06:52";           // \T - time 12h, HH:MM:SS
var DEF_TAM = "08:06 PM";           // \@ - time am/pm
var DEF_HNM = "2";                  // \! - history number of command
var DEF_CNM = "3";                  // \# - command number of command
var DEF_RUT = "$";                  // \$ - displays $ if not root and # if root
var DEF_NWL = "\n";                 // \n - newline


// \[\e[0;31m\]\u\[\e[0m\] ::: \[\e[0;32m\]>\[\e[0m\] *** example
function parse(txt) {
    'use strict';
    var parsedIntoHTML, re, marray, i, acolor, tmp, clss;
    parsedIntoHTML = txt;
    
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
    
    /*********************
    * replace the colors *
    *********************/
    // ((0|1|4);)?((3[0-7]);)?(3|4)[0-7]m
    re = /((4[0-7])|((0|1|4);3[0-7])|((0|1|4);3[0-7];4[0-7]))m/g;
    marray = parsedIntoHTML.match(re);
    
    // for ever ascii escape sequence in
    // regex matched array make new AEC
    // object to parse/compute correct
    // styles and color
    for (i = 0; i < marray.length; i += 1) {
        acolor = marray[i];
        tmp = new AEC(acolor);
        clss = tmp.getClass().join(' ');
        clss = ' class="' + clss + '"';
        parsedIntoHTML = parsedIntoHTML.replace(acolor, clss);
    }
    
    /********************
    * replace constants *
    ********************/
    // replace user
    parsedIntoHTML = parsedIntoHTML.replace(/\\u/g, DEF_USR);
    
    // replace host
    parsedIntoHTML = parsedIntoHTML.replace(/\\w/g, DEF_FPN);
    
    // replace host - short
    parsedIntoHTML = parsedIntoHTML.replace(/\\W/g, DEF_SPN);
    
    // replace hostname
    parsedIntoHTML = parsedIntoHTML.replace(/\\h/g, DEF_HST);
    
    // replace date
    parsedIntoHTML = parsedIntoHTML.replace(/\\d/g, DEF_DAT);
    
    // replace jobs
    parsedIntoHTML = parsedIntoHTML.replace(/\\j/g, DEF_JBS);
    
    // replace name
    parsedIntoHTML = parsedIntoHTML.replace(/\\s/g, DEF_SHN);
    
    // replace time24
    parsedIntoHTML = parsedIntoHTML.replace(/\\t/g, DEF_T24);
    
    // replace time12
    parsedIntoHTML = parsedIntoHTML.replace(/\\T/g, DEF_T12);
    
    // replace time am/pm
    parsedIntoHTML = parsedIntoHTML.replace(/\\@/g, DEF_TAM);
    
    // replace history #
    parsedIntoHTML = parsedIntoHTML.replace(/\\!/g, DEF_HNM);
    
    // replace command #
    parsedIntoHTML = parsedIntoHTML.replace(/\\#/g, DEF_CNM);
    
    // replace root
    parsedIntoHTML = parsedIntoHTML.replace(/\\\$/g, DEF_RUT);
    
    // replace newline
    parsedIntoHTML = parsedIntoHTML.replace(/\\n/g, DEF_NWL);
    
    return parsedIntoHTML;
}