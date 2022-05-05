import styled from '@emotion/styled';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';

const AnimeItemStyle = styled(Link)`
	height: 200px;
	display: block;
	background-size: cover;
	border-radius: 20px;
	position: relative;
	overflow: hidden;

	& .content {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		padding: 30px 15px 20px 15px;
		background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent);

		& .detail {
			font-size: 10px;
			margin-bottom: 5px;
			font-weight: 600;
			color: #ddd;

			& span {
				display: inline-block;
				margin-right: 3px;
				padding: 2px 5px;
				border-radius: 2px;

				&.bg-yellow {
					background-color: var(--ap-yellow);
					color: #000;
				}
			}
		}

		& .title {
			font-size: 13px;
			color: #fff;
		}
	}
`;

const RemoveAnimeButtonStyle = styled.button`
	display: block;
	margin-top: 5px;
	background-color: var(--ap-red);
	color: #fff;
	padding: 10px 0px;
	width: 100%;
	border: none;
`;

const AnimeItem = ({ anime, show_delete }) => {
	const { id } = useParams();
	const { collections, setCollections } = useContext(GlobalContext);

	// soruce: https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
	function removeA(arr) {
		var what,
			a = arguments,
			L = a.length,
			ax;
		while (L > 1 && arr.length) {
			what = a[--L];
			while ((ax = arr.indexOf(what)) !== -1) {
				arr.splice(ax, 1);
			}
		}
		return arr;
	}

	const removeAnime = (animeID) => {
		const current_collection = collections[id];
		removeA(current_collection.animes, parseInt(animeID));
		localStorage.setItem('collections', JSON.stringify(collections));
		setCollections(JSON.parse(localStorage.getItem('collections')));
	};

	return (
		<div>
			<AnimeItemStyle to={`/${anime.id}/detail`} style={{ backgroundImage: `url(${anime.coverImage.medium})` }}>
				<div className="content">
					<div className="detail">
						<span className="bg-yellow">{(anime.averageScore / 10).toFixed(1)}</span>
						<span>Year {anime.seasonYear}</span>
					</div>
					<div className="title">{anime.title.english}</div>
				</div>
			</AnimeItemStyle>
			{show_delete && (
				<RemoveAnimeButtonStyle
					onClick={() => {
						if (window.confirm(`Are you sure want to remove Anime "${anime.title.english}"?`)) {
							removeAnime(anime.id);
						}
					}}>
					Remove
				</RemoveAnimeButtonStyle>
			)}
		</div>
	);
};

export default AnimeItem;
