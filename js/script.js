/*global $, console, parse*/
var themes;

function handleInput(input) {
    'use strict';
    var pHTML = parse(input);
    $('#text').html(pHTML);
}

$(document).ready(function () {
    'use strict';
    
    if (navigator.appVersion.indexOf('Mac') === -1) {
        $('#osx').attr('id', 'linux');
        $('.circle').removeAttr('class');
    }
    
    $('#terminal').addClass('animated fadeInDown');
    
    var $input = $('input[name=enter-text]');
    
    // enter event for input box
    // its supposed to get text parse
    // then display in the display div
    $input.keypress(function (event) {
        if (event.which === 13) {
            handleInput($(this).val());
            event.preventDefault();
        }
    });
    
    // click event for button
    $('button#submit').click(function () {
        var input = $input.val();
        handleInput(input);
    });
    
    $('.example').click(function () {
        $input.val($(this).text());
    });
});