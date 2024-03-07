import { ReactNode, createContext, useContext, useState } from "react";

interface IPropsModalProvider {
  children: ReactNode;
}

interface IModalContext {
  modalIsOpen: boolean;
  handleModal: () => void;
}

const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IPropsModalProvider) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleModal = (): void => setModalIsOpen(!modalIsOpen);

  return (
    <ModalContext.Provider value={{ modalIsOpen, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
