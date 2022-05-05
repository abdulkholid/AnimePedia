import styled from '@emotion/styled';

const AnimeHighlightItemStyle = styled.div`
	background-color: var(--ap-cream);
	height: 120px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--ap-blue-dark);
	flex-flow: column;

	& span {
		display: inline-block;
	}
	& .number {
		font-size: 25px;
	}
	& .badge {
		background-color: var(--ap-yellow);
		font-weight: 600;
		font-size: 10px;
		padding: 5px 10px;
		border-radius: 10px;
		margin-top: 10px;
		text-transform: uppercase;
	}
`;

const AnimeHighlightItem = ({ highlight }) => {
	return (
		<AnimeHighlightItemStyle>
			<span className="number">{highlight.count}</span>
			<span className="badge">{highlight.name}</span>
		</AnimeHighlightItemStyle>
	);
};

export default AnimeHighlightItem;
