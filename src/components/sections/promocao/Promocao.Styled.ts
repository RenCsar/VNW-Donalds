import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 60px var(--padding-lateral);
  background-color: var(--bg-section-promocao);
  min-height: 100vh;

  .text-container {
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--font-color-text);

    > h2 {
      font-size: 32px;
    }
  }

  .card-container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 50px;
  }
`;