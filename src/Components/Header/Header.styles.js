import styled from 'styled-components';
import {Flex} from '../../styles/helpers.styles';

export const NavbarSection = styled.header`
  background: var(--primary-orange);
  padding: var(--space-small) 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled(Flex)`
  align-items: center;
  cursor: pointer;
  max-width: 120px;
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
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-weight: var(--font-weight-medium);
  font-size: var(--text-normal);
  font-family: var(--font-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent-orange);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
