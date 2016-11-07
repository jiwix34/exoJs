

function setValue1(){
    var recup = document.getElementById("txt1").value;
    var chiffre = "34";
    //verif de la variable recup
    var resultatVerification = verification(recup, chiffre);
    // afficher le resultat de la verif
    document.getElementById("resultat1").innerHTML = resultatVerification;
      
}

function verification(recup,chiffre){
    var test1 = document.getElementById("txt1").value;
    if(test1 == chiffre){
        return "vrai"+" j'ai bien 34 ans";
    }
    if(test1 != chiffre){
        return "faux"+" j'ai pas " +test1+" ans";
    }
    
}


function soustraction(a,b){
    return a-b;
}


function setValue2(){
    var recup2 = document.getElementById("txt2").value;
    var chiffre2 = "34";
     var result = soustraction(recup2, chiffre2);
    document.getElementById("resultat2").innerHTML = "nous avons "+result+" années de difference";
    if(recup2 < chiffre2){
        var result2 = soustraction(chiffre2,recup2);
        document.getElementById("resultat2").innerHTML = "nous avons "+result2+" années de difference";
    }
}

