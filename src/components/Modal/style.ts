import styled from "styled-components";

export const Container: any = styled.div`
  background-color: #C6C6C6;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  nav {
    text-align: center;
    ul {
        margin-top: 3rem;
        li {
            list-style-type: none;
            margin: 2rem 0;
            font-size: 1.4rem;
            a {
                text-decoration: none;
            }
        }
    }
  }

  button {
    border: none;
    background-color: #C6C6C6;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    padding: 1.8rem;
    font-family: 'ms_sans_serif';
  }
`;
