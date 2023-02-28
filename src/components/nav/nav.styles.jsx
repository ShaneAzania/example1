import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

// css blocks
const link_styles = css`
	text-decoration: none;
	color: #000;

	position: relative;
	bottom: 0em;

	transition: all ease 100ms;

	:hover {
		bottom: 0.1em;

		color: #f00;
	}
`;

export const LogoContainer = styled(Link)`
	padding: 25px;

	${link_styles}
`;

export const NavLinks = styled(Link)`
	/* width: 100%; */
	padding: 10px 15px;

	${link_styles}
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
	position: fixed;
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 0px 10px 3px red;
	/* margin-bottom: 25px; */
`;
