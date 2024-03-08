import styled from "styled-components";

export const HeaderStyle = styled.header`
  #container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;

    h1 {
      font-size: 1.5rem;
    }

    nav {
      display: none;
    }

    button {
      background: none;
      border: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    #container {
      margin-top: 2rem;
      
      nav {
        display: flex;

        ul {
          display: flex;

          li {
            list-style-type: none;
            margin: 0 1rem;
            a {
              text-decoration: none;
            }
          }
        }
      }

      button {
        display: none;
      }
    }
  }
`;
