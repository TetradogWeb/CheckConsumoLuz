//GET /{lang}/datos/{category}/{widget}?[query]
//apidatos.ree.es

class Balance {
  static Get(perfil){}
}
class Demanda{
  static GetEvolucion(perfil){}
  static GetVariacionComponentes(perfil){}
  static GetVariacionComponentesMovil(perfil){}
  static GetIreGeneral(perfil){}
  static GetIreGeneralAnual(perfil){}
  static GetIreGeneralMovil(perfil){}
  static GetIreIndustria(perfil){}
  static GetIreIndustriaAnual(perfil){}
  static GetIreIndustriaMovil(perfil){}
  static GetIreServicios(perfil){}
  static GetIreServiciosAnual(perfil){}
  static GetIreServiciosMovil(perfil){}
  static GetIreOtras(perfil){}
  static GetIreOtrasAnual(perfil){}
  static GetIreOtrasMovil(perfil){}
  static GetDemandaMaximaDiaria(perfil){}
  static GetDemandaMaximaHoraria(perfil){}
  static GetPerdidasTransporte(perfil){}
  static GetPotenciaMaximaInstantanea(perfil){}
  static GetVariacionDemanda(perfil){}
  static GetPotenciaMaximaInstantaneaVariacion(perfil){}
  static GetPotenciaMaximaInstantaneaVariacionHistorico(perfil){}
  static GetDemandaTiempoReal(perfil){}
  static GetVariacionComponentesAnual(perfil){}

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
  const URI='apidatos.ree.es';
  construct() {
    this.Idioma=Idioma.Spanish;
    this.GeoId=GeoId.Catalunya;
    this.GeoLimit=GeoLimit.ComunidadAutonoma;
    this.Inicio=null;
    this.Fin=null;
  }
}
class GeoLimit{

  const Peninsular='peninsular';
  const ComunidadAutonoma='ccaa';
  const Canarias='canarias';
  const Baleares='baleares';
  const Ceuta='ceuta';
  const Melilla='melilla';

}

class Idioma{
  const Spanish='es';
  const English='en';

}

class GeoId{

  
  const Peninsular =	8741;
  const Canarias =	8742;
  const Baleares 	8743;

  const Ceuta 	=8744;

  const Melilla =	8745;

  const Andalucia= 4;

  const Aragon= 5;

  const Cantabria= 6;

  const CastillaLaMancha= 7;

  const CastillaYLeon= 8;

  const Catalunya= 9;

  const PaisVasco= 10;

  const PrincipadoDeAsturias= 11;

  const ComunidadDeCeuta= 8744;

  const ComunidadDeMelilla= 8745;

  const ComunidadDeMadrid= 13;

  const ComunidadDeNavarra= 14;

  const ComunidadValenciana= 15;

  const Extremadura= 16;

  const Galicia= 17;

  const IslasBaleares= 8743;

  const IslasCanarias= 8742;

  const LaRioja= 20;

  const RegionDeMurcia= 21;


}
