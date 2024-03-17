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

  @media (max-width: 500px) {
    min-height: calc(100vh - 100px);
    padding: 100px var(--padding-lateral-mobile);
    
    .container-geral {
      flex-direction: column;
      margin-top: 60px;

      > img {
        height: 250px;
        width: 180px;
      }

      h1 {
        width: 100%;
        align-items: center;
        font-size: 28px;
      }
    }

    p {
      text-align: center;
    }
  }
`;