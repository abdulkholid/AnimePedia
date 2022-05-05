import { useContext } from 'react';
import styled from '@emotion/styled';
import IconClose from '../images/icon-close.png';
import CollectionSelector from './CollectionSelector';
import { AnimeDetailContext } from '../contexts/AnimeDetailContext';

const ModalStyle = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
	background-color: rgba(0, 0, 0, .7);
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	color: #1a161f;

	& .content {
		position: relative;
		width: 500px;
		max-width: 95%;
		max-height: 80vh;
		background-color: #fff;
		border-radius: 25px;
		padding: 20px;

		& .head {
			margin-bottom: 20px;

			& .title {
				margin: 0px;
				padding: 0px;
				font-weight: 600;
			}

			& .close {
				background: transparent;
				border: none;
				width: 35px;
				height: 35px;
				position: absolute;
				right: 15px;
				top: 15px;

				& img {
					width: 100%;
					height: auto;
				}
			}
		}
	}
`;

const ModalAddCollection = () => {
	const { setModalOpen } = useContext(AnimeDetailContext);
	return (
		<ModalStyle className="container">
			<div className="content">
				<div className="head">
					<h3 className="title">Add to Collection</h3>
					<button className="close" onClick={() => setModalOpen(false)}>
						<img src={IconClose} alt="close icon" />
					</button>
				</div>
				<div className="body">
					<CollectionSelector />
				</div>
			</div>
		</ModalStyle>
	);
};

export default ModalAddCollection;
