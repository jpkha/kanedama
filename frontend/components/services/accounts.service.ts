import useSWR from 'swr';
import {KATA_MANSA_ACCOUNT_API} from './constants';
import axios, {AxiosResponse} from 'axios';
import {AccountResponse} from '../../models/api/accountReponse';
import {ParseAccount} from '../../utils/parseAccount';

const accountsFetcher = (url: string) => axios.get(url)
  .then(({data}: AxiosResponse<AccountResponse[]>) =>
    data.map((account: AccountResponse) => ParseAccount.parseAccountResponseToAccountCompany(account))
  );
export const GetAccounts = () => useSWR(
  KATA_MANSA_ACCOUNT_API,
  accountsFetcher
)
