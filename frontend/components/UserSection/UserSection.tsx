import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';
import {AcronymBullet} from '@/components/UserSection/AcronymBullet';
import {UserTitle} from '@/components/UserSection/UserTitle';

const UserSectionContainer = styled.section`
  display: flex;
  padding: 0 ${variables.spaceXXL};
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${variables.spaceSM} 0;
`
export const UserSection = () => {
  return (<UserSectionContainer>
    <UserContainer>
      <AcronymBullet>TR</AcronymBullet>
      <UserTitle>TINCO Rémy</UserTitle>
    </UserContainer>
  </UserSectionContainer>)
}
