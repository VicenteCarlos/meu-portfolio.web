import { useState } from "react";
import { GlobalStyle } from "../../styles/global";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";

export const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleModal = (): void => setModalIsOpen(!modalIsOpen)

  return (
    <>
      <GlobalStyle />
      {modalIsOpen ? (
        <Modal handleModal={handleModal}/>
      ) : (
        <>
          <Header handleModal={handleModal} />
          <Main />
        </>
      )}
    </>
  );
};
