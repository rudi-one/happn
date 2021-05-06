import { ButtonStyled } from './button.styles';

type Props = {
	label: string
}

const Button = ({ label }: Props) => (
	<ButtonStyled>{ label }</ButtonStyled>
)

export default Button;
