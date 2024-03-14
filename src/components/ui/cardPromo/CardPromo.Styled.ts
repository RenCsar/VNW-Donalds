import styled from "styled-components";
import { flexCenter } from "../../../utils/globalStyles";

export const Container = styled.div`
  background-color: var(--branco);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  gap: 10px;
  border-radius: var(--border-radius-md);
  user-select: none;

  > img {
    width: 100%;
    border-top-left-radius: var(--border-radius-md);
    border-top-right-radius: var(--border-radius-md);
  }

  > h2 {
    font-size: 17px;
    text-align: center;
    line-height: 15px;
    height: 40px;
  }

  > button {
    ${flexCenter}
    width: 120px;
    height: 30px;
  }
`;
