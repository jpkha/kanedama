import { css } from 'styled-components';
import variables from '/styles/_variables.module.scss';

export const ResponsiveSection = () => css`
  ${ResponsiveMainContainer};
  margin-top: ${variables.spaceXXL};
  @media (max-width: ${variables.breakpointMD}) {
    margin-top: ${variables.spaceSM};
  }
`;

export const ResponsiveMainContainer = () => css`
  padding: 0 ${variables.spaceXXL};
  @media (max-width: ${variables.breakpointMD}) {
    padding: 0 ${variables.spaceSM};
  }
`;
