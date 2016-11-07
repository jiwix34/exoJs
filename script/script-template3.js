window.onload = function(){
//je cree une balise header
var monHeader = document.createElement ("header");
monHeader.style.width = "200px";
monHeader.style.height = "50px";
monHeader.style.border = "1px solid black";
//je l'insere dans la balise body
document.body.appendChild(monHeader);

/********** debut nav *************/
   

    
//je cree une balise nav
var barreNav = document.createElement("nav");
barreNav.style.width = "200px";
barreNav.style.height = "50px";
barreNav.style.border = "1px solid black";
//je l'insere dans la balise body
document.body.appendChild(barreNav);

//je cree une balise ul
var liste = document.createElement("ul");
//je l'insere dans la balise nav
barreNav.appendChild(liste);

//je cree un premier item
var item1 = document.createElement("li");
liste.appendChild(item1);
// on cree unne ancre
var ancre1 = document.createElement("a");
//on lui met du texte
ancre1.innerHTML = "lien 1";//equivalent a <a> lien1 </a>
ancre1.href = "#section1";
item1.appendChild(ancre1); //resultat <li><a> lien1 </a> </li>

//je cree un second item
var item2 = document.createElement("li");
liste.appendChild(item2);
//on cree une ancre
var ancre2 = document.createElement("a");
//on lui met du texte
ancre2.innerHTML = "lien 2";//equivalent a <a> lien2 </a>
ancre2.href = "#section2";
item2.appendChild(ancre2); //resultat <li><a> lien2 </a> </li>

    /******************* fin nav ******************/
    
//je cree une balise section
var section1 = document.createElement ("section");
// je lui affecte les proprietes
section1.style.width = "200px";
section1.style.height = "50px";
section1.style.border = "1px solid black";
section1.id = "section1";
section1.innerHTML = "section1";
// je l'incere dans le body
document.body.appendChild(section1);


//je cree une balise section 2
var section2 = document.createElement ("section");
// je lui affecte les proprietes
section2.style.width = "200px";
section2.style.height = "50px";
section2.style.border = "1px solid black";
section2.id = "section2";
section2.innerHTML = "section2";
// je l'incere dans le body
document.body.appendChild(section2);
    
    
// je cree un footer
var footer = document.createElement ("footer")
footer.style.width = "200px";
footer.style.height = "50px";
footer.style.border = "1px solid black";
document.body.appendChild(footer);
    
}; 


