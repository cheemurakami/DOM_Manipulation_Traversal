$(document).ready(function(){
    $('button#hello').click(function(){
        $('li').prepend("<li>Hello!</li>");
    });
});