import { useState, createContext } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
	const colelctionsStorage = localStorage.getItem('collections');
	const [ collections, setCollections ] = useState(JSON.parse(colelctionsStorage));

	const containsSpecialChars = (str) => {
		const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
		return specialChars.test(str);
	};
	const similar_collection_name = (str) => {
		if (!collections) {
			return [];
		}
		const data = collections.filter((item) => item.name.toLowerCase() === str.toLowerCase());
		return data;
	};

	const values = {
		collections,
		setCollections,
		containsSpecialChars,
		similar_collection_name
	};
	return <GlobalContext.Provider value={values}>{props.children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
