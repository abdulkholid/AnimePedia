import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import DetailBanner from '../components/DetailBanner';
import CollectionButton from '../components/CollectionButton';
import BackButton from '../components/BackButton';
import AnimeTag from '../components/AnimeTag';
import AnimeHighlight from '../components/AnimeHighlight';
import ButtonAddCollection from '../components/ButtonAddCollection';
import CollectionInfo from '../components/CollectionInfo';
import AnimeDetailContextProvider from '../contexts/AnimeDetailContext';
import { useQuery, gql } from '@apollo/client';
import GET_ANIME_BY_ID_QUERY from '../gql-queries/GET_ANIME_BY_ID';

const GET_ANIME_BY_ID = gql(GET_ANIME_BY_ID_QUERY);
const AnimeTitleStyle = styled.h1`
	margin: 0px;
	padding: 20px 0px;
	font-size: 20px;
	font-weight: normal;
`;

const AnimeDescriptionStyle = styled.article`
	font-size: 13px;
	line-height: 20px;
	color: #ddd;
	margin-bottom: 20px;
`;

const AnimeDetail = () => {
	const { id } = useParams();
	const { loading, data } = useQuery(GET_ANIME_BY_ID, {
		variables: { findID: id }
	});
	if (loading) {
		return `Loading...`;
	} else {
		const anime = data.Page.media[0];
		const AnimeHighlights = [
			{ name: 'Episode', count: anime.episodes },
			{ name: 'Rating', count: (anime.averageScore / 10).toFixed(1) },
			{ name: 'Year', count: anime.seasonYear }
		];

		return (
			<div className="outer skip-bottombar">
				<AnimeDetailContextProvider>
					<BackButton />
					<CollectionButton />
					<DetailBanner banner={anime.bannerImage} />
					<div className="container">
						<AnimeTitleStyle>{anime.title.english}</AnimeTitleStyle>
						<AnimeTag tags={anime.genres} />
						<AnimeDescriptionStyle dangerouslySetInnerHTML={{ __html: anime.description }} />
						<AnimeHighlight highlights={AnimeHighlights} />
						<CollectionInfo />
					</div>
					<ButtonAddCollection />
				</AnimeDetailContextProvider>
			</div>
		);
	}
};

export default AnimeDetail;
