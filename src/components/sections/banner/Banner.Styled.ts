import styled from "styled-components";
import { flexCenter, titleStyles } from "../../../utils/globalStyles";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-inline: var(--padding-lateral);
  background-color: var(--bg-section-banner);
  padding-block: 30px;
  margin-top: 60px;

  > .layout-container {
    ${flexCenter}
    gap: 100px;
    height: 400px;

    > img {
      width: 300px;
    }

    ${titleStyles}
  }

  > .itens-container {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 60px;

    > img {
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        transition: var(--transition);
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 800px) {
    > .layout-container {
      flex-direction: column-reverse;
      gap: 30px;
      align-items: center;

      > h1 {
        width: 100%;
        text-align: center;
      }

      > img {
        width: 200px;
      }
    }

    .itens-container {
      gap: 40px;
    }
  }

  @media (max-width: 500px) {
    margin-top: 80px;
    > .layout-container {

      > h1 {
        font-size: 30px;
      }

      > img {
        width: 180px;
      }
    }

    .itens-container {
      gap: 10px;
    }
  }
`;
