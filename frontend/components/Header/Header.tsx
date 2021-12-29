import {Logo} from '@/components/Header/Logo';
import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';
import {ResponsiveMainContainer} from '../../styles/_placeholder';

const HeaderContainer = styled.header`
  ${ResponsiveMainContainer};
  height: ${variables.headerHeight};
  display: flex;
  align-items: center;
  border-bottom: 2px solid #EDEAF9;
  background-color: white;
`
export const Header = () => {
  return (<HeaderContainer>
    <Logo/>
  </HeaderContainer>)
}
