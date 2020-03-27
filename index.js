// write a function that when click on check button, the text above gets crossed out.  use toggle method so that when clicked again the text gets uncrossed

// write a function that when click the delete button, the container box gets removed

// write a function that takes the value inputted in the form field and creates a new box below 


function handleShoppingList(){

  $('#js-shopping-list-form').submit(event=> {
    event.preventDefault();
    console.log('handler for .submit() called');
  
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    e.preventDefault();
    console.log('handler for shopping item toggle');
    //on whatever I just clicked go to the parent, go to the parent of that, go to the parent above, find the shopping item and add the class shopping-item-toggle
    $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
  });
  

  $('.shopping-list').on('click', '.shopping-item-delete', function(e){
    e.preventDefault();
    console.log('handler for delete item');
    $(this).parent().parent().remove();
  });
  

}


$(handleShoppingList);


//. variable whose value is set to a function that creates a new block containing (#shopping-list-entry.text)



 // toggle .shopping-item__checked 