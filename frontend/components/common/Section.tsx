import styled from 'styled-components';
import {ReactElement, ReactNode} from 'react';
import variables from '/styles/_variables.module.scss';

const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-top: ${variables.spaceXXL};
  flex-direction: column;
  padding: 0 ${variables.spaceXXL};
  > h2 {
    margin: ${variables.spaceSM};;
  }
`

export function Section({children}: {children: ReactElement | ReactNode[]}) {
  return(
    <SectionContainer>{children}</SectionContainer>
  )
}
