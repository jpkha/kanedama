import styled from 'styled-components';
import {ReactElement, ReactNode} from 'react';
import variables from '/styles/_variables.module.scss';
import {ResponsiveSection} from '../../styles/_placeholder';

const SectionContainer = styled.section`
  ${ResponsiveSection};
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  flex-direction: column;
  > h2 {
    margin: ${variables.spaceSM};
  }
`

export function Section({children}: {children: ReactElement | ReactNode[]}) {
  return(
    <SectionContainer>{children}</SectionContainer>
  )
}
