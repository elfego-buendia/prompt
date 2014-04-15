/*global $, console, parse*/
var themes;

$(document).ready(function () {
    'use strict';
    
    if (navigator.appVersion.indexOf('Mac') === -1) {
        $('#osx').attr('id', 'linux');
        $('.circle').removeAttr('class');
    }
    
    // enter event for input box
    // its supposed to get text parse
    // then display in the display div
    $('input[name=enter-text]').keypress(function (event) {
        if (event.which === 13) {
            var pHTML = parse($(this).val());
            $('p#text').html(pHTML);
            event.preventDefault();
        }
    });
    
    // click event for button
    $('button#submit').click(function () {});
});