import {Logo} from '@/components/Logo';
import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';

const HeaderContainer = styled.header`
  height: ${variables.headerHeight};
  display: flex;
  align-items: center;
  border-bottom: 2px solid #EDEAF9;
  padding: 0 ${variables.spaceXXL};
`
export const Header = () => {
  return (<HeaderContainer>
    <Logo/>
  </HeaderContainer>)
}
