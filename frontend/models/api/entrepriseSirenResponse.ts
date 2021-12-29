export interface EtablissementSiege {
  id: number;
  siren: string;
  nic: string;
  siret: string;
  geo_adresse: string;
}

export interface UniteLegale {
  id: number;
  siren: string;
  denomination: string;
  etablissement_siege: EtablissementSiege;
}

export interface EntrepriseSirenResponse {
  unite_legale: UniteLegale;
}
