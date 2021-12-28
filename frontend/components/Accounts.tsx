import styled from 'styled-components';
import {Card, CardDescription, CardValue} from '@/components/Card';

export const AccountsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Accounts = () => {
  const listAccount = [
    {
      accountNumber: '19040061',
      balance: 1844.23,
      currency: 'GBP'
    },
    {
      accountNumber: '19040061',
      balance: 1844.23,
      currency: 'GBP'
    },
    {
      accountNumber: '19040061',
      balance: 1844.23,
      currency: 'GBP'
    },
    {
      accountNumber: '19040061',
      balance: 1844.23,
      currency: 'GBP'
    }
  ]
  return (
    <AccountsContainer>
      {listAccount.map(({accountNumber, balance, currency}) => (
        <Card>
          <h3><CardDescription>Account number:</CardDescription> <CardValue>{accountNumber}</CardValue></h3>
          <p><CardDescription>Balance:</CardDescription> <CardValue>{balance} {currency}</CardValue></p>
        </Card>

      ))}
    </AccountsContainer>
  )
}
