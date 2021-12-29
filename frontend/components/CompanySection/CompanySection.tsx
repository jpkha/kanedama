import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';
import {Section} from '@/components/common/Section';


const CompanySectionContainer = styled(Section)`
  & > p {
    margin: ${variables.spaceXS} ${variables.spaceSM};
  }
`;

export const CompanySection = () => {
  return <CompanySectionContainer>
      <h2>Company</h2>
      <p>
        Name : MANSA GROUP
      </p>
      <p>
        SIRET : 03459535434
      </p>
      <p>
        Address: 112 AV DE PARIS 94300 VINCENNES
      </p>
  </CompanySectionContainer>
}
