/* creer une fonction qui va
creer une balise
affecter des valeurs a des proprietes et 
la fourrer dans un parent
*/

function doTag(tag,paren){
    //creer une balise
    var balise = document.createElement(tag);
    //inserer la balise cree dans un parent
    paren.appendChild(balise);
     //appliquer les styles
    setStyle(balise);
    //pimp my tag
    //styleMe(balise)
    return balise;
        
}


   
//il faut affecter le parent a la balise
// absolument mettre la balise dans le parent
//parent.appendChild(balise)
function setStyle(balise){
    if(balise.parentNode == document.body){
        balise.style.width = "200px";
        balise.style.height = "50px";
        balise.style.border = "1px solid black"; 
    }
    if(balise.tagName == "UL"){
        balise.style.backgroundColor = "red";
        balise.style.display = "flex";
        balise.innerHTML = "lien";
    }
}




window.onload = function(){
    doTag("header",document.body);
    var maNav = doTag("nav",document.body);
    doTag("section",document.body);
    doTag("section",document.body);
    doTag("section",document.body);
    var liste = doTag("ul",maNav);
    doTag("li",liste);
    doTag("li",liste);
    doTag("li",liste);
    
}