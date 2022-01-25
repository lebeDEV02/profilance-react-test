import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import News from './pages/News';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />}></Route>
					<Route path="news" element={<News />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
