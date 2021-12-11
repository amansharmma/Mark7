
var btntranslate= document.querySelector('#btn-translate');
var txtarea=document.querySelector('#txt-area');
var output=document.querySelector('#output');

var baseURL="https://api.funtranslations.com/translate/pirate.json";
function makeURL(input){
    
    return baseURL+"?"+"text="+input;
}
function errorHandler(error){
    console.log("error occured ",error);
}
btntranslate.addEventListener("click",function clickHandler(){
    console.log(txtarea.value)
    fetch(makeURL(txtarea.value))
      .then(response => response.json())
      .then(json => {
          var translated=json.contents.translated
          output.innerText=translated;
      })
      .catch(errorHandler)
})