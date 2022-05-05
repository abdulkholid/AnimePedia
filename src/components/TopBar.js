import Logo from '../images/logo.png';
import styled from '@emotion/styled';
import CollectionButton from './CollectionButton';
import { Link } from 'react-router-dom';

const TopBarStyle = styled.div`
	background-color: var(--ap-blue-dark);
	padding-top: 30px;
	padding-bottom: 30px;
	position: fixed;
	z-index: 999;
	top: 0px;
	left: 0px;
	width: 100%;
`;
const LogoStyle = styled.img`width: 150px;`;

const TopBar = () => {
	return (
		<TopBarStyle className="container">
			<Link to="/">
				<LogoStyle src={Logo} />
			</Link>
			<CollectionButton />
		</TopBarStyle>
	);
};

export default TopBar;
