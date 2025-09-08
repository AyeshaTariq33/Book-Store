import styled, { css } from 'styled-components';
export const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => props.nowrap ? 'nowrap' : 'wrap'};

  ${props =>
    props.direction === 'column' &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.direction === 'columnReverse' &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.justify === 'center' &&
    css`
      justify-content: center;
    `}

  ${props =>
    props.justify === 'space-between' &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.justify === 'end' &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.align === 'top' &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.align === 'middle' &&
    css`
      align-items: center;
    `}

  ${props =>
    props.align === 'bottom' &&
    css`
      align-items: flex-end;
    `}
`;

export const Centered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 0 var(--space-medium);
  width: 100%;
  
  @media (min-width: 1500px) {
    padding: 0 var(--space-xl);
  }
`;

export const ActionsWrapper = styled.div`
  .actions {
    display: flex;
    gap: var(--space-medium);
    
    @media (max-width: 650px) {
      flex-direction: column;
      gap: var(--space-medium);
    }
    
    @media (max-width: 576px) {
      width: 100%;
    }
    
    button {
      padding: var(--space-medium) var(--space-medium);
      max-width: 100%;
    }
    
    .Search {
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }
`;

