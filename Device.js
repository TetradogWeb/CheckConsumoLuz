

class Device extends Controller{
    constructor(){
        super();
        this.Name='Device';
        this.Potencia=1000;
        this.Estancia='';
    }
 
    get SaveString(){
        return this.Name+Device.SeparadorCampo+this.Potencia+Device.SeparadorCampo+this.Estancia;
    }

    Price(){
        return Perfil.GetSavedPriceNow().then(priceKwh=>Number((this.Potencia/1000)*priceKwh).toFixed(2));
    }
    GetContent(){
        //devuelvo el HTML con los datos
        return this.Price().then(price=>'<div id="'+this.Id+'" class="device">'
                                            +'<h3>'+this.Name+'</h3>'
                                            +'<h4>'+price+'&euro;/hora</h4>'
                                       +'</div>'
                );
    }
    LoadString(strLoad){
        var campos=strLoad.split(Device.SeparadorCampo);
        this.Name=campos[0];
        this.Potencia=Number(campos[1]);
        this.Estancia=campos[2];
    }
    
    static get  SeparadorCampo(){
        return ';';
    }
    static get Separador(){
        return '|';
    }
    static Save(devices,key='devices'){
        var str='aux';
        for(var i=0;i<devices.length;i++)
        {
            str+=Device.Separador+devices[i].SaveString;
        }
        if(window.localStorage){
            localStorage.setItem(key,str);
        }
        return str;


    }
    static Load(key='devices'){
        var campos;
        var devices=[];
        if(window.localStorage){
            campos=localStorage.getItem(key);
            if(campos !== null){
                if(campos.includes(Device.Separador)){
                    campos=campos.split(Device.Separador);
                    for(var i=1;i<campos.length;i++){
                        devices[i]=new Device();
                        devices[i].LoadString(campos[i]);
                    }
            }
            }
        }
        return devices;

    }

}