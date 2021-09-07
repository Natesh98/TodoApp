

var List = document.getElementById('todo-list');
var inputbox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-item');
var btnUpdate = document.getElementById('update-item');
var btnRemove = document.getElementById('remove-item');





var currentInputValue = '';
inputbox.addEventListener('input', function(e){

    currentInputValue = e.target.value;

}); 


inputbox.addEventListener('keyup', function(e) {

    if(e.keyCode === 13) { 
    
        addListItem();
    }
 
});


function createNewNode(){
    var newListElement= document.createElement('li')
    var textNode = document.createTextNode(currentInputValue)
    newListElement.appendChild(textNode)
    newListElement.id = "item" + (List.childElementCount + 1) ;

    return newListElement;  
}


function addListItem(){
    //  Condition 
  if(currentInputValue !==  undefined && currentInputValue !== null && currentInputValue !== '') {
   
    var newListElement = createNewNode();
   
    // Add List Item 
   List.appendChild(newListElement);
   console.log(List.childElementCount);

   inputbox.value = '' 
   currentInputValue = ''


  } else{

    alert('Please Enter A Valid Todoo Item')
  }

}

 

 
// click button add element
btnAdd.addEventListener('click' , addListItem);

btnUpdate.addEventListener('click' , function(){
   
    var firstElement = List.firstElementChild;
    var newListElement = createNewNode();
    List.replaceChild(newListElement, firstElement);

});

btnRemove.addEventListener('click' , function(){
    var firstElement = List.firstElementChild;

    List.removeChild(firstElement);

  
});