import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../images/logo.svg';
import AuthButton from './AuthButton';
import '../styles/global.scss';
import '../styles/header.scss';
const classNames = require('classnames/bind');

const setActive = ({ isActive }) =>
	isActive ? classNames('header__link', 'header__link_active') : 'header__link';
export default function Layout() {
	return (
		<>
			<header className="header">
				<div className="container">
					<div className="header__inner">
						<div className="header__logo">
							<NavLink to="/" className={setActive}>
								<img src={logo}></img>
							</NavLink>
						</div>
						<nav className="header__navigation">
							<NavLink to="/news" className={setActive}>
								Новости
							</NavLink>
							<AuthButton classNames="header__button"></AuthButton>
						</nav>
					</div>
				</div>
			</header>
			<main className="main">
				<div className="container">
					<div className="main__inner">
						<Outlet />
					</div>
				</div>
			</main>
		</>
	);
}
