//GET /{lang}/datos/{category}/{widget}?[query]
//apidatos.ree.es

class Response{
	static BaseGet(perfil,widget){
		var strUrl=peril.GetUrl(this.constructor.name,widget);
		return fetch(strUrl).then(response => response.json());
	
	}
}

class Balance  extends Response{
	static Get(perfil){
		return this.BaseGet(perfil,'balance-electrico');
	}
}
class Demanda extends Response{
	static GetEvolucion(perfil){
		return this.BaseGet(perfil,'evolucion');
	}
	static GetVariacionComponentes(perfil){
		return this.BaseGet(perfil,'variacion-componentes');
	}
	static GetVariacionComponentesMovil(perfil){
		return this.BaseGet(perfil,'variacion-componentes-movil');
	}
	static GetIreGeneral(perfil){
		return this.BaseGet(perfil,'ire-general');
	}
	static GetIreGeneralAnual(perfil){
		return this.BaseGet(perfil,'ire-general-anual');
	}
	static GetIreGeneralMovil(perfil){
		return this.BaseGet(perfil,'ire-general-movil');
	}
	static GetIreIndustria(perfil){
		return this.BaseGet(perfil,'ire-industria');
	}
	static GetIreIndustriaAnual(perfil){
		return this.BaseGet(perfil,'ire-industria-anual');
	}
	static GetIreIndustriaMovil(perfil){
		return this.BaseGet(perfil,'ire-industria-movil');
	}
	static GetIreServicios(perfil){
		return this.BaseGet(perfil,'ire-servicios');
	}
	static GetIreServiciosAnual(perfil){
		return this.BaseGet(perfil,'ire-servicios-anual');
	}
	static GetIreServiciosMovil(perfil){
		return this.BaseGet(perfil,'ire-servicios-movil');
	}
	static GetIreOtras(perfil){
		return this.BaseGet(perfil,'ire-otras');
	}
	static GetIreOtrasAnual(perfil){
		return this.BaseGet(perfil,'ire-otras-anual');
	}
	static GetIreOtrasMovil(perfil){
		return this.BaseGet(perfil,'ire-otras-movil');
	}
	static GetDemandaMaximaDiaria(perfil){
		return this.BaseGet(perfil,'demanda-maxima-diaria');
	}
	static GetDemandaMaximaHoraria(perfil){
		return this.BaseGet(perfil,'demanda-maxima-horaria');
	}
	static GetPerdidasTransporte(perfil){
		return this.BaseGet(perfil,'perdidas-transporte');
	}
	static GetPotenciaMaximaInstantanea(perfil){
		return this.BaseGet(perfil,'potencia-maxima-instantanea');
	}
	static GetVariacionDemanda(perfil){
		return this.BaseGet(perfil,'variacion-demanda');
	}
	static GetPotenciaMaximaInstantaneaVariacion(perfil){
		return this.BaseGet(perfil,'potencia-maxima-instantanea-variacion');
	}
	static GetPotenciaMaximaInstantaneaVariacionHistorico(perfil){
		return this.BaseGet(perfil,'potencia-maxima-instantanea-variacion-historico');
	}
	static GetDemandaTiempoReal(perfil){
		return this.BaseGet(perfil,'demanda-tiempo-real');
	}
	static GetVariacionComponentesAnual(perfil){
		return this.BaseGet(perfil,'variacion-componentes-anual');
	}

}
class Generacion{
	static GetEstructuraGeneracion(perfil){}
	static GetEvolucionRenovableNoRenovable(perfil){}
	static GetEstructuraRenovables(perfil){}
	static GetEstructuraGeneracionEmisionesAsociadas(perfil){}
	static GetEvolucionEstructuraGeneracionEmisionesAsociadas(perfil){}
	static GetNoRenovablesDetalleEmisionesCO2(perfil){}
	static GetMaximaRenovable(perfil){}
	static GetPotenciaInstalada(perfil){}
	static GetMaximaRenovableHistorico(perfil){}
	static GetMaximaSinEmisionesHistorico(perfil){}

}
class Intercambios{
	static GetFronteraFrancia(perfil){}
	static GetFronteraPortugal(perfil){}
	static GetFronteraMarruecos(perfil){}
	static GetFronteraAndorra(perfil){}
	static GetLineasFrancia(perfil){}
	static GetLineasPortugal(perfil){}
	static GetLineasMarruecos(perfil){}
	static GetLineasAndorra(perfil){}
	static GetFronteraProgramadoFrancia(perfil){}
	static GetFronteraProgramadoPortugal(perfil){}
	static GetFronteraProgramadoMarruecos(perfil){}
	static GetFronteraProgramadoAndorra(perfil){}
	static GetEnlaceBaleares(perfil){}
	static GetFronteraFisicos(perfil){}
	static GetFronteraTodasFisicos(perfil){}
	static GetFronteraProgramados(perfil){}
	static GetFronterasTodasProgramados(perfil){}

}
class Transporte{
  
	static GetEnergiaNoSuministradaEns(perfil){}
	static GetIndiceIndisponibilidad(perfil){}
	static GetTiempoInterrupcionMedioTim(perfil){}
	static GetKilometrosLineas(perfil){}
	static GetIndiceDisponibilidad(perfil){}
	static GetNumeroCortes(perfil){}
	static GetEnsTim(perfil){}
	static GetIndiceDisponibilidadTotal(perfil){}


}
class Mercados{
	static GetComponentesPrecioEnergiaCierreDesglose(perfil){}
	static GetComponentesPrecio(perfil){}
	static GetEnergiaGestionadaServiciosAjuste(perfil){}
	static GetEnergiaRestricciones(perfil){}
	static GetPreciosRestricciones(perfil){}
	static GetReservaPotenciaAdicional(perfil){}
	static GetBandaRegulacionSecundaria(perfil){}
	static GetEnergiaPreciosRegulacionSecundaria(perfil){}
	static GetEnergiaPreciosRegulacionTerciaria(perfil){}
	static GetEnergiaPreciosGestionDesvios(perfil){}
	static GetCosteServiciosAjuste(perfil){}
	static GetVolumenEnergiaServiciosAjusteVariacion(perfil){}
	static GetPreciosMercadosTiempoReal(perfil){}
	static GetEnergiaPreciosPonderadosGestionDesviosBefore(perfil){}
	static GetEnergiaPreciosPonderadosGestionDesvios(perfil){}
	static GetEnergiaPreciosPonderadosGersionDesviosAfter(perfil){}

}



class Perfil{
  static const URI='apidatos.ree.es';
  construct() {
	this.Idioma=Idioma.Spanish;
	this.GeoId=Null;
	this.GeoLimit=Null;
	this.Inicio=Null;
	this.Fin=Null;
	this.TimeTrunc=Null;
	this.GeoTrunc=Null;
	  
  }
  GetQueryString(){
  	var strQuery='';
	if(this.GeoId!=Null){
		strQuery+='geo_ids='+this.GeoId+'&';
	}
	if(this.GeoLimit!=Null){
		strQuery+='geo_limit='+this.GeoLimit+'&';
	}
	if(this.GeoTrunc!=Null){
		strQuery+='geo_trunc='+this.GeoTrunc+'&';
	}
	if(this.GeoId!=Null){
		strQuery+='geo_ids='+this.GeoId+'&';
	}
	if(this.TimeTrunc!=Null){
		strQuery+='time_trunc='+this.TimeTrunc+'&';
	}
	if(this.Inicio!=Null){
		strQuery+='start_date='+this.Inicio.toISOString()+'&';
	}
	if(this.Fin!=Null){
		strQuery+='end_date='+this.Fin.toISOString()+'&';
	}
	return strQuery!=''?  strQuery.substring(0,strQuery.length-1):Null;
  
  }
  
  GetUrl(categoria,widget){
  	var strUrl= $"{Perfil.URL}/{categoria}/{widget}";
	var strQuery=this.GetQueryString();
	if(strQuery!=Null){
		strUrl+='?'+strQuery;
	}
	 return strUrl;
  }
}

class GeoTrunc{
static const ElectricSystem='electric_system';

}
class GeoLimit{

  static const Peninsular='peninsular';
  static const ComunidadAutonoma='ccaa';
  static const Canarias='canarias';
  static const Baleares='baleares';
  static const Ceuta='ceuta';
  static const Melilla='melilla';

}

class Idioma{
  static const Spanish='es';
  static const English='en';

}
class TimeTrunc{
	static const Hour='hour';
	static const Day='day';
	static const Month='month';
	static const Year='year';
}

class GeoId{

  
  static const Peninsular =8741;
  static const Canarias =8742;
  static const Baleares =8743;

  static const Ceuta =8744;

  static const Melilla =8745;

  static const Andalucia= 4;

  static const Aragon= 5;

  static const Cantabria= 6;

  static const CastillaLaMancha= 7;

  static const CastillaYLeon= 8;

  static const Catalunya= 9;

  static const PaisVasco= 10;

  static const PrincipadoDeAsturias= 11;

  static const ComunidadDeCeuta= 8744;

  static const ComunidadDeMelilla= 8745;

  static const ComunidadDeMadrid= 13;

  static const ComunidadDeNavarra= 14;

  static const ComunidadValenciana= 15;

  static const Extremadura= 16;

  static const Galicia= 17;

  static const IslasBaleares= 8743;

  static const IslasCanarias= 8742;

  static const LaRioja= 20;

  static const RegionDeMurcia= 21;


}
