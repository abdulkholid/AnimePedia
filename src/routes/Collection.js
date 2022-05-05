import CollectionList from '../components/CollectionList';
import TopBar from '../components/TopBar';
import AddCollectionButton from '../components/AddCollectionButton';
import CollectionDetailContextProvider from '../contexts/CollectionDetailContext';

const collections = [ 'Sci-Fi 2008', 'Romance Banget', 'Film Advanture', 'Commedy' ];

const Collection = () => {
	return (
		<div className="outer skip-topbar">
			<CollectionDetailContextProvider>
				<TopBar />
				<div className="container">
					<AddCollectionButton />
					<CollectionList />
				</div>
			</CollectionDetailContextProvider>
		</div>
	);
};

export default Collection;
