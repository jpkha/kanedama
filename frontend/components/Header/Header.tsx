import {Logo} from '@/components/Header/Logo';
import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';
import {ResponsiveSection} from '../../styles/_placeholder';

const HeaderContainer = styled.header`
  ${ResponsiveSection};
  height: ${variables.headerHeight};
  display: flex;
  align-items: center;
  border-bottom: 2px solid #EDEAF9;
  background-color: white;
  margin-top: 0;
`
export const Header = () => {
  return (<HeaderContainer>
    <Logo/>
  </HeaderContainer>)
}
