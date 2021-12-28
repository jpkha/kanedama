import {Logo} from '@/components/Header/Logo';
import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';

const HeaderContainer = styled.header`
  height: ${variables.headerHeight};
  display: flex;
  align-items: center;
  border-bottom: 2px solid #EDEAF9;
  padding: 0 ${variables.spaceXXL};
  background-color: white;
`
export const Header = () => {
  return (<HeaderContainer>
    <Logo/>
  </HeaderContainer>)
}
