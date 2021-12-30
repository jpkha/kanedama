import {AccountsContainer} from '@/components/AccountsSection/AccountsContainer';
import {Section} from '@/components/common/Section';
import {AccountCompany} from '../../models/accountCompany';
import {AccountCard} from '@/components/AccountsSection/AccountCard';

interface AccountsSectionProps {
  readonly accounts: AccountCompany[] | undefined;
  readonly error: undefined;
}

export const AccountsSection = ({accounts, error}: AccountsSectionProps) => {
  if (error) return <div>An error has occurred.</div>;
  if (!accounts) return <div>Loading...</div>;
  return <Section>
    <h2> Accounts </h2>
    <AccountsContainer>
      {accounts.map((accountCompany: AccountCompany) => (
        <AccountCard key={accountCompany.accountNumber} accountCompany={accountCompany}/>
      ))}
    </AccountsContainer>
  </Section>
}
