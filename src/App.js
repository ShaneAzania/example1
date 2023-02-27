import './App.scss';
import 'bootstrap';

// data
import { navLinks } from './data/navigation_routes';

// react
import { Routes, Route /*, useLocation*/ } from 'react-router-dom';

// componenets
import Nav from './components/nav/nav';
// routes
import Home from './routes/home/home.route';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Nav links={navLinks} />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
