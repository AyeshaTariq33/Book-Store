import styled from 'styled-components';

export const NavbarSection = styled.nav`
  background: var(--primary-orange);
  padding: var(--space-small) 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  .flex-content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
  }

  .Logo{
    align-items: center;
    cursor: pointer;
    max-width: 120px;
  }
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
