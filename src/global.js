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

  .border-ItemRow {
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  .border-Description {
    border-left: 1px solid ${({ theme }) => theme.border};
  }

  @media (max-width: 768px) {
    .border-ItemRow {
      border-bottom: 0px solid ${({ theme }) => theme.border};
    }
  
    .border-Description {
      border-left: 0px solid ${({ theme }) => theme.border};
    }
  }
  `;
