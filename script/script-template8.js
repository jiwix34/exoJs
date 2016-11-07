 function afficher (){
    var txt = document.getElementById("name").value;
    document.getElementById("txt").innerHTML = txt;
    var txt2 = document.getElementById("name2").value;
    document.getElementById("txt2").innerHTML = txt+" "+ txt2;
} 

// reponse exo2

// exercice 2

function setValueWithOld (){
    var oldValue = document.getElementById("resultat2").innerHTML;
    var r = document.getElementById("2-entree").value;
    document.getElementById("resultat2").innerHTML = oldValue+" "+r;
}

// exercice 3

function countCar(entree){
    return entree.length;
}
function setValue3(){
    var valeur = document.getElementById("3-entree").value;
   document.getElementById("resultat3").innerHTML = countCar(valeur);
}

// exercice 4

