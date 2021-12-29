import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {KATA_MANSA_API} from './constants';
import {AccountResponse} from '../models/api/accountReponse';

export class AccountsService {

  private client: any;

  init = (): AxiosInstance => {
    this.client = axios.create({
      baseURL: KATA_MANSA_API,
    });
    return this.client;
  };

  getAccounts = (): Promise<AxiosResponse<AccountResponse[]>> => {
    return this.init().get<AccountResponse[]>(`/accounts`);
  };

}

