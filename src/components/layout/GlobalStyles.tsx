import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    --font-weight-bold: 600;
    --font-weight-medium: 500;
    --font-weight-light: 400;
    --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --color-primary: hsla(254, 81%, 40%, 1);
    --color-text: hsla(0, 0%, 100%, 1);
    --color-background-dark: hsla(240, 39%, 20%, 1);
    --color-background: hsla(222, 100%, 97%, 1);
  }

  #gatsby-focus-wrapper {
    isolation: isolate;
  }

  body {
    font-family: var(--font-family);
    background: var(--color-background);

    @media (prefers-color-scheme: dark) {
      background: var(--color-background-dark);
    }
  }

  a {
    color: var(--color-primary);
    font-weight: bold;
    text-decoration: none;
  }
`;
