import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {ENTREPRISE_DATA_GOUV_API} from './constants';
import {EntrepriseSirenResponse} from '../models/api/entrepriseSirenResponse';

export class CompanyService {

  private client: any;

  init = (): AxiosInstance => {
    this.client = axios.create({
      baseURL: ENTREPRISE_DATA_GOUV_API,
    });
    return this.client;
  };

  getCompanyDescription = (siren: string): Promise<AxiosResponse<EntrepriseSirenResponse>> => {
    //852379890
    return this.init().get<EntrepriseSirenResponse>(`sirene/v3/unites_legales/${siren}`);
  };

}

