import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';

const RedDot = styled.span`
  color: ${variables.colorSecondary};
  font-size: inherit;
  font-weight: 400;
`

const LogoTitle = styled.div`
  font-family: Assistant;
  font-size: 2rem;
  font-weight: 700;
  color: ${variables.colorPrimary};
  padding: 0 ${variables.spaceSM};
`
export const Logo = () => {
  return (
    <LogoTitle>
      Mansa
      <RedDot>.</RedDot>
    </LogoTitle>
  )
}
