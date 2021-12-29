import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {RANDOM_USER_URL_API} from './constants';
import {RandomUserResponse} from '../models/api/randomUserResponse';

export class RandomUserService {

  private client: any;

  init = (): AxiosInstance => {
    this.client = axios.create({
      baseURL: RANDOM_USER_URL_API,
    });
    return this.client;
  };

  getRandomUser = (): Promise<AxiosResponse<RandomUserResponse>> => {
    return this.init().get<RandomUserResponse>(`/api/?nat=fr`);
  };

}

