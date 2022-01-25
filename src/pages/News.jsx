import { useEffect, useState } from 'react';
import news from '../mock-jsons/News';
import '../styles/news.scss';
export default function News() {
	const [query, setQuery] = useState('');

	const [filteredNews, setFilteredNews] = useState(news);

	useEffect(() => {
		if (query !== false) {
			setFilteredNews([...news].filter((item) => item.title.includes(query.toLowerCase())));
		}
	}, [query]);

	return (
		<>
			<div className="news">
				<div className="news__inner">
					<input
						placeholder="Поиск"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="news__search search"></input>
					<ul className="news-list">
						{filteredNews.map((item) => {
							return (
								<li className="news-list__item new-item" key={item.id}>
									<h3 className="new-item__title">{item.title}</h3>
									<p className="new-item__body">{item.body}</p>
									<time className="new-item__time">{item.publishedAt.slice(0, 10)}</time>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}
