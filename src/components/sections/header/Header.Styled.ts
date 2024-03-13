import styled from "styled-components";
import { HeaderFooterShared } from "../../../utils/globalStyles";

export const Container = styled(HeaderFooterShared).attrs({ as: 'header' })`
background-color: var(--bg-header);

> .logo-img {
    width: 40px; 
    height: 30px;
}

> .btn-container {
    display: flex;
    gap: 30px;
}
`