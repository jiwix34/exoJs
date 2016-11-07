function afficher (){
    var txt = document.getElementById("name").value;
    var resultat = txt.concat(": c'est ton nom")+" ";
    document.getElementById("txt").innerHTML = resultat;
    var txt2 = document.getElementById("name2").value;
    var resultat2 = txt2.concat(": c'est ton prenom");
    document.getElementById("txt2").innerHTML = resultat +    resultat2;
}