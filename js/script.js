$(document).ready(function() {
    $('input[name=enter-text]').on('input', function() {
        $('p#text').text(this.value); 
    });
    $('input[name=enter-text]').keypress(function(event) {
        if (event.which === 13) {
            event.preventDefault();
        }
    });
});