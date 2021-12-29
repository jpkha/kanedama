import styled from 'styled-components';

export const AcronymBullet = styled.span`
  background-color: #6246D1;
  color: white;
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
  position: relative;
  z-index: 0;
  flex: 0 0 auto;
  ::after {
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font-size: 1rem;
    height: 1rem;
    line-height: 1;
    content: '${({first, last}: {first: string, last: string }) => `${first.charAt(0)}${last.charAt(0)}`}'
  }
`
