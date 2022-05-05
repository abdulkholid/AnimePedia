import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import IconBack from '../images/icon-back.png';

const BackButtonStyle = styled.button`
	position: absolute;
	z-index: 500;
	top: 20px;
	left: 15px;
	width: 45px;
	border-radius: 15px;
	background-color: transparent;
	border: none;

	& img {
		width: 100%;
	}
`;

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<BackButtonStyle onClick={() => navigate(-1)}>
			<img src={IconBack} alt="icon back" />
		</BackButtonStyle>
	);
};

export default BackButton;
