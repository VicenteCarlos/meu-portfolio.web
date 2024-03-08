import styled from "styled-components";

export const MainStyle = styled.main`
  text-align: center;

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 3rem 0;
    }

    section {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      height: 80vh;

      .frame-container {
        display: flex;
        flex-direction: column;
        width: 80vw;

        .content {
          margin: 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;

          nav {
            margin-top: 1.5rem;
            ul {
              li {
                list-style-type: none;
                margin: 1.7rem 0;
                a {
                  text-decoration: none;
                  color: black;
                  background-color: #c6c6c6;
                  padding: 7px;
                  border-radius: 3%;
                  box-shadow: inset 1px 1px 0px 1px #fefefe,
                    inset -1px -1px 0 1px #848584;
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    #container {
      margin-top: 3rem;

      section {
        overflow-y: hidden;

        .frame-container {
          flex-direction: row;
          width: 80vw;
          overflow-x: scroll;

          .content {
            margin: 1.5rem;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    #container {
      section {
        .frame-container {
          width: 66vw;
        }
      }
    }
  }
`;
