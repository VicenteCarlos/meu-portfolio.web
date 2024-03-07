import { MainStyle } from "./style";
import { Avatar, Frame, Anchor } from "react95";
import { iconsNetwork, iconsTechs } from "./mock";

export const Main = () => {
  return (
    <MainStyle>
      <div id="container">
        <section id="about-me">
          <div id="perfil">
            <Frame
              variant="outside"
              shadow
              style={{ padding: "0.5rem", width: "70vw", height: "50vh" }}
            >
              <figure>
                <Avatar
                  size={160}
                  src="../../../../../public/assets/svg/avatar.svg"
                />
                <figcaption>FullStack Developer</figcaption>
              </figure>
            </Frame>
          </div>
          <div>
            <h2>Sobre mim</h2>
            <p>
              Gosto bastante de aprender e ensinar, sempre ajudo quem posso com
              minha experiência profissional e além disso, meu objetivo
              principal e solucionar problemas, afinal, estudo para isso,
              desenvolvendo soluções por meio da programação ou através da
              comunicação em equipe. Tenho contato com o universo de Front-End e
              Back-End, usando React/Node e Angular/ SpringBoot, portanto, sou
              um profissional com as habilidades necessárias para o
              desenvolvimento, projeção e aplicabilidade de testes em aplicações
              web.
            </p>
          </div>
        </section>
        <section id="techs">
          <Frame style={{ width: "80vw", padding: "2rem" }}>
            <h2>Tecnologias</h2>
            <div id="content-img">
              {iconsTechs.map((item, i) => (
                <img key={i} src={item} />
              ))}
            </div>
          </Frame>
        </section>
        <section id="services">
          <h2>Meus serviços</h2>
          <div>
            <h3>Desenvolvimento Front-End</h3>
            <p>
              Trabalho com as mais atualizadas ferramentas do mercado para o
              desenvolvimento de interfaces robustas, possuindo qualidade,
              performance e beleza, além de possuir conceitos de UX/UI aplicados
              para uma melhor experiência.
            </p>
          </div>
          <div>
            <h3>Desenvolvimento Back-End</h3>
            <p>
              Utilizo de uma das melhores tecnologias existentes no mercado para
              o desenvolvimento de aplicações como: api, banco de dados e
              micro-services juntamente com os seus testes, tendo qualidade e
              performance, além de possuir boas práticas aplicadas para uma
              melhor experiência, durabilidade e manutenibilidade.
            </p>
          </div>
        </section>
        <section id="network">
          <Frame style={{ width: "80vw", padding: "2rem" }}>
            <h2>Interaja comigo</h2>
            <nav className="content-network">
              <ul>
                {iconsNetwork.map((item, i) => (
                  <li key={`rede-${i}`}>
                    <Anchor href={item.link} target="_black">
                      <img src={item.path} alt="img-rede" />
                    </Anchor>
                  </li>
                ))}
              </ul>
            </nav>
          </Frame>
        </section>
      </div>
    </MainStyle>
  );
};
