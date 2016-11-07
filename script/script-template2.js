
function Header () {
    var header = document.createElement ("header");
    header.style.width = "100%";
    header.style.height = "450px";
    header.style.backgroundImage = "url('images/img-fond.jpg')";
    
    return header;
}


function Nav (){
    var nav = document.createElement ("nav");
    nav.style.width = "100%";
    nav.style.height = "90px";
    nav.style.backgroundColor = "grey";
    return nav;
}

/* fonction qui va donner la forme d'un rectangle
au tag passé en parametre, en retournant ce tag */

function getTag(tag="section"){
    var myTag = document.createElement(tag);
    if(myTag.tagName == "a" || myTag.tagName == "li" || myTag.tagName == "ul" || myTag.tagName == "nav"){
        
    } else{
        myTag.style.backgroundColor = "#999";
        myTag.style.borderBottom = "1px solid black";
        myTag.style.width = "100%";
        myTag.style.height = "400px";
        myTag.innerHTML = myTag.tagName;
    }
    return myTag;
}
/*fin*/

function Footer (){
    var footer = document.createElement ("footer");
    footer.style.width = "100%";
    footer.style.height = "100px";
    footer.style.backgroundColor = "black";
    return footer;
}




window.onload = function(){
   document.body.appendChild(Header());
   document.body.appendChild(Nav());
   document.body.appendChild(getTag());
    document.body.appendChild(getTag());
    document.body.appendChild(getTag());
    document.body.appendChild(Footer());
    
}; 




