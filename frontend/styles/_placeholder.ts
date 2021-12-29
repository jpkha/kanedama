import { css } from 'styled-components';
import variables from '/styles/_variables.module.scss';

export const ResponsiveSection = () => css`
  padding: 0 ${variables.spaceXXL};
  margin-top: ${variables.spaceXXL};
  @media (max-width: ${variables.breakpointMD}) {
    padding: 0 ${variables.spaceSM};
    margin-top: ${variables.spaceSM};
  }
`;
