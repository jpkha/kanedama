import styled from 'styled-components';

export const AcronymBullet = styled.span`
  background-color: #6246D1;
  color: white;
  font-size: 1rem;
  padding: 0.75rem;
  border-radius: 2.5rem;
`

export const Acronym = ({first, last}: {first: string, last: string}) => {
  return <AcronymBullet>{first.charAt(0)}{last.charAt(0)}</AcronymBullet>
}
