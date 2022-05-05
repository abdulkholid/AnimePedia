import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Anime from './routes/Anime';
import AnimeDetail from './routes/AnimeDetail';
import Collection from './routes/Collection';
import CollectionDetail from './routes/CollectionDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import GlobalContextProvider from './contexts/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
	uri: 'https://graphql.anilist.co',
	cache: new InMemoryCache()
});

root.render(
	<ApolloProvider client={client}>
		<GlobalContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Anime />} exact />
					<Route path="/:id/detail" element={<AnimeDetail />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="/:id/collection-detail" element={<CollectionDetail />} />
				</Routes>
			</BrowserRouter>
		</GlobalContextProvider>
	</ApolloProvider>
);
