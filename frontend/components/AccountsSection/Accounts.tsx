import styled from 'styled-components';
import {Card, CardDescription, CardValue} from '@/components/AccountsSection/Card';

export const AccountsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

export const Accounts = () => {
  const listAccount = [
    {
      accountNumber: '19040001',
      balance: 1844.23,
      currency: 'GBP'
    },
    {
      accountNumber: '19040062',
      balance: 1844.23,
      currency: 'GBP'
    },
    {
      accountNumber: '19040063',
      balance: 1844.23,
      currency: 'GBP'
    },
    {
      accountNumber: '19040064',
      balance: 1844.23,
      currency: 'GBP'
    }
  ]
  return (
    <AccountsContainer>
      {listAccount.map(({accountNumber, balance, currency}) => (
        <Card key={accountNumber}>
          <h3><CardDescription>Account number:</CardDescription> <CardValue>{accountNumber}</CardValue></h3>
          <p><CardDescription>Balance:</CardDescription> <CardValue>{balance} {currency}</CardValue></p>
        </Card>

      ))}
    </AccountsContainer>
  )
}
