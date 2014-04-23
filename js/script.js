/*jslint regexp: true*/
/*global $, console, parse*/

function handleInput(input) {
    'use strict';
    var pHTML = parse(input);
    $('#text').html(pHTML);
}

$(document).ready(function () {
    'use strict';
    
    /* changes the terminal chrome */
    if (navigator.appVersion.indexOf('Mac') === -1) {
        $('#osx').attr('id', 'linux');
        $('.circle').removeAttr('class');
    }
    
    /* allows standalone app to have black text in iOS7 and
       accomodates for the status bar by padding the nav */
    if (window.navigator.standalone) {
        $('nav.navbar.navbar-default').css('padding-top', '20px');
        if (navigator.appVersion.match(/iP(hone|od|ad).+?OS 7/)) {
            $("meta[name='apple-mobile-web-app-status-bar-style']").remove();
        }
    }
    
    /* tentative */
    $('#terminal').addClass('animated fadeIn');
    
    var $input = $('.minput');
    
    /* theme switcher */
    $('.ttheme').click(function () {
        var path = 'css/term-themes/', dotCSS = '.css';
        $('#term-theme').attr('href', path + $(this).text().toLowerCase() + dotCSS);
    });
    
    /* use example event */
    $('.example').click(function () {
        $input.val($(this).text());
    });
    
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
});