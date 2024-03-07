import { GlobalStyle } from "../../styles/global";
import { Header } from "../../components/Header";
import { Main } from "./components/Main";
import { Modal } from "../../components/Modal";
import { Footer } from "./components/Footer";
import { useModal } from "@/contexts/ModalProvider";

export const Home = () => {
  const { modalIsOpen, handleModal } = useModal()

  return (
    <>
      <GlobalStyle />
      {modalIsOpen ? (
        <Modal handleModal={handleModal}/>
      ) : (
        <>
          <Header handleModal={handleModal} />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
};
