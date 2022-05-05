import styled from '@emotion/styled';
import AnimeHighlightItem from './AnimeHighlightItem';

const AnimeHighlightStyle = styled.div`
	margin-bottom: 20px;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 15px;
`;

const AnimeHighlight = ({ highlights }) => {
	return (
		<AnimeHighlightStyle>
			{highlights.map((highlight, key) => <AnimeHighlightItem key={key} highlight={highlight} />)}
		</AnimeHighlightStyle>
	);
};

export default AnimeHighlight;
