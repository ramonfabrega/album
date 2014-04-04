$(document).ready(function(){
    $('.divContainer').click(function(){
        $(this).toggleClass('selected');
    });
    $('#button').click(function(){
        if(confirm("Press enter to delete")){
            $('.selected').remove();
        }
    });
});