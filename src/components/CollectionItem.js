import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import IconNoImage from '../images/icon-noimage.png';
import { GlobalContext } from '../contexts/GlobalContext';
import { useContext } from 'react';
import { CollectionDetailContext } from '../contexts/CollectionDetailContext';

const CollectionItemStyle = styled.div`
	margin-bottom: 15px;
	display: flex;
	background-color: var(--ap-cream);
	color: var(--ap-blue-dark);
	height: 130px;
	border-radius: 15px;
	padding-left: 120px;
	position: relative;

	& .image {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100px;
		height: 100%;
		background-color: #fff;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;

		& img {
			width: 40px;
		}
	}

	& .content {
		height: 100%;
		display: flex;
		justify-content: center;
		flex-flow: column;
		width: 100%;

		& a {
			display: block;
			color: var(--ap-blue-dark);
			font-size: 16px;
			text-decoration: none;
			font-weight: 600;
			margin-bottom: 5px;
		}

		& .count {
			font-size: 12px;
			color: #777;
		}

		& .action-buttons {
			padding-top: 10px;
			margin-top: 10px;
			border-top: 1px dashed #000;
			position: relative;

			&:after {
				content: "";
				width: 15px;
				height: 15px;
				background-color: var(--ap-blue-dark);
				position: absolute;
				right: -8.5px;
				top: -7.5px;
				border-radius: 50%;
			}

			& .btn {
				margin-right: 5px;
				display: inline-flex;
				background-color: var(--ap-cyan);
				border: none;
				padding: 5px 10px;
				border-radius: 5px;

				&.red {
					background-color: var(--ap-red);
					color: #fff;
				}
			}
		}
	}
`;

const CollectionItem = ({ index, collection }) => {
	const { collections, setCollections } = useContext(GlobalContext);
	const { setEditedID, setModalEditOpen } = useContext(CollectionDetailContext);
	const deleteCollection = (collection_id) => {
		if (window.confirm('Are you sure want to delete this collection. All Animes inside will be disapeared!')) {
			const filtered_collections = collections.filter((value, index) => {
				return index !== parseInt(collection_id);
			});
			localStorage.setItem('collections', JSON.stringify(filtered_collections));
			setCollections(JSON.parse(localStorage.getItem('collections')));
			alert('Removing a collection success!');
		}
	};

	const editCollection = (collectionID) => {
		setEditedID(collectionID);
		setModalEditOpen(true);
	};

	return (
		<CollectionItemStyle to="collection-detail">
			<div className="image">
				<img src={IconNoImage} alt="icon no image" />
			</div>
			<div className="content">
				<Link to={`/${index}/collection-detail`} className="title">
					{collection.name}
				</Link>
				<div className="count">{collection.animes.length} items inside</div>

				<div className="action-buttons">
					<button className="btn" onClick={() => editCollection(index)}>
						Edit
					</button>
					<button className="btn red" onClick={() => deleteCollection(index)}>
						Delete
					</button>
				</div>
			</div>
		</CollectionItemStyle>
	);
};

export default CollectionItem;
