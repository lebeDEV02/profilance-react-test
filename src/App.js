import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
