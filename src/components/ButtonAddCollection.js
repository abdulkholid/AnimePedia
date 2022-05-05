import { useContext } from 'react';
import styled from '@emotion/styled';
import ModalAddCollection from './ModalAddCollection';
import { AnimeDetailContext } from '../contexts/AnimeDetailContext';

const ButtonStyle = styled.div`
	position: fixed;
	left: 0px;
	bottom: 0px;
	width: 100%;
	padding-top: 15px;
	padding-bottom: 15px;

	& button {
		display: flex;
		max-width: 100%;
		width: 300px;
		margin: auto;
		background-color: var(--ap-purple);
		color: #fff;
		border: none;
		height: 50px;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		border-radius: 15px;
	}
`;

const ButtonAddCollection = () => {
	const { modalOpen, setModalOpen } = useContext(AnimeDetailContext);
	return (
		<div>
			<ButtonStyle className="container">
				<button onClick={() => setModalOpen(true)}>Add to Collection</button>
			</ButtonStyle>
			{modalOpen && <ModalAddCollection />}
		</div>
	);
};

export default ButtonAddCollection;
