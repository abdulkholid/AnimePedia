import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import ButtonIcon from '../images/icon-collection.png';
import { GlobalContext } from '../contexts/GlobalContext';

const ButtonStyle = styled(Link)`
	width: 45px;
	height: 45px;
	background-color: var(--ap-purple);
	display: flex;
	position: absolute;
	z-index: 500;
	right: 20px;
	top: 15px;
	border-radius: 15px;
	justify-content: center;
	align-items: center;
	border: none;
`;

const ButtonIconStyle = styled.img`
	width: 20px;
	height: auto;
	margin-top: -3px;
`;

const ButtonCounterStyle = styled.div`
	width: 22px;
	height: 22px;
	border-radius: 50%;
	background-color: var(--ap-yellow);
	color: #fff;
	position: absolute;
	bottom: -8px;
	right: -8px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 10px;
	border: 2px solid var(--ap-blue-dark);
	font-weight: bold;
`;

const CollectionButton = () => {
	const { collections } = useContext(GlobalContext);
	return (
		<ButtonStyle to="/collection">
			<ButtonIconStyle src={ButtonIcon} />
			{collections && <ButtonCounterStyle>{collections.length}</ButtonCounterStyle>}
		</ButtonStyle>
	);
};

export default CollectionButton;
