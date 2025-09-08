import styled, { createGlobalStyle, css } from 'styled-components';

export const Styling = css`
  :root {
    /* Brand Colors */
    --primary-orange: #FDF8EE;
    --primary-purple: #5B4A6B;
    --primary-blue: #0F335E;
    --accent-orange: #FF7426;
    --text-white: #FFFFFF;
    
    /* Text Colors */
    --text-primary: #1D1D1D;
    --text-secondary: #8A8A8A;
    
    /* Text Sizes */
    --text-small: 14px;
    --text-normal: 16px;
    --text-large: 20px;

    /* Line Heights */
    --line-height-normal: 20px;
    --line-height-large: 24px;
    --line-height-xl: 28px;

    /* Typography */
    --font-primary: 'Roboto', sans-serif;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    /* Spacing */
    --space-small: 8px;
    --space-medium: 16px;
    --space-large: 24px;
    --space-xl: 32px;
  }

  html {
    font-size: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box; 
    font-family: var(--font-primary);
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font: var(--text-normal) / var(--line-height-normal) var(--font-primary);
    color: var(--text-primary);
    font-weight: var(--font-weight-normal);
    background: var(--text-white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
    margin: 0 0 10px;
    color: var(--text-primary);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-primary);
  }

  h1, .h1 {
    font-size: 32px;
    line-height: var(--line-height-xl);
  }

  h2, .h2 {
    font-size: 24px;
    line-height: var(--line-height-large);
  }

  h3, .h3 {
    font-size: var(--text-large);
    line-height: var(--line-height-large);
  }

  p {
    color: var(--text-secondary);
    margin: 0 0 10px;
    line-height: var(--line-height-normal);

    &:last-child {
      margin: 0;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: var(--text-primary);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--accent-orange);
    }

        &.active {
      color: var(--accent-orange);
      
      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--accent-orange);
      }
  }

  .btn {
    font-family: var(--font-primary);
    padding: 0;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
    line-height: 20px;
    }
`;

export const GlobalStyles = createGlobalStyle`
  ${Styling}
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionWrapper = styled.section`
  padding: 0;
  margin-bottom: 60px;
`;


export default GlobalStyles;