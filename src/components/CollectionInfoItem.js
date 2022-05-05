import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CollectionInfoItemStyle = styled.li`
	display: block;
	border-bottom: 1px dashed #ddd;
	padding: 10px 0px;
	font-size: 13px;

	& a {
		text-decoration: none;
		display: block;
		position: relative;

		&:after {
			content: "";
			position: absolute;
			right: 0px;
			top: 6px;
			width: 5px;
			height: 5px;
			border-width: 2px 2px 0px 0px;
			border-style: solid;
			border-color: #fff;
			transform: rotate(45deg);
		}
	}
`;

const CollectionInfoItem = ({ collection, index }) => {
	return (
		<CollectionInfoItemStyle>
			<Link to={`/${index}/collection-detail`}>{collection}</Link>
		</CollectionInfoItemStyle>
	);
};

export default CollectionInfoItem;
