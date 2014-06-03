$(document).ready(function(){
        $('.help').on('click', 'button', function(){
        $('.help').prev().slideToggle(200);  
    });
    
    //add items with enter
    $('.add-item').keypress(function(event){
        if (event.keyCode === 13) 
        {
        var value = $(this).val();
        var addListItem = $('<div class="list-row">'
                +'<input type="checkbox" class="check-items" style="float: left; margin-right: 20px; margin-top: 10px;">'
                +'<label></label>'
                +'<button class="trash"></button>'
                +'<div class="list-tag">' +value+ '</div>'
                +'<button class="pipe"></button>'
                +'</div>');
        $('.shopping-list').prepend(addListItem); 
        $(this).val('Add new item');
        event.preventDefault();
        }
    });
    
    //add items with button
    $('.btn').click(function(){
        var value = $('.add-item').val();
        var addListItem = $('<div class="list-row">'
                +'<input type="checkbox" class="check-items" style="float: left; margin-right: 20px; margin-top: 10px;">'
                //+'<label></label>'
                +'<button class="trash"></button>'
                +'<div class="list-tag">' +value+ '</div>'
                +'<button class="pipe"></button>'
                +'</div>');
        $('.shopping-list').prepend(addListItem); 
        $(this).val('Add new item');
        return false;
    });
    
    //delete items
    $('.shopping-list').on('click', '.trash', function(){
        $(this).closest('.list-row').remove();
    });
    
    
    //change the icon if selected
    $('.shopping-list').on('click', '.pipe', function(){
        var selected = $('<button class="selected"></button>');
        $(this).closest('.list-row').append(selected).show().addClass('item-selected');
        //$(this).remove();
    });
    
    //select all function
    $('.select-all').click(function(){
        if(this.checked){
            $('.check-items').each(function(){
                this.checked = true;
        });}
        else{
            $('.check-items').each(function(){
                this.checked = false;
                });
            }
            
        });
    
    //drag items
     $(function() {
        $( '.shopping-list' ).sortable({ axis: "y"});
    });
    
});
