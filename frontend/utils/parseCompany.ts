import {Company} from '../models/company';
import {EntrepriseSirenResponse} from '../models/api/entrepriseSirenResponse';

export class ParseCompany {

  static parseEntrepriseSirenToCompany = ({ unite_legale}: EntrepriseSirenResponse): Company => {
    return {
      name: unite_legale?.denomination,
      address: unite_legale?.etablissement_siege?.geo_adresse,
      siret: unite_legale?.etablissement_siege?.siret
    }
  }
}
