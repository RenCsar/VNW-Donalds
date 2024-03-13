import styled from "styled-components";
import { HeaderFooterShared } from "../../../utils/globalStyles";

export const Container = styled(HeaderFooterShared).attrs({ as: "footer" })`
  background-color: var(--bg-footer);

  > .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 200;
    font-size: 15px;
    color: var(--cinza-claro);

    > img {
      width: 30px;
      height: 20px;
    }
  }

  > .btn-container {
    display: flex;
    gap: 30px;

    > img {
      cursor: pointer;
    }
  }
`;