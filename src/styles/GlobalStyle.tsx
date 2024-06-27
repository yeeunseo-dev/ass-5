import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "noto-sans", sans-serif;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

h1 {
  margin: 32px auto 32px;
}

h2 {
  font-size: 28px;
  margin: 0px auto 32px;
}

h3 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 12px;
}

p {
  font-size: 18px;
  font-weight: 400;
}

`;

export default GlobalStyle;
