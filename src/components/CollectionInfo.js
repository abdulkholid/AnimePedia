import { useContext } from 'react';
import styled from '@emotion/styled';
import CollectionInfoItem from './CollectionInfoItem';
import { AnimeDetailContext } from '../contexts/AnimeDetailContext';

const CollectionInfoStyle = styled.ul`
	margin: 0px 0px 20px;
	padding: 0px;

	& h3 {
		margin: 0px 0px 5px;
		padding: 0px;
		font-weight: 600;
		font-size: 14px;
		text-transform: uppercase;
	}
`;

const CollectionInfo = () => {
	const { anime_collections } = useContext(AnimeDetailContext);

	if (anime_collections.length > 0) {
		return (
			<CollectionInfoStyle>
				<h3>Stored at</h3>
				{anime_collections.map((collection) => (
					<CollectionInfoItem key={collection.index} index={collection.index} collection={collection.name} />
				))}
			</CollectionInfoStyle>
		);
	}
};

export default CollectionInfo;
