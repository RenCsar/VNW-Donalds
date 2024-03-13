import styled from "styled-components";

export const Container = styled.header`
background-color: var(--bg-header);
width: 100%;
height: 60px;
padding-inline: var(--padding-lateral);
display: flex;
align-items: center;
justify-content: space-between;
user-select: none;

> .logo-img {
    width: 40px; 
    height: 30px;
}

> .btn-container {
    display: flex;
    gap: 30px;
}
`