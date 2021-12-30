import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';
import {Section} from '@/components/common/Section';
import {Company} from '../../models/company';

const CompanyDescription = styled.p`
  margin: ${variables.spaceXS} ${variables.spaceSM};
`;

interface CompanySectionProps {
  readonly company: Company | undefined;
  readonly error: string;
}

export const CompanySection = ({company, error}: CompanySectionProps) => {

  if (error) return <div>An error has occurred.</div>;
  if (!company) return <div>Loading...</div>;

  return <Section>
    <h2>Company</h2>
    <CompanyDescription>
      Name : {company.name}
    </CompanyDescription>
    <CompanyDescription>
      SIRET : {company.siret}
    </CompanyDescription>
    <CompanyDescription>
      Address: {company.address}
    </CompanyDescription>
  </Section>
}
