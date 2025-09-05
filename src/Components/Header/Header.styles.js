import styled from 'styled-components';
import { Flex } from '../../styles/helpers.styles';

export const NavbarSection = styled.header`
  background: var(--text-white);
  padding: var(--space-medium) 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const LogoSection = styled(Flex)`
  align-items: center;
  cursor: pointer;
  max-width: 60px;
`;


export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  
  a {
    font-weight: var(--font-weight-medium);
    font-size: var(--text-normal);
    position: relative;
  }

   
  @media (max-width: 768px) {
    display: none; 
  }
`;


export const SignInButton = styled.button`
  background: var(--primary-purple);
  color: var(--text-white);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: var(--font-weight-medium);
  font-size: var(--text-normal);
  font-family: var(--font-primary);
  
  &:hover {
    background: var(--primary-blue);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(91, 74, 107, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
