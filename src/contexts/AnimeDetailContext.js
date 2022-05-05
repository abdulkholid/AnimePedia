import { useState, createContext } from 'react';
import { useParams } from 'react-router-dom';

export const AnimeDetailContext = createContext();

const AnimeDetailContextProvider = (props) => {
	const { id } = useParams();
	const [ modalOpen, setModalOpen ] = useState(false);
	const populate_collection_by_anime = () => {
		let selected_collections = [];
		const obj_anime_collections = JSON.parse(localStorage.getItem('collections'));
		obj_anime_collections.forEach((element, index) => {
			if (element.animes.includes(parseInt(id))) {
				selected_collections.push({ name: element.name, index: index });
			}
		});
		return selected_collections;
	};
	const [ anime_collections, setAnime_collections ] = useState(populate_collection_by_anime);

	const values = {
		modalOpen,
		setModalOpen,
		anime_collections,
		setAnime_collections,
		populate_collection_by_anime
	};
	return <AnimeDetailContext.Provider value={values}>{props.children}</AnimeDetailContext.Provider>;
};

export default AnimeDetailContextProvider;
