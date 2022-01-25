import { useSelector } from 'react-redux';

export default function Homepage() {
	const user = useSelector((state) => state.user.user);
	return (
		<div className="homepage">
			<p className="homepage__greeting">
				{user.login !== '' ? `Привет, ${user.login}!` : `Привет, Гость!`}
			</p>
		</div>
	);
}
