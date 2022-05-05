import { useState, createContext } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
	const colelctionsStorage = localStorage.getItem('collections');
	const [ collections, setCollections ] = useState(JSON.parse(colelctionsStorage));
	const containsSpecialChars = (str) => {
		const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
		return specialChars.test(str);
	};

	const values = {
		collections,
		setCollections,
		containsSpecialChars
	};
	return <GlobalContext.Provider value={values}>{props.children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
