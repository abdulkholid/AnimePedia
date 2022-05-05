import styled from '@emotion/styled';
import AnimeItem from './AnimeItem';
import { useQuery, gql } from '@apollo/client';
import GET_ANIME_QUERY from '../gql-queries/GET_ANIME';

const GET_ANIME = gql(GET_ANIME_QUERY);
const AnimeListStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 15px;
`;

const AnimeList = ({ filter }) => {
	const perpage = !filter ? 6 : 100;
	const { loading, data } = useQuery(GET_ANIME, { variables: { perPage: perpage } });
	if (loading) {
		return `Loading...`;
	} else {
		const animes = data.Page.media ? data.Page.media : [];
		return (
			<AnimeListStyle className="container">
				{animes.map((anime) => {
					if (filter) {
						if (filter.includes(anime.id)) {
							return <AnimeItem anime={anime} key={anime.id} show_delete={true} />;
						}
					} else {
						return <AnimeItem anime={anime} key={anime.id} />;
					}
				})}
			</AnimeListStyle>
		);
	}
};

export default AnimeList;
