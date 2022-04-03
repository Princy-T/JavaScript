document.addEventListener("DOMContentLoaded",()=>
{
    const imageDataUrl=localStorage.getItem("presentimage");
    
        document.querySelector("#image").setAttribute("src",imageDataUrl);
    
});
let newObject = window.localStorage.getItem("myObject");
var obj=JSON.parse(newObject); 
for (var key in obj) 
{ 
        var tag = document.createElement("p");
        tag.setAttribute("class","myPara") ;
        var text = document.createTextNode(key + " -> " + obj[key]); 
        tag.appendChild(text); 
        var element = document.getElementById("final");
        element.appendChild(tag);
    
}