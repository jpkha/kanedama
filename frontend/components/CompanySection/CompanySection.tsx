import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';
import {Section} from '@/components/common/Section';


const CompanyDescription = styled.p`
    margin: ${variables.spaceXS} ${variables.spaceSM};
`;



export const CompanySection = () => {
  return <Section>
      <h2>Company</h2>
      <CompanyDescription>
        Name : MANSA GROUP
      </CompanyDescription>
      <CompanyDescription>
        SIRET : 03459535434
      </CompanyDescription>
      <CompanyDescription>
        Address: 112 AV DE PARIS 94300 VINCENNES
      </CompanyDescription>
  </Section>
}
