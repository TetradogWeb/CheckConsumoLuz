window.Import = (url) => {

    var scriptNode = document.createElement("script");
    scriptNode.setAttribute("language", "JavaScript");
    scriptNode.setAttribute("type", "text/JavaScript");
    scriptNode.setAttribute("src", url);
    if (!window._MapImportScript)
        window._MapImportScript = new Map();
    //source:http://www.forosdelweb.com/f13/importar-archivo-js-dentro-javascript-387358/
    if (!window._MapImportScript.has(url)) {
        document.write(scriptNode.outerHTML);
        window._MapImportScript.set(url, url);
    }


};

window.Import("Consumo.js");

var dateFin = Date.now();
    dateFin.setHours( dt.getHours() + 1 );
var perfil=new Perfil(){ 

    GeoLimit=GeoLimit.ComunidadAutonoma,
    GeoId=GeoId.Catalunya,
    Inicio=Date.now();
    Fin=dateFin,
    TimeTrunc=TimeTrunc.Hour


};

Balance.Get(perfil).then(console.log);
