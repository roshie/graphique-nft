import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
  a {
    color: ${({ theme }) => theme.text} !important;
  }
  
  .navbar-nav > .nav-link {
    color: ${({ theme }) => theme.navLink} !important;
    font-weight: 550 !important;
  }

  .navbar-nav > .nav-link .active {
    color: ${({ theme }) => theme.navLinkActive} !important;
    font-weight: 550 !important;
    
  }

  .modal-content {
    background-color: ${({ theme }) => theme.body} !important;
  }

  .nav-item > .nav-link {
    font-size: 16px;
    line-height: 24px;
    border: none !important;
    margin-bottom: 0 !important;
    padding: .5rem 0rem !important;
    margin-right: 1rem;
  }
  
  .nav-item > .nav-link.active {
    background-color: ${({ theme }) => theme.body} !important;
    border-bottom: 1px solid ${({ theme }) => theme.borderActive} !important;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
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

    .nav-border-top {
      border-top: 1px solid ${({ theme }) => theme.border};
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      margin-top:65vh;
    }
    .navbar-nav > .nav-link {
      font-weight: bold;
    }

    .navbar-collapse.show {
      min-height: 100vh;
    }
  }
  `;
