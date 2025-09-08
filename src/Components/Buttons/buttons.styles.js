import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  max-width: ${({ $width }) => $width || 'none'};
  background: var(--primary-purple);
  color: var(--text-white);
  transition: 0.3s all ease;
  cursor: pointer;

  ${({ $lg }) =>
    $lg &&
    css`
      padding: 16px 20px;
      font-size: 22px;
      line-height: 26px;
      font-weight: 700;
    `}

 ${({ $variant }) =>
  $variant === 'orange'
    ? css`
        background: var(--accent-orange);
        color: var(--text-white);
      `
    : css`
        background: var(--primary-purple);
        color: var(--text-white);
      `}

&:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
  opacity: 0.9;
}
`;
