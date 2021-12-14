//GET /{lang}/datos/{category}/{widget}?[query]
//apidatos.ree.es

class Response{
	static BaseGet(perfil,categoria,widget){
		var strUrl=perfil.GetUrl(categoria,widget);
		return fetch(strUrl).then(response => response.json());
	
	}
}

class Balance {
	static Get(perfil){
		return Response.BaseGet(perfil,'balance','balance-electrico');
	}
}
class Demanda{
	static GetEvolucion(perfil){
		return Response.BaseGet(perfil,'demanda','evolucion');
	}
	static GetVariacionComponentes(perfil){
		return Response.BaseGet(perfil,'demanda','variacion-componentes');
	}
	static GetVariacionComponentesMovil(perfil){
		return Response.BaseGet(perfil,'demanda','variacion-componentes-movil');
	}
	static GetIreGeneral(perfil){
		return Response.BaseGet(perfil,'demanda','ire-general');
	}
	static GetIreGeneralAnual(perfil){
		return Response.BaseGet(perfil,'demanda','ire-general-anual');
	}
	static GetIreGeneralMovil(perfil){
		return Response.BaseGet(perfil,'demanda','ire-general-movil');
	}
	static GetIreIndustria(perfil){
		return Response.BaseGet(perfil,'demanda','ire-industria');
	}
	static GetIreIndustriaAnual(perfil){
		return Response.BaseGet(perfil,'demanda','ire-industria-anual');
	}
	static GetIreIndustriaMovil(perfil){
		return Response.BaseGet(perfil,'demanda','ire-industria-movil');
	}
	static GetIreServicios(perfil){
		return Response.BaseGet(perfil,'demanda','ire-servicios');
	}
	static GetIreServiciosAnual(perfil){
		return Response.BaseGet(perfil,'demanda','ire-servicios-anual');
	}
	static GetIreServiciosMovil(perfil){
		return Response.BaseGet(perfil,'demanda','ire-servicios-movil');
	}
	static GetIreOtras(perfil){
		return Response.BaseGet(perfil,'demanda','ire-otras');
	}
	static GetIreOtrasAnual(perfil){
		return Response.BaseGet(perfil,'demanda','ire-otras-anual');
	}
	static GetIreOtrasMovil(perfil){
		return Response.BaseGet(perfil,'demanda','ire-otras-movil');
	}
	static GetDemandaMaximaDiaria(perfil){
		return Response.BaseGet(perfil,'demanda','demanda-maxima-diaria');
	}
	static GetDemandaMaximaHoraria(perfil){
		return Response.BaseGet(perfil,'demanda','demanda-maxima-horaria');
	}
	static GetPerdidasTransporte(perfil){
		return Response.BaseGet(perfil,'demanda','perdidas-transporte');
	}
	static GetPotenciaMaximaInstantanea(perfil){
		return Response.BaseGet(perfil,'demanda','potencia-maxima-instantanea');
	}
	static GetVariacionDemanda(perfil){
		return Response.BaseGet(perfil,'demanda','variacion-demanda');
	}
	static GetPotenciaMaximaInstantaneaVariacion(perfil){
		return Response.BaseGet(perfil,'demanda','potencia-maxima-instantanea-variacion');
	}
	static GetPotenciaMaximaInstantaneaVariacionHistorico(perfil){
		return Response.BaseGet(perfil,'demanda','potencia-maxima-instantanea-variacion-historico');
	}
	static GetDemandaTiempoReal(perfil){
		return Response.BaseGet(perfil,'demanda','demanda-tiempo-real');
	}
	static GetVariacionComponentesAnual(perfil){
		return Response.BaseGet(perfil,'demanda','variacion-componentes-anual');
	}

}
class Generacion{
	static GetEstructuraGeneracion(perfil){
		return Response.BaseGet(perfil,'generacion','estructura-generacion');
	}
	static GetEvolucionRenovableNoRenovable(perfil){
		return Response.BaseGet(perfil,'generacion','evolucion-renovable-no-renovable');
	}
	static GetEstructuraRenovables(perfil){
		return Response.BaseGet(perfil,'generacion','estructura-renovables');
	}
	static GetEstructuraGeneracionEmisionesAsociadas(perfil){
		return Response.BaseGet(perfil,'generacion','estructura-generacion-emisiones-asociadas');
	}
	static GetEvolucionEstructuraGeneracionEmisionesAsociadas(perfil){
		return Response.BaseGet(perfil,'generacion','evolucion-estructura-generacion-emisiones-asociadas');
	}
	static GetNoRenovablesDetalleEmisionesCO2(perfil){
		return Response.BaseGet(perfil,'generacion','no-renovables-detalle-emisiones-CO2');
	}
	static GetMaximaRenovable(perfil){
		return Response.BaseGet(perfil,'generacion','maxima-renovable');
	}
	static GetPotenciaInstalada(perfil){
		return Response.BaseGet(perfil,'generacion','potencia-instalada');
	}
	static GetMaximaRenovableHistorico(perfil){
		return Response.BaseGet(perfil,'generacion','maxima-renovable-historico');
	}
	static GetMaximaSinEmisionesHistorico(perfil){
		return Response.BaseGet(perfil,'generacion','maxima-sin-emisiones-historico');
	}

}
class Intercambios{
	static GetFronteraFrancia(perfil){
		return Response.BaseGet(perfil,'intercambios','francia-frontera');
	}
	static GetFronteraPortugal(perfil){
		return Response.BaseGet(perfil,'intercambios','portugal-frontera');
	}
	static GetFronteraMarruecos(perfil){
		return Response.BaseGet(perfil,'intercambios','marruecos-frontera');
	}
	static GetFronteraAndorra(perfil){
		return Response.BaseGet(perfil,'intercambios','andorra-frontera');
	}
	static GetLineasFrancia(perfil){
		return Response.BaseGet(perfil,'intercambios','lineas-francia');
	}
	static GetLineasPortugal(perfil){
		return Response.BaseGet(perfil,'intercambios','lineas-portugal');
	}
	static GetLineasMarruecos(perfil){
		return Response.BaseGet(perfil,'intercambios','lineas-marruecos');
	}
	static GetLineasAndorra(perfil){
		return Response.BaseGet(perfil,'intercambios','lineas-andorra');
	}
	static GetFronteraProgramadoFrancia(perfil){
		return Response.BaseGet(perfil,'intercambios','francia-frontera-programado');
	}
	static GetFronteraProgramadoPortugal(perfil){
		return Response.BaseGet(perfil,'intercambios','portugal-frontera-programado');
	}
	static GetFronteraProgramadoMarruecos(perfil){
		return Response.BaseGet(perfil,'intercambios','marruecos-frontera-programado');
	}
	static GetFronteraProgramadoAndorra(perfil){
		return Response.BaseGet(perfil,'intercambios','andorra-frontera-programado');
	}
	static GetEnlaceBaleares(perfil){
		return Response.BaseGet(perfil,'intercambios','enlace-baleares');
	}
	static GetFronteraFisicos(perfil){
		return Response.BaseGet(perfil,'intercambios','frontera-fisicos');
	}
	static GetFronteraTodasFisicos(perfil){
		return Response.BaseGet(perfil,'intercambios','todas-fronteras-fisicos');
	}
	static GetFronteraProgramados(perfil){
		return Response.BaseGet(perfil,'intercambios','frontera-programados');
	}
	static GetFronterasTodasProgramados(perfil){
		return Response.BaseGet(perfil,'intercambios','todas-fronteras-programados');
	}

}
class Transporte{
  
	static GetEnergiaNoSuministradaEns(perfil){
		return Response.BaseGet(perfil,'transporte','energia-no-suministrada-ens');
	}
	static GetIndiceIndisponibilidad(perfil){
		return Response.BaseGet(perfil,'transporte','indice-indisponibilidad');
	}
	static GetTiempoInterrupcionMedioTim(perfil){
		return Response.BaseGet(perfil,'transporte','tiempo-interrupcion-medio-tim');
	}
	static GetKilometrosLineas(perfil){
		return Response.BaseGet(perfil,'transporte','kilometros-lineas');
	}
	static GetIndiceDisponibilidad(perfil){
		return Response.BaseGet(perfil,'transporte','indice-disponibilidad');
	}
	static GetNumeroCortes(perfil){
		return Response.BaseGet(perfil,'transporte','numero-cortes');
	}
	static GetEnsTim(perfil){
		return Response.BaseGet(perfil,'transporte','ens-tim');
	}
	static GetIndiceDisponibilidadTotal(perfil){
		return Response.BaseGet(perfil,'transporte','indice-disponibilidad-total');
	}


}
class Mercados{
	static GetComponentesPrecioEnergiaCierreDesglose(perfil){
		return Response.BaseGet(perfil,'mercados','componentes-precio-energia-cierre-desglose');
	}
	static GetComponentesPrecio(perfil){
		return Response.BaseGet(perfil,'mercados','componentes-precio');
	}
	static GetEnergiaGestionadaServiciosAjuste(perfil){
		return Response.BaseGet(perfil,'mercados','energia-gestionada-servicios-ajuste');
	}
	static GetEnergiaRestricciones(perfil){
		return Response.BaseGet(perfil,'mercados','energia-restricciones');
	}
	static GetPreciosRestricciones(perfil){
		return Response.BaseGet(perfil,'mercados','precios-restricciones');
	}
	static GetReservaPotenciaAdicional(perfil){
		return Response.BaseGet(perfil,'mercados','reserva-potencia-adicional');
	}
	static GetBandaRegulacionSecundaria(perfil){
		return Response.BaseGet(perfil,'mercados','banda-regulacion-secundaria');
	}
	static GetEnergiaPreciosRegulacionSecundaria(perfil){
		return Response.BaseGet(perfil,'mercados','energia-precios-regulacion-secundaria');
	}
	static GetEnergiaPreciosRegulacionTerciaria(perfil){
		return Response.BaseGet(perfil,'mercados','energia-precios-regulacion-terciaria');
	}
	static GetEnergiaPreciosGestionDesvios(perfil){
		return Response.BaseGet(perfil,'mercados','energia-precios-gestion-desvios');
	}
	static GetCosteServiciosAjuste(perfil){
		return Response.BaseGet(perfil,'mercados','coste-servicios-ajuste');
	}
	static GetVolumenEnergiaServiciosAjusteVariacion(perfil){
		return Response.BaseGet(perfil,'mercados','volumen-energia-servicios-ajuste-variacion');
	}
	static GetPreciosMercadosTiempoReal(perfil){
		return Response.BaseGet(perfil,'mercados','precios-mercados-tiempo-real');
	}
	static GetEnergiaPreciosPonderadosGestionDesviosAntes(perfil){
		return Response.BaseGet(perfil,'mercados','energia-precios-ponderados-gestion-desvios-before');
	}
	static GetEnergiaPreciosPonderadosGestionDesvios(perfil){
		return Response.BaseGet(perfil,'mercados','energia-precios-ponderados-gestion-desvios');
	}
	static GetEnergiaPreciosPonderadosGersionDesviosDespues(perfil){
		return Response.BaseGet(perfil,'mercados','energia-precios-ponderados-gestion-desvios-after');
	}

}



class Perfil{
  static get Uri(){return 'https://apidatos.ree.es';}
  construct() {
	this.Idioma=Idioma.Spanish;
	this.GeoId=null;
	this.GeoLimit=null;
	this.Inicio=null;
	this.Fin=null;
	this.TimeTrunc=null;
	this.GeoTrunc=null;
	  
  }
  GetQueryString(){
  	var strQuery='';
	if(this.GeoId!=null){
		strQuery+='geo_ids='+this.GeoId+'&';
	}
	if(this.GeoLimit!=null){
		strQuery+='geo_limit='+this.GeoLimit+'&';
	}
	if(this.GeoTrunc!=null){
		strQuery+='geo_trunc='+this.GeoTrunc+'&';
	}
	if(this.TimeTrunc!=null){
		strQuery+='time_trunc='+this.TimeTrunc+'&';
	}
	  if (this.Inicio != null) {
		  strQuery += 'start_date=' + this.Inicio.toISOString() + '&';
	}
	if(this.Fin!=null){
		strQuery+='end_date='+this.Fin.toISOString()+'&';
	}
	return strQuery!=''?  strQuery.substring(0,strQuery.length-1):null;
  
  }
  
  GetUrl(categoria,widget){
	  // /{lang}/datos/{category}/{widget}?[query]
	var lang=this.Idioma==null?Idioma.Spanish:this.Idioma;
  	var strUrl= Perfil.Uri+'/'+lang+'/datos/'+categoria+'/'+widget;
	var strQuery=this.GetQueryString();
	if(strQuery!=null){
		strUrl+='?'+strQuery;
	  }

	 return strUrl;
	}

	static  GetPrice(date) {
		var perfil = new Perfil();

		perfil.Inicio = new Date(date);
		perfil.Inicio.setHours(perfil.Inicio.getHours() - 1);
		perfil.Fin = date;
		perfil.TimeTrunc = TimeTrunc.Hour;
		return Mercados.GetPreciosMercadosTiempoReal(perfil).then(resp => resp.included[0].attributes.values[0].value);
	}
	static GetPriceKwH(date) {
		return Perfil.GetPrice(date).then(resp =>Number( Number(resp / 1000).toFixed(5)));
	}
	static get GetPriceNow() {
		return Perfil.GetPrice(new Date(Date.now()));
	}

	static get GetPriceNowKwH() {
		return Perfil.GetPriceKwH(new Date(Date.now()));
	}
	static async GetDay(dateNow) {
		
			var perfil = new Perfil();

			perfil.Inicio = new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate());
			perfil.Fin =  new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate(),23);
			perfil.TimeTrunc = TimeTrunc.Hour;
			return Mercados.GetPreciosMercadosTiempoReal(perfil).then(resp =>{

				var prices = [];
				for(var i=0;i<resp.included[0].attributes.values.length;i++){
					prices[i]=resp.included[0].attributes.values[i].value;
				}
				return prices;


			} );
		
	
	}
	static async GetDayKwH(dateNow) {
		return Perfil.GetDay(dateNow).then(prices=>{
											for(var i=0;i<prices.length;i++){
												prices[i]=Number( Number(prices[i] / 1000).toFixed(5));
											}
											return prices;

										});

	}
	static async  GetSavedPricesDay() {

        var getPrices;
        var prices;
        var date = new Date();
        var today = date.toDateString();

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
	static async GetSavedPriceNow(){
		return (await Perfil.GetSavedPricesDay())[new Date().getHours()-1];
	}


}

class GeoTrunc{
static get ElectricSystem(){return 'electric_system';}

}
class GeoLimit{

  static get Peninsular(){return 'peninsular';}
  static get ComunidadAutonoma(){return 'ccaa';}
  static get Canarias(){return 'canarias';}
  static get Baleares(){return 'baleares';}
  static get Ceuta(){return 'ceuta';}
  static get Melilla(){return 'melilla';}

}

class Idioma{
  static get Spanish(){return 'es';}
  static get English(){return 'en';}

}
class TimeTrunc{
	static get Hour(){return 'hour';}
	static get Day(){return 'day';}
	static get Month(){return 'month';}
	static get Year(){return 'year';}
}

class GeoId{

  
  static get Peninsular(){return 8741;}
  static get Canarias(){return 8742;}
  static get Baleares(){return 8743;}

  static get Ceuta(){return 8744;}

  static get Melilla(){return 8745;}

  static get Andalucia(){return 4;}

  static get Aragon(){return 5;}

  static get Cantabria(){return  6;}

  static get CastillaLaMancha(){return  7;}

  static get CastillaYLeon(){return  8;}

  static get Catalunya(){return  9;}

  static get PaisVasco(){return  10;}

  static get PrincipadoDeAsturias(){return  11;}

  static get ComunidadDeCeuta(){return  8744;}

  static get ComunidadDeMelilla(){return  8745;}

  static get ComunidadDeMadrid(){return  13;}

  static get ComunidadDeNavarra(){return  14;}

  static get ComunidadValenciana(){return  15;}

  static get Extremadura(){return  16;}

  static get Galicia(){return  17;}

  static get IslasBaleares(){return  8743;}

  static get IslasCanarias(){return 8742;}

  static get LaRioja(){return 20;}

  static get RegionDeMurcia(){return  21;}


}
