import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { GlobalContext } from '../contexts/GlobalContext';
import { AnimeDetailContext } from '../contexts/AnimeDetailContext';

const CollectionSelectorStyle = styled.div`
	margin-left: -20px;
	margin-right: -20px;
	padding-left: 20px;
	padding-right: 20px;
`;

const ButtonSubmit = styled.button`
	display: flex;
	width: 100%;
	background-color: var(--ap-purple);
	color: #fff;
	align-items: center;
	justify-content: center;
	height: 50px;
	border: none;
	border-radius: 15px;
`;

const CollectionSelector = () => {
	const { id } = useParams();
	const { collections, setCollections, containsSpecialChars, similar_collection_name } = useContext(GlobalContext);
	const { setAnime_collections, populate_collection_by_anime } = useContext(AnimeDetailContext);
	const { setModalOpen } = useContext(AnimeDetailContext);
	const [ newCollection, setNewCollection ] = useState(true);
	const [ selectedCollection, setSelectedCollection ] = useState(null);
	const [ newCollectionName, setNewCollectionName ] = useState('');

	const change_collection_selector = (event) => {
		const value = event.target.value;
		if (value === 'new') {
			setNewCollection(true);
		} else {
			setNewCollection(false);
			setSelectedCollection(value);
			setNewCollectionName('');
		}
	};

	const change_new_collection_name = (event) => {
		const value = event.target.value;
		setNewCollectionName(value);
	};

	const insertDataCollection = (isFirstTime, data) => {
		if (isFirstTime) {
			localStorage.setItem('collections', JSON.stringify([ data ]));
		} else {
			localStorage.setItem('collections', JSON.stringify(collections));
		}
		setCollections(JSON.parse(localStorage.getItem('collections')));
		setAnime_collections(populate_collection_by_anime);
		alert('Success inserting Anime to collection.');
		setModalOpen(false);
	};

	const submit_form = () => {
		// validate special char
		if (newCollectionName) {
			if (containsSpecialChars(newCollectionName)) {
				alert('Your Collection Name has special characters. Please remove them first!');
			} else {
				const data = {
					name: newCollectionName,
					cover: null,
					animes: [ parseInt(id) ]
				};
				if (!collections) {
					// first time insert
					insertDataCollection(true, data);
				} else {
					const similar_name = similar_collection_name(newCollectionName);
					// validate unique name
					if (similar_name.length > 0) {
						alert('Collection Name already exist. Try a new one!');
					} else {
						collections.push(data);
						insertDataCollection();
					}
				}
			}
		} else {
			if (newCollection && newCollectionName === '') {
				alert('New collection name can not be empty!');
			}

			const current_collection = collections[selectedCollection];
			if (current_collection.animes.includes(parseInt(id))) {
				alert('This anime already exist in this collection. Try another one!');
			} else {
				current_collection.animes.push(parseInt(id));
				insertDataCollection();
			}
		}
	};

	return (
		<CollectionSelectorStyle>
			<div className="form-group">
				<select onChange={change_collection_selector}>
					<option value="new">Create New Collection</option>
					{collections &&
						collections.map((collection, key) => (
							<option key={key} value={key}>
								{collection.name}
							</option>
						))}
				</select>
			</div>
			{newCollection && (
				<div className="form-group">
					<input
						type="text"
						placeholder="Type Collection Name . . ."
						onChange={change_new_collection_name}
						required
					/>
				</div>
			)}

			<ButtonSubmit onClick={submit_form}>Insert Data to Collection</ButtonSubmit>
		</CollectionSelectorStyle>
	);
};

export default CollectionSelector;
