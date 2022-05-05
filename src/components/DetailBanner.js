import styled from '@emotion/styled';

const DetailBannerStyle = styled.div`
	width: 100%;
	height: 200px;
	background-color: #aaa;
	background-size: cover;
	background-position: top center;

	&:before {
		position: absolute;
		content: "";
		left: 0px;
		right: 0px;
		width: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
		height: 100px;
		z-index: 100;
	}
`;
const DetailBanner = ({ banner }) => {
	return <DetailBannerStyle style={{ backgroundImage: `url(${banner})` }} />;
};

export default DetailBanner;
