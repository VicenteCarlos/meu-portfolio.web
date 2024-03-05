import { IPropsLogicalModalMobile } from "../../interfaces";
import { HeaderStyle } from "./style";

export const Header = ({ handleModal }: IPropsLogicalModalMobile) => {
  return (
    <HeaderStyle id="home">
      <div id="container">
        <h1>Vicente Carlos</h1>
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
