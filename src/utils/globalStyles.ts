import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

ul li,
ol li {
  list-style: none;
}

:root {
  --branco: #FFFFFF;
  --preto: #000000;
  --amarelo: #FFC72C;
  --mostarda: #FEB706;
  --vermelho: #DB0007;  
  --cinza-claro: rgba(0, 0, 0, 0.4);

  --bg-header: var(--branco);
  --bg-body: var(--branco);
  --bg-home: var(--branco);
  --bg-section-banner: var(--amarelo);
  --bg-section-promocao: var(--mostarda);
  --bg-error: var(--mostarda);
  --bg-footer: var(--branco);

  --bg-btn-primary: var(--amarelo);
  --bg-btn-primary-hover: var(--vermelho);

  --border-radius-sm: 8px;
  --border-radius-md: 10px;

  --font-family-primary: 'inter', sans-serif;
  --font-color-primary: var(--preto);
  --font-color-secondary: var(--vermelho);
  --font-color-text: var(--branco);

  --btn-font-color: var(--preto);
  --btn-font-color-hover: var(--branco);

  --padding-lateral: 40px;
  --padding-lateral-mobile: 20px;
  --margin-sm: 20px;
  --margin-md: 50px;

  --transition: .95s;
}

body {
  font-family: var(--font-family-primary);
  color: var(--font-color-primary);
  background-color: var(--bg-body);
  scroll-behavior: smooth;
}

::-webkit-scrollbar-track {
  background-color: var(--mostarda);
}

::-webkit-scrollbar {
  width: 6px;
  background: var(--branco);
}

::-webkit-scrollbar-thumb {
  background: var(--branco);
} 
`;

export const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const titleStyles = `
> h1 {
  color: var(--font-color-text);
  width: 400px;
  font-size: 38px;

  > span {
    color: var(--font-color-secondary);
  }
}
`;

export const HeaderFooterShared = styled.div`
  width: 100%;
  height: 60px;
  padding-inline: var(--padding-lateral);
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

export default GlobalStyle;