import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';
import {AccountCompany} from '../../models/accountCompany';

export const Card = styled.li`
  margin: ${variables.spaceSM};
  padding: ${variables.spaceMD};
  color: ${variables.colorPrimary};
  background-color: ${variables.colorPrimaryBackground};
  border: 1px solid ${variables.colorPrimaryBorder};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  flex: 1 0 auto;
  list-style: none;
  @media (min-width: ${variables.breakpointMD}) {
    flex: 1 0 45%;
    max-width: 45%;
  }

  > h3 {
    display: flex;
    margin: 0 0 ${variables.spaceXS} 0;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 500;
  }

  > p {
    display: flex;
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 200;
  }
`

export const CardValue = styled.span`
  flex: 0 0 auto;
`
export const CardDescription = styled.span`
  flex: 1 1 auto;
`

export const AccountCard = ({accountCompany}: { accountCompany: AccountCompany }) => {
  return (<Card>
    <h3><CardDescription>Account number:</CardDescription> <CardValue>{accountCompany.accountNumber}</CardValue></h3>
    <p><CardDescription>Balance:</CardDescription>
      <CardValue>{accountCompany.balance} {accountCompany.currency}</CardValue></p>
  </Card>)
}
