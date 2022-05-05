import styled from '@emotion/styled';
import AddNewCollection from './AddNewCollection';
import { useContext } from 'react';
import { CollectionDetailContext } from '../contexts/CollectionDetailContext';

const AddCollectionButtonStyle = styled.button`
	display: block;
	width: 100%;
	height: 50px;
	border-radius: 15px;
	background-color: var(--ap-purple);
	color: #fff;
	border: none;
	font-size: 15px;
	margin-bottom: 15px;
`;

const AddCollectionButton = () => {
	const { modalAddOpen, setModalAddOpen } = useContext(CollectionDetailContext);
	return (
		<div>
			<AddCollectionButtonStyle onClick={() => setModalAddOpen(true)}>Add a Collection</AddCollectionButtonStyle>
			{modalAddOpen && <AddNewCollection />}
		</div>
	);
};

export default AddCollectionButton;
