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
}






$(function () {
    async function GetPrices() {

        var getPrices;
        var prices;
        var date = new Date();
        var today = date.toDateString();

        console.log();
        if (window.localStorage) {
            //puedo guardar y cargar
            if (localStorage.getItem(today) !== null) {
                getPrices = Promise.resolve(localStorage.getItem(today).split(','));
            } else {
                getPrices = Perfil.GetDayKwH(date);
            }


        } else {
            //consulto cada vez
            getPrices = Perfil.GetDayKwH(date);
        }
        prices = await getPrices;
        if (window.localStorage) {
            localStorage.setItem(today, prices);

        }
        return prices;
    }

    async function Load(isFirstTime = true) {


        var prices = await GetPrices();
        var date = new Date();
        var priceEstufa400 = Number( prices[date.getHours()-1] * 4 / 10).toFixed(2);
 
        $("#lblDia").html(date.getHours() + ":00 - " + date.getHours() + ":59 "+date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear());


        $("#estufa400").html(priceEstufa400 + " &euro;/hora");

        $("#estufa800").html((Number(priceEstufa400*2).toFixed(2)) + " &euro;/hora");
        $("#estufa1200").html((Number(priceEstufa400*3).toFixed(2)) + " &euro;/hora");

        //si es la primera vez
        if (isFirstTime) {
            //cargo los elementos
       


        } else {
            //actualizo los datos
        }

    }


 Load();

});
