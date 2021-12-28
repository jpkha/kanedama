import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';


const CompanySectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-top: ${variables.spaceXXL};
  flex-direction: column;
  padding: 0 ${variables.spaceXXL};

  > h2 {
    margin: 16px;
  }
  > p {
    margin: 8px 16px;
  }
`

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
