import { useState } from 'react';
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
const PaginationStyle = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	margin: 30px 0px;
	padding: 0px;
	font-size: 12px;

	& li {
		margin: 0px 5px;

		& a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
			height: 30px;
			background-color: transparent;
			border-radius: 5px;
			border: 1px solid #c4c4c4;
		}

		&.active a {
			background-color: var(--ap-yellow);
			color: var(--ap-blue-dark);
			font-weight: 600;
			border-color: var(--ap-yellow);
		}
	}
`;

const AnimeList = ({ filter }) => {
	const perpage = !filter ? 10 : 50;
	const [ currentPage, setCurrentPage ] = useState(1);
	const { loading, data } = useQuery(GET_ANIME, { variables: { perPage: perpage, page: currentPage } });

	if (loading) {
		return `Tungguu...`;
	} else {
		const animes = data.Page.media ? data.Page.media : [];
		const buttonCount = 5;
		let buttonsHtml = [];
		for (let index = 1; index <= buttonCount; index++) {
			buttonsHtml.push(
				<li key={index} className={index == currentPage ? 'active' : ''}>
					<a onClick={() => setCurrentPage(index)}>{index}</a>
				</li>
			);
		}

		return (
			<div>
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
				{!filter && <PaginationStyle>{buttonsHtml}</PaginationStyle>}
			</div>
		);
	}
};

export default AnimeList;
