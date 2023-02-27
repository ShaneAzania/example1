import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
	/* height: 100%; */
	width: 70px;
	padding: 25px;
`;

export const NavLinks = styled(Link)`
	/* width: 100%; */
	padding: 10px 15px;

	color: #000;
	text-decoration: none;

	cursor: pointer;

	:hover {
		color: #555;
	}
`;

export const NavLinksContainer = styled.div`
	/* width: 70%; */
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 0 auto;
`;

export const Navigation = styled.div`
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* margin-bottom: 25px; */
`;
