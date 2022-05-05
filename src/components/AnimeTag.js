import styled from '@emotion/styled';
import AnimeTagItem from './AnimeTagItem';

const AnimeTagStyle = styled.div`margin-bottom: 20px;`;

const AnimeTag = ({ tags }) => {
	return <AnimeTagStyle>{tags.map((tag) => <AnimeTagItem key={tag} tag={tag} />)}</AnimeTagStyle>;
};

export default AnimeTag;
