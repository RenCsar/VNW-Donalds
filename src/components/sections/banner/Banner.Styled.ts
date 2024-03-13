import styled from "styled-components";
import { flexCenter } from "../../../utils/globalStyles";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding-inline: var(--padding-lateral);
  background-color: var(--bg-section-banner);
  padding-block: 30px;

  > .layout-container {
    ${flexCenter}
    gap: 100px;
    height: 400px;

    > img {
      width: 300px;
    }

    > h1 {
      color: var(--font-color-text);
      width: 400px;
      font-size: 38px;

      > span {
        color: var(--font-color-secondary);
      }
    }
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
`;