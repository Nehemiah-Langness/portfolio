import {
	Link,
	Outlet,
	useLocation
} from "react-router-dom";
import Branding from '../assets/logo.svg?react';

export function Layout() {

	const {pathname} = useLocation();

	return <div className="h-100 d-flex flex-column">
		<nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<Branding height='3rem' />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current="page" to='/'>Code</Link>
						</li>
						<li className="nav-item">
							<Link className={`nav-link ${pathname === '/education' ? 'active' : ''}`} aria-current="page" to='/education'>Education</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div className="flex-grow-1 container pt-5">
			<Outlet />
		</div>
		<div className="fs-10 text-end p-2">
			&copy; {new Date().getFullYear()} Nehemiah Langness
		</div>
	</div>;
}
