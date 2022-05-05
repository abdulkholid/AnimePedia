import styled from '@emotion/styled';
import CollectionItem from './CollectionItem';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { CollectionDetailContext } from '../contexts/CollectionDetailContext';
import ModalEditCollection from './ModalEditCollection';

const CollectionListStyle = styled.div`margin-bottom: 20px;`;

const CollectionList = () => {
	const { collections } = useContext(GlobalContext);
	const { modalEditOpen } = useContext(CollectionDetailContext);

	return (
		<div>
			<CollectionListStyle>
				{collections.map((collection, index) => (
					<CollectionItem key={index} index={index} collection={collection} />
				))}
			</CollectionListStyle>
			{modalEditOpen && <ModalEditCollection />}
		</div>
	);
};

export default CollectionList;
