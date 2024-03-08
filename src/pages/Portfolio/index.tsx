import { MainStyle } from "@/pages/Portfolio/style";
import { GlobalStyle } from "@/styles/global";
import { Frame, Monitor, Anchor } from "react95";
import { IProject, projects } from "./mock";
import { Header } from "@/components/Header";
import { useModal } from "@/contexts/ModalProvider";
import { Modal } from "@/components/Modal";

export const Portfolio = () => {
  const { handleModal, modalIsOpen } = useModal();

  return (
    <>
      <GlobalStyle />
      {modalIsOpen ? (
        <Modal handleModal={handleModal} />
      ) : (
        <>
          <Header handleModal={handleModal} />
          <MainStyle>
            <div id="container">
              <div id="menu">
                <h1>Projetos</h1>
              </div>
              <section>
                <Frame className="frame-container" style={{ padding: "20px" }}>
                  {projects.map((item: IProject, i: number) => (
                    <Frame
                      className="content"
                      shadow
                      style={{
                        padding: "10px",
                        backgroundImage: `url(${item.background})`,
                        backgroundSize: "cover",
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
      )}
    </>
  );
};
