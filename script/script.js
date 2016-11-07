/* creer une fonction qui fabrique une div en carre de 200px avec une bordure de 1px en noir*/

function createCarre(){
    var div = document.createElement("div");
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.border ="1px solid black";
    return div;
}

function createColorizedCarre(color = "black"){
    var div = document.createElement("div");
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.border ="1px solid "+color;
    return div;
}


window.onload = function(){
    /* on affecte la valeur red a la propriete bgColor de la balise body */
  document.body.style.backgroundColor = "red";
    // on duplique la valeur de la propriete style de la balise body
    var styleBody = document.body.style;
    // on utilise la variable comme ref vers document.body.style
    styleBody.backgroundColor = "aqua";
    
    var carre = createCarre();
    carre.style.backgroundColor ="purple";
    document.body.appendChild(carre);
    
    document.body.appendChild(createColorizedCarre("red"));
    document.body.appendChild(createColorizedCarre());
    
};