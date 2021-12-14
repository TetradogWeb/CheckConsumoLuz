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

    async function Init(){

        window.Import('Device.js');
        window.Devices=null;
        await Load(true);
    }
    async function Load(isFirstTime = false) {
        var date=new Date();
        $("#lblDia").html(date.getHours() + ":00 - " + date.getHours() + ":59 "+date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear());



        //si es la primera vez
        if (isFirstTime) {
            //cargo los elementos
            window.Devices=Device.Load();
            if(window.Devices.length==0){
                window.Devices=GetTestDevices();
                Device.Save(window.Devices);
                console.log("test loaded");
            }
            for(var i=0;i<window.Devices.length;i++){
                window.Devices[i].SetParent('lstDevices');
            }

        } else {
            //actualizo los datos
            for(var i=0;i<window.Devices.length;i++){
                window.Devices[i].Refresh();
            }
        }

    }
    function GetTestDevices(){
        var nombre='Estufa';
        var potencia1=400;
        var total=3;
        var devices=[];
        for(var i=0;i<total;i++){

            devices[i]=new Device();
            devices[i].Name=nombre+" "+(i+1);
            devices[i].Potencia=(i+1)*potencia1;
        }
        return devices;

    }

    Init();




});
