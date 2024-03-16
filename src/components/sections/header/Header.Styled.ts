import styled from "styled-components";
import { HeaderFooterShared } from "../../../utils/globalStyles";

export const Container = styled(HeaderFooterShared).attrs({ as: "header" })`
  background-color: var(--bg-header);
  > a {
    > .logo-img {
      width: 40px;
      height: 30px;
    }
  }

  > .btn-container {
    display: flex;
    gap: 30px;
  }

  @media (max-width: 500px) {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    > .btn-container {
      gap: 5px;
    }
  }
`;