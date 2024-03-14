export type TButtonStStyledProps = {
    background: string
}

export type THeaderButtonProps = TButtonStStyledProps & {
    texto: string;
    img?: string;
}

export type TCardPromoProps = {
    item: {
        img: string;
        texto: string;
    }
};