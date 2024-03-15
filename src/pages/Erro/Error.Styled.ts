import styled from "styled-components";
import { flexCenter, titleStyles } from "../../utils/globalStyles";

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  background-color: var(--bg-error);
  padding: 60px var(--padding-lateral);
  ${flexCenter}
  flex-direction: column;
  gap: 20px;

  > .container-geral {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    > img {
      height: 380px;
      width: 230px;
    }

    ${titleStyles}

    > h1 {
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  > p {
    color: var(--font-color-secondary);
    font-weight: bold;
  }
`;