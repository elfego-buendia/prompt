/*jslint regexp: true*/
/*global $, console, window, parse*/

function handleInput(input) {
    'use strict';
    var pHTML = parse(input);
    $('.text').html(pHTML);
}

$(document).ready(function () {
    'use strict';
    
    /* changes the terminal chrome */
    if (navigator.appVersion.indexOf('Mac') === -1) {
        $('#osx').attr('id', 'linux');
        $('.circle').removeAttr('class');
    }
    
    /* autofocus only if on a non-mobile device*/
    if (!navigator.appVersion.match(/iPhone|iPod|iPad|Windows Phone|webOS|Blackberry|Android/i)) {
        $('.minput').focus();
    }
    
    /* allows standalone app to have black text in iOS7 and
       accomodates for the status bar by padding the nav */
    if (("standalone" in window.navigator) && window.navigator.standalone) {
        $('nav.navbar.navbar-default').css('padding-top', '20px');
        if (navigator.appVersion.match(/iP(hone|od|ad).+?OS 7/)) {
            $("meta[name='apple-mobile-web-app-status-bar-style']").remove();
        }
        
        /* keep the standalone app in standalone mode. no safari launch */
        $('.navbar-nav a').click(function (event) {
            event.preventDefault();
            location.href = $(event.target).attr('href');
        });
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
        if ($(this).is('#mario')) {
            $input.val($('#mcode').text());
        } else {
            $input.val($(this).text());
        }
        window.scrollTo(0, 0);
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
    
    /* e */
    $('#em').click(function () {
        var first = 'elfego', second = 'buendia', third = 'x', end = '@gmail.com', subject = '?Subject=Prompt%20Editor';
        $(this).attr('href', 'mailto:' + first + '.' + second + '.' + third + end + subject);
    });
});