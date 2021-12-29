import styled from 'styled-components';
import variables from '/styles/_variables.module.scss';
import {Section} from '@/components/common/Section';
import {useEffect, useState} from 'react';
import {AxiosResponse} from 'axios';
import {Company} from '../../models/company';
import {CompanyService} from '../../services/companyService';
import {EntrepriseSirenResponse} from '../../models/api/entrepriseSirenResponse';
import {ParseCompany} from '../../utils/parseCompany';


const CompanyDescription = styled.p`
  margin: ${variables.spaceXS} ${variables.spaceSM};
`;


export const CompanySection = () => {
  const initCompany: Company = {
    address: '',
    name: '',
    siret: ''
  }
  const [company, setCompany] = useState<Company>(initCompany);
  const companyService = new CompanyService();

  useEffect(() => {
    const getCompany = () => {
      companyService.getCompanyDescription('852379890')
        .then(({data}: AxiosResponse<EntrepriseSirenResponse>) => {
          setCompany(ParseCompany.parseEntrepriseSirenToCompany(data))
        })
    }
    getCompany();
  }, []);

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
