import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ImSpinner } from 'react-icons/im';
const iconSpin = keyframes`0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }`;
export const Spinner = styled(ImSpinner)`
  margin-right: 10px;
  animation: ${iconSpin} 2s infinite linear;
`;
