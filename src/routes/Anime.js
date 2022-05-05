import TopBar from '../components/TopBar';
import AnimeList from '../components/AnimeList';
import Pagination from '../components/Pagination';
import ButtonAddCollection from '../components/ButtonAddCollection';
import AnimeDetailContextProvider from '../contexts/AnimeDetailContext';

const Anime = () => {
	return (
		<div className="outer skip-topbar skip-bottombar">
			<TopBar />
			<AnimeList />
			<Pagination />
			<AnimeDetailContextProvider>
				<ButtonAddCollection />
			</AnimeDetailContextProvider>
		</div>
	);
};

export default Anime;
