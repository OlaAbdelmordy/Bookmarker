 var submit_btn= document.getElementById("submit_btn_id");
 var inputName = document.getElementById("inputName");
 var inputUrl = document.getElementById("inputUrl");

 var overlay_Layer=document.getElementById("layer_Id");
 var closeIconErrorMassage= document.getElementById("close_icon_Id");
 var visitBtn=document.getElementById("visit_Btn_Id");
 var deleteBtn = document.getElementById("delete_Btn_Id");

var allBooks =[];

if(localStorage.getItem("localStorageAllBooksArray")!== null){
    allBooks=JSON.parse(localStorage.getItem(localStorageAllBooksArray));
    displayData();
}


// function validationName(){

//     var text =inputName.value;
//     // var regex=/^[A-Za-z0-9\s\-_,\.;:()]+$/;
//     var regex =/^[A-Z][a-z]{3,8}$/;
//     // var regex =/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
//     // var regex=/^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
//     //  var regex =/^\w++(?:[.,_:()\s-](?![.\s-])|\w++)*$/;
//     if(regex.test(text)==true){
//         inputName.classList.add('is-valid');
//         inputName.classList.remove('is-invalid');
//         return true;
//     }
//     else {
//         inputName.classList.add('is-invalid');
//         inputName.classList.remove('is-valid');
//         return false;
//     }
// }
function validationUrl(){
    var url_txt=inputUrl.value;

    var regexUrl = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if(regexUrl.test(url_txt)==true){
        inputUrl.classList.add('is-valid');
        inputUrl.classList.remove('is-invalid');
        return true;
    }
    else {
        inputUrl.classList.add('is-invalid');
        inputUrl.classList.remove('is-valid');
        return false;
    }
}

 function add(){
    // if(validationName()==true && validationUrl()==true){
        if(validationUrl()==true){
        var book={
            name: inputName.value,
             url: inputUrl.value
        }
        allBooks.push(book);
        localStorage.setItem("localStorageAllBooksArray",JSON.stringify(allBooks));
        displayData();
        clearForm();
        return true;
    }
    else {
        overlay_Layer.classList.replace('hidden', 'appear');
        clearForm();
    }
   
 }

 function clearForm(){
    inputName.value =null;
    inputUrl.value =null;
    inputName.classList.remove('is-valid');
    inputUrl.classList.remove('is-valid');
    inputName.classList.remove('is-invalid');
    inputUrl.classList.remove('is-invalid');
 }

 function displayData(){
    var box="";
    for( var i=0; i<allBooks.length; i++){
        box += `<tr>
        <td>${i+1}</td> 
        <td>${allBooks[i].name}</td> 
        <td>
            <button class="btn visit_btn " id="visit_Btn_Id" onclick="visitItem(${i})">
                <i class="fa-solid fa-eye px-1"></i>
                Visit
            </button>
        </td> 
        <td>
            <button class="btn  delete_btn" id="delete_Btn_Id"  onclick="deleteItem(${i})">
                <i class="fa-solid fa-trash px-1"></i>
                Delete
            </button>
        </td> 
    </tr>
    `
    }
    document.getElementById("tbody_id").innerHTML=box;
 }

 function deleteItem(index){
  allBooks.splice(index , 1);
  localStorage.setItem("localStorageAllBooksArray" , JSON.stringify(allBooks));
  displayData();
  clearForm();
 }
 function visitItem(){
    window.open(allBooks[index].url);

 }
 function closeMassage(){
    overlay_Layer.classList.replace('appear','hidden')

 }

