 /*----------exo1------------*/

function setValue1(){
  var x = document.getElementById("rabite").value;
     document.getElementById("resultat1").innerHTML = x;
 }

 /*----------exo2------------*/

function setValue2(){
    var x = document.getElementById("rabite2").value;
    document.getElementById("resultat2").innerHTML  += x +" ";
}


// exercice 3

function countCar(entree){
    return entree.length;
}
function setValue3(){
    var valeur = document.getElementById("rabite3").value;
   document.getElementById("resultat3").innerHTML = countCar(valeur);
}

// exercice 4

function setValue4(){
     var pattern =1;
     for(i=0;i<document.getElementById("onMaDitDeDireArdie").value.length;i++) 
        if(document.getElementById("onMaDitDeDireArdie").value.charAt(i) < "a"
        || document.getElementById("onMaDitDeDireArdie").value.charAt(i) > "z")
            pattern = -1;
        if(pattern == -1) {
            document.getElementById("resultat4").innerHTML="j'ai dit pas de chiffre";
            
}           
        }

// exercice 4 deuxieme methode

function setValue5(){
    var recup = document.getElementById("onMaDitDeDireArdie2").value;
    var chiffre = "0123456789";
    //verif de la variable recup
    var resultatVerification = verification(recup, chiffre);
    // afficher le resultat de la verif
    document.getElementById("resultat4bis").innerHTML = resultatVerification;
      
}
/*
la fonction verification verifie si les caracteres contenus dans le pararemetre verificateur  existe dans le parametre valeurTest
*/
function verification(valeurTest, verificateur){
 // verifier chaque carateres de valeurTest
    for(i=0; i<valeurTest.length; i++){
        var caractereActuel = valeurTest[i];
        for(j=0; j< verificateur.length; j++){
            if (caractereActuel == verificateur[j]){
                return "j'avais dit pas de chiffre";
            }   
        }
        return valeurTest;
    }
}

//exercice 5
//mettre deux champs en entree avec signe + entre les deux
// la fonction setvalue()affiche le resultat  de l fonction addition

function addition(a,b){
    return a+b;
}

function setValue6(){
    // on recupere les valeurs rentrees dans les champs texte
    var entree1 = document.getElementById("entree1").value;
    var entree2 = document.getElementById("entree2").value;
     //on converti les strings en entier
    var valeur1 = parseInt(entree1);
    var valeur2 = parseInt(entree2);
    var resultat = addition(valeur1,valeur2);
    // on affiche le resultat
    document.getElementById("resultat5").innerHTML = resultat + " bravo tu sais compter";  
}

// exercice 6 
/*verifier les caractères contenus dans la valeurATester
et va declencher l'operation adéquate selon les caractères trouvés
ex : si elle trouve un signe "=" retourne un texte vide "" 
*/


function verification(valeurATester,pattern){
	var val1 = "";
	var val2 = "";
	var operateur = "";
	var flag = false; // insere dans val1
	
	//iteration sur le champ texte (input)
	for(var i=0;i<valeurATester.length;i++){	
		//iteration sur le pattern
		for(var j=0;j<pattern.length;j++){
			//si on tombe sur une caractère operation (+-/*=)
			if(valeurATester[i] == pattern[j]){
				//si "=" on retourn une chaine vide
				if(valeurATester[i] == "="){
					return "";
				}else{
					//sinon on affecte la variable operateur avec le caractere trouvé
					operateur = valeurATester[i];
					//a partir de la on passe sur la deuxieme valeur
					flag = true;
					//important il y a une autre operation a faire
					//une operation a faire
					i++;
				}
			}
		}
		if(!flag){ //si le flag==false
			val1 += valeurATester[i];
		}else{
			val2 += valeurATester[i];
		}
	}
	
	if(flag){
		return valeurATester+"="+operation(parseInt(val1),parseInt(val2),operateur);
	}
}

function setValue7(){
	//on recupere la valeur rentrée dans le champ texte
	var entree = document.getElementById("entree6").value;
	//on note nos signes a chercher dans le String
	var signesMath = "+-/*=";	
	//on affecte le resultat dans le champ d'entree
	var test = verification(entree,signesMath);
	//document.getElementById("entree6").setAttribute("value",test);
	document.getElementById("entree6").value = test;
}

function operation(valeur1,valeur2,operation){
    switch(operation){
        case "+":
            return valeur1+valeur2;
        case "-":
            return valeur1-valeur2;
            case"*":
            return valeur1*valeur2;
        case "/":
            return valeur1/valeur2;
    }
}
