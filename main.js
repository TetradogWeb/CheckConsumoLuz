async function GetPrices() {

    var getPrices;
    var prices;
    var date = new Date();
    var today = date.toDateString();

    console.log();
    if (window.localStorage) {
        //puedo guardar y cargar
        if (localStorage.getItem(today) !== null) {
            getPrices = Promise.resolve(localStorage.getItem(today));
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

async function Load(isFirstTime=true) {
    var prices = await GetPrices();
    //si es la primera vez
    if (isFirstTime) {
        //cargo los elementos

    } else {
        //actualizo los datos
    }
   
}

Load();