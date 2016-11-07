/* variable globales */
var NUMBER_OF_LINK = 4;
var CURRENT = 0; 

/* fonction qui va donner la forme d'un rectangle
au tag passé en parametre, en retournant ce tag */

function getTag(tag="section"){
    var myTag = document.createElement(tag);
    if(myTag.tagName == "a" || myTag.tagName == "li" || myTag.tagName == "ul" || myTag.tagName == "nav"){
        
    } else{
        myTag.style.border = "1px solid black";
        myTag.style.width = "500px";
        myTag.style.height = "200px";
        myTag.innerHTML = myTag.tagName;
    }
    return myTag;
}

window.onload = function(){
    document.body.appendChild(getTag("header"));
    document.body.appendChild(getTag("nav"));
    document.body.appendChild(getTag());
    document.body.appendChild(getTag());
    document.body.appendChild(getTag());
};


