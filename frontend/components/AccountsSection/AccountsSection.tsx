import {Accounts} from '@/components/AccountsSection/Accounts';
import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';


const AccountsSectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-top: ${variables.spaceXXL};
  flex-direction: column;
  padding: 0 ${variables.spaceXXL};
  > h2 {
    margin: 16px;
  }`

export const AccountsSection = () => {
  return <AccountsSectionContainer>
    <h2> Accounts </h2>
    <Accounts/>
  </AccountsSectionContainer>
}
