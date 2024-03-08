import { IPropsLogicalModalMobile } from "./interfaces";
import { Container } from "./style";
import { Anchor, Button } from "react95";
import { motion } from "framer-motion";
import { animateModal } from "./variants";
import { useNavigate } from "react-router-dom";

export const Modal = ({ handleModal }: IPropsLogicalModalMobile) => {
  const navigate = useNavigate();

  return (
    <Container
      as={motion.div}
      variants={animateModal}
      initial="hidden"
      animate="visible"
    >
      <nav>
        <ul>
          <li>
            <Anchor
              href="#"
              onClick={() => {
                handleModal();
                navigate("/");
              }}
            >
              Página inicial
            </Anchor>
          </li>
          <li>
            <Anchor
              href="#"
              onClick={() => {
                handleModal();
                navigate("/portfolio");
              }}
            >
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
      <Button primary onClick={handleModal}>
        Fechar
      </Button>
    </Container>
  );
};
