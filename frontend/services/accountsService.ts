import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {KATA_MANSA_API} from './constants';
import {AccountsResponse} from '../models/api/accountsReponse';

export class AccountsService {

  private client: any;

  init = (): AxiosInstance => {
    this.client = axios.create({
      baseURL: KATA_MANSA_API,
    });
    return this.client;
  };

  getAccounts = (): Promise<AxiosResponse<AccountsResponse>> => {
    return this.init().get<AccountsResponse>(`/accounts`);
  };

}

