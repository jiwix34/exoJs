/* creer une fonction 
qui va creer une balise
donner des valeurs a des proprietes
et l'attribuer a un parent */

/*function addition (a,b){
    return a+b;
}

window.onload = function(){
    var resultat = addition (5,10);
    document.getElementById("toto").innerHTML = resultat;
}; */


function addition (a,b){
    return a+b;
}


/*function ajout (){
    for (var i = addition ; i<addition.length; i++){
        resultat[i] = addition[i];
    }
} */

var resultat = 0;
function ajout(){

    return resultat++;
}

window.onload = function(){
    resultat = addition (5,5);
    document.getElementById("toto").innerHTML = resultat;
    document.onclick = function ()
{ 
   document.getElementById("toto").innerHTML = ajout();
    }
};



