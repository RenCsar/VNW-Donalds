import styled from "styled-components";
import { HeaderFooterShared } from "../../../utils/globalStyles";

export const Container = styled(HeaderFooterShared).attrs({ as: 'footer' })`
background-color: var(--bg-footer);

> .btn-container {
    display: flex;
    gap: 30px;

    > img {
        cursor: pointer;
    }
}
`