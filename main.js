

$(function () {



    window.Devices=null;
    $("#btnRefresh").click(()=>Load());
    Load(true);
 
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
                if(window.Devices[i]!=undefined)
                    window.Devices[i].SetParent('lstDevices');
            }

        } else {
            //actualizo los datos
            for(var i=0;i<window.Devices.length;i++){
                if(window.Devices[i]!=undefined)
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






});
