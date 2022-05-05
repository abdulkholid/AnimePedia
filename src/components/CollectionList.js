import styled from '@emotion/styled';
import CollectionItem from './CollectionItem';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { CollectionDetailContext } from '../contexts/CollectionDetailContext';
import ModalEditCollection from './ModalEditCollection';

const CollectionListStyle = styled.div`margin-bottom: 20px;`;
const EmptyCollectionStyle = styled.div`
	text-align: center;
	color: red;
`;

const CollectionList = () => {
	const { collections } = useContext(GlobalContext);
	const { modalEditOpen } = useContext(CollectionDetailContext);

	return (
		<div>
			<CollectionListStyle>
				{collections ? (
					collections.map((collection, index) => (
						<CollectionItem key={index} index={index} collection={collection} />
					))
				) : (
					<EmptyCollectionStyle>No Collection Found</EmptyCollectionStyle>
				)}
			</CollectionListStyle>
			{modalEditOpen && <ModalEditCollection />}
		</div>
	);
};

export default CollectionList;
