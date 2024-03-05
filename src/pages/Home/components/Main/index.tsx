import { MainStyle } from "./style";
import { Avatar, Frame } from "react95";

export const Main = () => {
  return (
    <MainStyle>
      <div id="container">
        <Frame variant="outside" shadow style={{ padding: "0.5rem" }}>
          <figure>
            <Avatar
              size={160}
              src="../../../../../public/assets/svg/avatar.svg"
            />
            <figcaption>FullStack Developer</figcaption>
          </figure>
        </Frame>
      </div>
    </MainStyle>
  );
};
