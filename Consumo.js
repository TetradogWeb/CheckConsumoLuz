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
	static GetEstructuraGeneracion(perfil){
		return this.BaseGet(perfil,'estructura-generacion');
	}
	static GetEvolucionRenovableNoRenovable(perfil){
		return this.BaseGet(perfil,'evolucion-renovable-no-renovable');
	}
	static GetEstructuraRenovables(perfil){
		return this.BaseGet(perfil,'estructura-renovables');
	}
	static GetEstructuraGeneracionEmisionesAsociadas(perfil){
		return this.BaseGet(perfil,'estructura-generacion-emisiones-asociadas');
	}
	static GetEvolucionEstructuraGeneracionEmisionesAsociadas(perfil){
		return this.BaseGet(perfil,'evolucion-estructura-generacion-emisiones-asociadas');
	}
	static GetNoRenovablesDetalleEmisionesCO2(perfil){
		return this.BaseGet(perfil,'no-renovables-detalle-emisiones-CO2');
	}
	static GetMaximaRenovable(perfil){
		return this.BaseGet(perfil,'maxima-renovable');
	}
	static GetPotenciaInstalada(perfil){
		return this.BaseGet(perfil,'potencia-instalada');
	}
	static GetMaximaRenovableHistorico(perfil){
		return this.BaseGet(perfil,'maxima-renovable-historico');
	}
	static GetMaximaSinEmisionesHistorico(perfil){
		return this.BaseGet(perfil,'maxima-sin-emisiones-historico');
	}

}
class Intercambios{
	static GetFronteraFrancia(perfil){
		return this.BaseGet(perfil,'francia-frontera');
	}
	static GetFronteraPortugal(perfil){
		return this.BaseGet(perfil,'portugal-frontera');
	}
	static GetFronteraMarruecos(perfil){
		return this.BaseGet(perfil,'marruecos-frontera');
	}
	static GetFronteraAndorra(perfil){
		return this.BaseGet(perfil,'andorra-frontera');
	}
	static GetLineasFrancia(perfil){
		return this.BaseGet(perfil,'lineas-francia');
	}
	static GetLineasPortugal(perfil){
		return this.BaseGet(perfil,'lineas-portugal');
	}
	static GetLineasMarruecos(perfil){
		return this.BaseGet(perfil,'lineas-marruecos');
	}
	static GetLineasAndorra(perfil){
		return this.BaseGet(perfil,'lineas-andorra');
	}
	static GetFronteraProgramadoFrancia(perfil){
		return this.BaseGet(perfil,'francia-frontera-programado');
	}
	static GetFronteraProgramadoPortugal(perfil){
		return this.BaseGet(perfil,'portugal-frontera-programado');
	}
	static GetFronteraProgramadoMarruecos(perfil){
		return this.BaseGet(perfil,'marruecos-frontera-programado');
	}
	static GetFronteraProgramadoAndorra(perfil){
		return this.BaseGet(perfil,'andorra-frontera-programado');
	}
	static GetEnlaceBaleares(perfil){
		return this.BaseGet(perfil,'enlace-baleares');
	}
	static GetFronteraFisicos(perfil){
		return this.BaseGet(perfil,'frontera-fisicos');
	}
	static GetFronteraTodasFisicos(perfil){
		return this.BaseGet(perfil,'todas-fronteras-fisicos');
	}
	static GetFronteraProgramados(perfil){
		return this.BaseGet(perfil,'frontera-programados');
	}
	static GetFronterasTodasProgramados(perfil){
		return this.BaseGet(perfil,'todas-fronteras-programados');
	}

}
class Transporte{
  
	static GetEnergiaNoSuministradaEns(perfil){
		return this.BaseGet(perfil,'energia-no-suministrada-ens');
	}
	static GetIndiceIndisponibilidad(perfil){
		return this.BaseGet(perfil,'indice-indisponibilidad');
	}
	static GetTiempoInterrupcionMedioTim(perfil){
		return this.BaseGet(perfil,'tiempo-interrupcion-medio-tim');
	}
	static GetKilometrosLineas(perfil){
		return this.BaseGet(perfil,'kilometros-lineas');
	}
	static GetIndiceDisponibilidad(perfil){
		return this.BaseGet(perfil,'indice-disponibilidad');
	}
	static GetNumeroCortes(perfil){
		return this.BaseGet(perfil,'numero-cortes');
	}
	static GetEnsTim(perfil){
		return this.BaseGet(perfil,'ens-tim');
	}
	static GetIndiceDisponibilidadTotal(perfil){
		return this.BaseGet(perfil,'indice-disponibilidad-total');
	}


}
class Mercados{
	static GetComponentesPrecioEnergiaCierreDesglose(perfil){
		return this.BaseGet(perfil,'componentes-precio-energia-cierre-desglose');
	}
	static GetComponentesPrecio(perfil){
		return this.BaseGet(perfil,'componentes-precio');
	}
	static GetEnergiaGestionadaServiciosAjuste(perfil){
		return this.BaseGet(perfil,'energia-gestionada-servicios-ajuste');
	}
	static GetEnergiaRestricciones(perfil){
		return this.BaseGet(perfil,'energia-restricciones');
	}
	static GetPreciosRestricciones(perfil){
		return this.BaseGet(perfil,'precios-restricciones');
	}
	static GetReservaPotenciaAdicional(perfil){
		return this.BaseGet(perfil,'reserva-potencia-adicional');
	}
	static GetBandaRegulacionSecundaria(perfil){
		return this.BaseGet(perfil,'banda-regulacion-secundaria');
	}
	static GetEnergiaPreciosRegulacionSecundaria(perfil){
		return this.BaseGet(perfil,'energia-precios-regulacion-secundaria');
	}
	static GetEnergiaPreciosRegulacionTerciaria(perfil){
		return this.BaseGet(perfil,'energia-precios-regulacion-terciaria');
	}
	static GetEnergiaPreciosGestionDesvios(perfil){
		return this.BaseGet(perfil,'energia-precios-gestion-desvios');
	}
	static GetCosteServiciosAjuste(perfil){
		return this.BaseGet(perfil,'coste-servicios-ajuste');
	}
	static GetVolumenEnergiaServiciosAjusteVariacion(perfil){
		return this.BaseGet(perfil,'volumen-energia-servicios-ajuste-variacion');
	}
	static GetPreciosMercadosTiempoReal(perfil){
		return this.BaseGet(perfil,'precios-mercados-tiempo-real');
	}
	static GetEnergiaPreciosPonderadosGestionDesviosAntes(perfil){
		return this.BaseGet(perfil,'energia-precios-ponderados-gestion-desvios-before');
	}
	static GetEnergiaPreciosPonderadosGestionDesvios(perfil){
		return this.BaseGet(perfil,'energia-precios-ponderados-gestion-desvios');
	}
	static GetEnergiaPreciosPonderadosGersionDesviosDespues(perfil){
		return this.BaseGet(perfil,'energia-precios-ponderados-gestion-desvios-after');
	}

}



class Perfil{
  static get URI(){return 'apidatos.ree.es';}
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
	  // /{lang}/datos/{category}/{widget}?[query]
	var lang=this.Idioma==Null?Idioma.Spanish:this.Idioma;
  	var strUrl= $"{Perfil.URL}/{lang}/datos/{categoria}/{widget}";
	var strQuery=this.GetQueryString();
	if(strQuery!=Null){
		strUrl+='?'+strQuery;
	}
	 return strUrl;
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
