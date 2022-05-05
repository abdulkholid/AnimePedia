import styled from '@emotion/styled';
import IconClose from '../images/icon-close.png';
import { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { CollectionDetailContext } from '../contexts/CollectionDetailContext';

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
		& button[type="submit"] {
			display: flex;
			width: 100%;
			height: 45px;
			background-color: var(--ap-purple);
			color: #fff;
			align-items: center;
			justify-content: center;
			border: none;
			border-radius: 15px;
			font-size: 16px;
		}
	}
`;

const AddNewCollection = () => {
	const [ collectionName, setCollectionName ] = useState('');
	const { collections, setCollections, containsSpecialChars } = useContext(GlobalContext);
	const { setModalAddOpen } = useContext(CollectionDetailContext);

	const submitNewCollection = (e) => {
		e.preventDefault();
		if (collectionName === '') {
			alert('Collection Name can not be empty!');
		} else {
			if (containsSpecialChars(collectionName)) {
				alert('Collection Name contains special characters. Remove them now!');
			} else {
				const current_collections = collections;
				const data = {
					name: collectionName,
					cover: null,
					animes: []
				};
				current_collections.push(data);
				localStorage.setItem('collections', JSON.stringify(current_collections));
				setCollections(JSON.parse(localStorage.getItem('collections')));
				alert('Success inserting New Collection.');
				setModalAddOpen(false);
			}
		}
	};

	return (
		<ModalStyle>
			<div className="content">
				<div className="head">
					<h3 className="title">Add New Collection</h3>
					<button className="close" onClick={() => setModalAddOpen(false)}>
						<img src={IconClose} alt="close icon" />
					</button>
				</div>
				<div className="body">
					<form>
						<div className="form-group">
							<input
								type="text"
								placeholder="Name your collection . . ."
								onChange={(e) => setCollectionName(e.target.value)}
								required
							/>
						</div>
						<button type="submit" onClick={submitNewCollection}>
							Submit Data
						</button>
					</form>
				</div>
			</div>
		</ModalStyle>
	);
};

export default AddNewCollection;
