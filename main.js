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
        return prices.split(',');
    }

    async function Load(isFirstTime = true) {


        var prices = await GetPrices();

        var priceEstufa400 = Number( prices[new Date().getHours()-1] * 4 / 10).toFixed(2);
        var date = new Date();
        $("#lblDia").html(date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear());



        $("#estufa400").html(priceEstufa400 + " €/hora");

        $("#estufa800").html((priceEstufa400*2) + " €/hora");
        $("#estufa1200").html((priceEstufa400*3) + " €/hora");
        //si es la primera vez
        if (isFirstTime) {
            //cargo los elementos
       


        } else {
            //actualizo los datos
        }

    }


    Load();






});