import { THeaderButtonProps } from "../../../utils/types";
import { ButtonSt } from "./HeaderButton.Styled";

const HeaderButton = ({ texto, img, background }: THeaderButtonProps) => {
    return (
        <ButtonSt background={background}>
            <div className="container-geral">
                <p>{texto}</p>
                {
                    img ?
                        <img src={img} alt="button-icon" />
                        :
                        ''
                }
            </div>
        </ButtonSt>
    )
}

export default HeaderButton;