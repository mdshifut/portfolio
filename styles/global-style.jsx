// eslint-disable-next-line import/no-extraneous-dependencies
import css from "styled-jsx/css";

export default css.global`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .text-center {
    text-align: center;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
  }

  body {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    font-size: 1.6rem;
    color: #646464;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    color: #323232;
  }
  a {
    text-decoration: none;
  }
  /* font-family: 'Merienda', cursive; */
`;
