import styled from '@emotion/styled';
import AnimeList from '../components/AnimeList';
import BackButton from '../components/BackButton';
import CollectionButton from '../components/CollectionButton';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { useParams } from 'react-router-dom';

const CollectionNameStyle = styled.h1`
	font-weight: 600;
	margin: 0px 0px 5px;
	padding: 0px;
	font-size: 20px;
`;

const CollectionItemCountStyle = styled.h2`
	font-weight: 400;
	margin: 0px 0px 20px;
	padding: 0px;
	font-size: 15px;
	color: #aaa;
`;

const CollectionDetail = () => {
	const { collections } = useContext(GlobalContext);
	const { id } = useParams('id');
	const this_collection = collections[id];

	return (
		<div className="outer skip-topbar">
			<BackButton />
			<CollectionButton />
			<div className="container">
				<CollectionNameStyle>{this_collection.name}</CollectionNameStyle>
				<CollectionItemCountStyle>
					This collection has {this_collection.animes.length} items.
				</CollectionItemCountStyle>
			</div>
			<AnimeList filter={this_collection.animes} />
		</div>
	);
};

export default CollectionDetail;
