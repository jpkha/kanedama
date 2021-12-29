import styled from 'styled-components';
import {AccountCard} from '@/components/AccountsSection/AccountCard';
import {useEffect, useState} from 'react';
import {AxiosResponse} from 'axios';
import {AccountCompany} from '../../models/accountCompany';
import {AccountsService} from '../../services/accountsService';
import {AccountResponse} from '../../models/api/accountReponse';
import {ParseAccount} from '../../utils/parseAccount';

export const AccountsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

export const Accounts = () => {
  const initListAccount: AccountCompany[] = [];

  const [accountList, setAccountList] = useState<AccountCompany[]>(initListAccount);
  const accountsService = new AccountsService();

  useEffect(() => {
    const getAccounts = () => {
      accountsService.getAccounts()
        .then(({data}: AxiosResponse<AccountResponse[]>) => {
          setAccountList(data.map((account: AccountResponse) => ParseAccount.parseAccountResponseToAccountCompany(account)))
        })
    }

    getAccounts();
  }, []);
  return (
    <AccountsContainer>
      {accountList.map((accountCompany: AccountCompany) => (
        <AccountCard key={accountCompany.accountNumber} accountCompany={accountCompany}/>
      ))}
    </AccountsContainer>
  )
}
