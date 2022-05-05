import { useState, createContext } from 'react';

export const CollectionDetailContext = createContext();

const CollectionDetailContextProvider = (props) => {
	const [ modalAddOpen, setModalAddOpen ] = useState(false);
	const [ modalEditOpen, setModalEditOpen ] = useState(false);
	const [ editedID, setEditedID ] = useState(null);

	const values = {
		modalAddOpen,
		setModalAddOpen,
		modalEditOpen,
		setModalEditOpen,
		editedID,
		setEditedID
	};
	return <CollectionDetailContext.Provider value={values}>{props.children}</CollectionDetailContext.Provider>;
};

export default CollectionDetailContextProvider;
