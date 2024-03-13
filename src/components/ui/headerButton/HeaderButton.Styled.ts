import styled from "styled-components";
import { TButtonStStyledProps } from "../../../utils/types";

export const ButtonSt = styled.button<TButtonStStyledProps>`
padding: 5px 10px;
background-color: ${props => props.background? `var(--${props.background})` : 'var(--bg-btn-primary)'};
cursor: pointer;
border: none;
border-radius: var(--border-radius-sm);
transition: var(--transition);

&:hover {
    transition: var(--transition);
    background-color: var( --bg-btn-primary-hover);
    color:var(--btn-font-color-hover);
}

.container-geral {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-direction: ${props => props.background == "branco"? 'row-reverse' : 'row'};
    font-weight: ${props => props.background == "branco"? 'normal' : 'bold'};
}

`