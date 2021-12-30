import axios, {AxiosResponse} from 'axios';
import {EntrepriseSirenResponse} from '../../models/api/entrepriseSirenResponse';
import {ParseCompany} from '../../utils/parseCompany';
import useSWR, {SWRResponse} from 'swr';
import {ENTREPRISE_DATA_GOUV_SIREN_API} from './constants';
import {Company} from '../../models/company';

const companyFetcher = (url: string) => axios.get(url)
  .then(({data}: AxiosResponse<EntrepriseSirenResponse>) => ParseCompany.parseEntrepriseSirenToCompany(data))

export const GetCompanyDescription = (companySiren: string): SWRResponse<Company> =>
  useSWR(
    `${ENTREPRISE_DATA_GOUV_SIREN_API}/${companySiren}`,
    companyFetcher
  )
