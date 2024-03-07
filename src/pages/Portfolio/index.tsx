import { MainStyle } from "@/pages/Portfolio/style";
import { GlobalStyle } from "@/styles/global";
import { Frame, Monitor, Anchor } from "react95";
import { IProject, projects } from "./mock";

export const Portfolio = () => {
  return (
    <>
      <GlobalStyle />
      <MainStyle>
        <div id="container">
          <h1>Projetos</h1>
          <section>
            <Frame style={{ width: "80vw", padding: "20px" }}>
              {projects.map((item: IProject, i: number) => (
                <Frame
                  className="content"
                  shadow
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundImage: `url(${item.background})`, backgroundSize: "cover"
                  }}
                >
                  <Monitor
                    key={i}
                    backgroundStyles={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "auto",
                    }}
                  />
                  <nav>
                    <ul>
                      <li>
                        <Anchor href={item.url} target="_blank">
                          Acessar Projeto
                        </Anchor>
                      </li>
                      <li>
                        <Anchor href={item.github} target="_blank">
                          Repositório Git
                        </Anchor>
                      </li>
                    </ul>
                  </nav>
                </Frame>
              ))}
            </Frame>
          </section>
        </div>
      </MainStyle>
    </>
  );
};
