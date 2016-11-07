/* faire cuire des pates */
function cuireDesPates(liquide,casserole,cuisinière,pates,sel){
    if(casserole == null || liquide == null || cuisinière == null || pates == null){
        return null;
    }
    cuisinière.allumer();
    casserole.ajouter(liquide);
    cuisinière.poser(casserole);
    if(sel != null){
        casserole.ajouter(sel);
    }

    tant que (liquide.ebulition !=vrai){
        attendre;
    }
    casserole.ajouter(pates);
    var dureeDeCuisson = 10;
    tant que (dureeDeCuisson != 0){
        dureeDeCuisson = dureeDeCuisson - 1;
    }
    return pates;
}
var spaghetti = cuireDespates(eauDuRobinet,casserole18cm,cuisiniereFaure,lustucruSp,selLaBaleine);
var coquillette = cuireDesPates(eauPlate,casserole15cm,feuDeBois,coquilletteLidl,null);