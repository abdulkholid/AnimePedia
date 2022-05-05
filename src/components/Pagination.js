import styled from '@emotion/styled';

const PaginationStyle = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	margin: 30px 0px;
	padding: 0px;
	font-size: 12px;

	& li {
		margin: 0px 5px;

		& a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
			height: 30px;
			background-color: transparent;
			border-radius: 5px;
			border: 1px solid #c4c4c4;
		}

		&.active a {
			background-color: var(--ap-yellow);
			color: var(--ap-blue-dark);
			font-weight: 600;
			border-color: var(--ap-yellow);
		}
	}
`;

const Pagination = ({ total, per_page, current }) => {
	return (
		<PaginationStyle>
			<li className="active">
				<a>1</a>
			</li>
			<li>
				<a>2</a>
			</li>
			<li>
				<a>3</a>
			</li>
		</PaginationStyle>
	);
};

export default Pagination;
