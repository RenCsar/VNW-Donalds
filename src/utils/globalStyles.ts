import { createGlobalStyle } from "styled-components";

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
  --cinza-claro: #f9f9f9;

  --shadow-hover: rgba(0, 0, 0, .3);
  --border-light-gray: var(--cinza-claro);

  --bg-header: var(--branco);
  --bg-body: var(--branco);
  --bg-home: var(--branco);
  --bg-section-banner: var(--amarelo);
  --bg-section-promocao: var(--mostarda);
  --bg-footer: var(--branco);
  --bg-border-color: rgba(256, 256, 256, .2);

  --bg-btn-primary: var(--mostarda);
  --bg-btn-primary-hover: var(--vermelho);

  --border-radius-sm: 5px;
  --border-radius-md: 10px;

  --font-family-primary: 'inter', sans-serif;
  --font-color-primary: var(--preto);
  --font-color-secondary: var(--amarelo);
  --font-color-text: var(--mostarda);

  --font-color-header: var(--font-color-primary);
  --btn-font-color: var(--preto);

  --padding-lateral: 40px;
  --padding-lateral-mobile: 20px;
  --padding-top-header: 70px;
  --margin-sm: 20px;
  --margin-md: 50px;

  --header-height: 70px;

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

export default GlobalStyle;