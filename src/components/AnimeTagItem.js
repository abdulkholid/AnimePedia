import styled from '@emotion/styled';

const AnimeTagItemStyle = styled.span`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 5px 10px;
	background-color: var(--ap-yellow);
	color: var(--ap-blue-dark);
	font-size: 10px;
	font-weight: 600;
	border-radius: 3px;
	margin-right: 5px;
	margin-bottom: 5px;
`;

const AnimeTagItem = ({ tag }) => {
	return <AnimeTagItemStyle>{tag}</AnimeTagItemStyle>;
};

export default AnimeTagItem;
