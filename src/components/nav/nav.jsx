import { LogoContainer, Navigation, NavLinks, NavLinksContainer } from './nav.styles.jsx';
// import { ReactComponent as Logo } from '../../assets/crown.svg';

// react
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

// components
import CartIcon from '../cart-icon/cart-icon';
// import CartDropdown from '../cart-dropdown/cart-dropdown';

function Nav({ links }) {
	const handleCartIconClick = () => {
		console.log('isCartOpen: '.toUpperCase());
	};

	return (
		<Fragment>
			<Navigation>
				<LogoContainer to='/'>GOUGH NUTS{/*}<Logo className='logo' />{*/}</LogoContainer>
				<NavLinksContainer>
					{links.map(({ text, to }) => (
						<NavLinks key={to} to={to}>
							{text.toLowerCase()}
						</NavLinks>
					))}
				</NavLinksContainer>
				<CartIcon onClick={handleCartIconClick} />
				{/* isCartOpen ? <CartDropdown /> : null */}
			</Navigation>
			<Outlet />
		</Fragment>
	);
}

export default Nav;
