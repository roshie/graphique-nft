import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
  a {
    color: ${({ theme }) => theme.text} !important;
  }
  
  .nav-link {
    color: ${({ theme }) => theme.navLink} !important;
  }

  .nav-link .active {
    color: ${({ theme }) => theme.navLinkActive} !important;
  }
  `;
