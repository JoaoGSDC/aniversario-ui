import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body{
        background-color: #ffffff;
        font-family: Roboto;
    }
`;

export const ButtonPrimary = styled.button.attrs((props: { backgroundColor: string }) => props)`
  background-color: ${(props) => props.backgroundColor};

  height: 48px;
  width: 100%;
  border: none;
  border-spacing: 15px;
  color: #fff;
  font-weight: 700;
  transition: 0.4s;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    font-size: 0.75rem;
  }
`;
