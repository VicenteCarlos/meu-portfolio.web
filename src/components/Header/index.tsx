import { useNavigate } from "react-router-dom";
import { IPropsLogicalModalMobile } from "../Modal/interfaces";
import { HeaderStyle } from "./style";
import { Anchor } from "react95";

export const Header = ({ handleModal }: IPropsLogicalModalMobile) => {
  const navigate = useNavigate();

  return (
    <HeaderStyle id="home">
      <div id="container">
        <h1>Vicente Carlos</h1>
        <nav>
          <ul>
            <li>
              <Anchor href="#" onClick={() => navigate("/")}>
                Página inicial
              </Anchor>
            </li>
            <li>
              <Anchor href="#" onClick={() => navigate("/portfolio")}>
                Projetos
              </Anchor>
            </li>
            <li>
              <Anchor
                href="https://drive.google.com/file/d/1zXradmgh5Wo4umhGUJ2GBVU7tJV9zusS/view?usp=sharing"
                target="_blank"
              >
                Meu currículo
              </Anchor>
            </li>
          </ul>
        </nav>
        <button onClick={handleModal}>
          <img
            src="../../../../../public/assets/svg/menu-mobile.svg"
            alt="menu-mobile"
          />
        </button>
      </div>
    </HeaderStyle>
  );
};
