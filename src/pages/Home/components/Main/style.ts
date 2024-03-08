import styled from "styled-components";

export const MainStyle = styled.main`
  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #about-me {
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */

      #perfil {
        .perfil-content {
          width: 70vw;
          figure {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            figcaption {
              margin-top: 1rem;
              font-size: 1.1rem;
            }
          }
        }
      }
    }

    section {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      p {
        margin-top: 1.2rem;
        width: 80%;
      }
    }

    #about-me {
      margin-top: 0;

      div {
        h2 {
          margin-top: 3rem;
        }
      }
    }

    #techs {
      .frame-tech {
        width: 80vw;

        #content-img {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          margin-top: 1rem;

          img {
            margin: 1.5rem 1rem;
            width: 60px;
          }
        }
      }
    }

    #services {
      h2 {
        margin-bottom: 1rem;
      }

      div {
        margin: 1.2rem 0;
      }
    }

    #network {
      .frame-network {
        width: 80vw;

        .content-network {
          ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            li {
              list-style-type: none;

              a {
                img {
                  margin: 1.5rem 1rem;
                  width: 60px;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;

      #about-me {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
        margin-top: 0;

        #perfil {
          .perfil-content {
            width: 30vw;
          }
        }

        #about-more-me {
          width: 50vw;

          h2 {
            margin-top: 0;
          }
        }
      }

      #services {
        width: 50vw;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    #container {

     #techs {
      .frame-tech {
        width: 60vw;
      }
     }

     #services {
        width: 55vw;
      }
      
     #network {
      .frame-network {
        width: 50vw;
      }
     }
    }
  }
`;
