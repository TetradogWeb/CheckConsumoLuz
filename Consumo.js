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
