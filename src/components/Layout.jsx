import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Layout() {
	return (
		<>
			<header className='header'>
				<div className="container">
				<Link to="/" >
					<img src={logo}></img>
				</Link>
				</div>
			</header>
			<main className='main'>
				<div className="container">
					<Outlet />
				</div>
			</main>
		</>
	)
}

